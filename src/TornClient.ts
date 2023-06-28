import axios from 'axios'

import apiSelect from './selection'
import { ClientOptions, ErrorResponse, Meta, TornResponse } from './types'

export default class TornClient {
  private apiKey: string
  private doVerifySelection: boolean
  private baseUrl: string
  private preRequestListeners: Map<string, (meta: Meta) => void> = new Map()

  /**
   * Constructor for the TornClient. An API key must be provided.
   * @param apiKey The API key of the user performing the requests.
   * @param options Custom options to control the client behavior.
   */
  constructor(apiKey: string, options?: ClientOptions) {
    if (apiKey == null) {
      throw new Error('No API key was provided.')
    }
    this.apiKey = apiKey
    // Option that controls whether the client checks if the used selection is valid.
    this.doVerifySelection = options?.verifySelection ?? false
    // Option that can be set to use a custom API URL.
    this.baseUrl = options?.baseUrl ?? 'https://api.torn.com'
  }

  setApiKey(apiKey: string): void {
    this.apiKey = apiKey
  }

  addPreRequestListener(tag: string, func: (meta: Meta) => void): void {
    this.preRequestListeners.set(tag, func)
  }

  removePreRequestListener(tag: string): void {
    this.preRequestListeners.delete(tag)
  }

  company = async (selections?: string | string[], params?: { id?: string }): Promise<TornResponse | ErrorResponse> => this.handle('company', selections, params)
  // TODO add support for additional params ('to', 'from', 'stat' for 'contributors')
  faction = async (selections?: string | string[], params?: { id?: string }): Promise<TornResponse | ErrorResponse> => this.handle('faction', selections, params)
  market = async (selections?: string | string[], params?: { id?: string }): Promise<TornResponse | ErrorResponse> => this.handle('market', selections, params)
  property = async (selections?: string | string[], params?: { id?: string }): Promise<TornResponse | ErrorResponse> => this.handle('property', selections, params)
  torn = async (selections?: string | string[], params?: { id?: string }): Promise<TornResponse | ErrorResponse> => this.handle('torn', selections, params)
  // TODO add support for additional params ('to', 'from')
  user = async (selections?: string | string[], params?: { id?: string }): Promise<TornResponse | ErrorResponse> => this.handle('user', selections, params)

  private async handle(compartment: string, selections?: string | string[], params?: { id?: string }): Promise<TornResponse | ErrorResponse> {
    let selectionsArr = []
    if (selections) {
      selectionsArr = Array.isArray(selections) ? selections : [selections]
    }
    this.verifySelections(selectionsArr, apiSelect.user.isSelection)
    return this.request(this.buildUrl(compartment, selectionsArr, params?.id))
  }

  /**
   * Builds the URL that is sent to the Torn API. Handles the path, selections and id params.
   * @param compartment The path to send the request to, will be one of user, faction, etc..
   * @param id The id of the user, faction, company or other.
   * @param selections List of selections to specify the requested content.
   * @returns
   */
  private buildUrl(
    compartment: string,
    selections: string[],
    id?: string
  ): string {
    const selectionParams = this.buildSelectionParam(selections)
    const idParam = id != null ? id : ''

    return (
      `${this.baseUrl}/${compartment}/${idParam}` +
      `?selections=${selectionParams}` +
      `&key=${this.apiKey}`
    )
  }

  private buildSelectionParam(selections: string[]): string {
    if (selections.length == 0) return ''
    return selections.map((s) => s.toLowerCase()).join(',')
  }

  /**
   * Executes the request to the Torn API and logs the response if it is an error.
   * @param url The Torn API URL including parameters
   * @returns The response from the Torn API, currently unchecked.
   */
  private async request(url: string): Promise<TornResponse | ErrorResponse> {
    const meta = { timestamp: Date.now(), url, apiKey: this.apiKey }
    this.preRequestListeners.forEach((callback) => callback(meta))
    return axios
      .get(url)
      .then((response) => {
        if (response.data['error'] != null) {
          return {
            _meta: meta,
            error: { ...response.data['error'], isTornError: true },
          }
        }
        return { _meta: meta, ...response.data }
      })
      .catch((reason) => {
        return { _meta: meta, error: { reason, isTornError: false } }
      })
  }

  /**
   * Checks whether all provided selections are valid for their request type.
   * @param selections List of the provided selections.
   * @param isSelection Method that should be used to check the selection.
   * @returns Returns nothing if successful, otherwise throws an exception.
   */
  private verifySelections(
    selections: string[],
    isSelection: (value: string) => boolean
  ): void {
    if (!this.doVerifySelection || selections.length == 0) {
      return
    }
    selections.forEach((selection) => {
      if (!isSelection(selection))
        throw new Error(
          `${selection} is not a valid parameter, cancelling request`
        )
    })
  }
}
