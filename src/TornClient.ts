import axios from 'axios'

import apiSelect from './selection'

export interface ClientOptions {
  verifySelection?: boolean
  throwError?: boolean
  baseUrl?: string
}

export default class TornClient {
  apiKey: string
  doVerifySelection: boolean
  throwError: boolean
  baseUrl: string

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
    this.throwError = options?.throwError ?? false
  }

  async company(id?: string, selections?: string[]): Promise<any> {
    this.verifySelections(selections, apiSelect.company.isSelection)
    return this.execute(this.buildUrl('company', selections ?? [], id))
  }

  async faction(id?: string, selections?: string[]): Promise<any> {
    this.verifySelections(selections, apiSelect.faction.isSelection)
    return this.execute(this.buildUrl('faction', selections ?? [], id))
  }

  async market(id?: string, selections?: string[]): Promise<any> {
    this.verifySelections(selections, apiSelect.market.isSelection)
    return this.execute(this.buildUrl('market', selections ?? [], id))
  }

  async property(id?: string, selections?: string[]): Promise<any> {
    this.verifySelections(selections, apiSelect.property.isSelection)
    return this.execute(this.buildUrl('property', selections ?? [], id))
  }

  async torn(id?: string, selections?: string[]): Promise<any> {
    this.verifySelections(selections, apiSelect.torn.isSelection)
    return this.execute(this.buildUrl('torn', selections ?? [], id))
  }

  async user(id?: string, selections?: string[]): Promise<any> {
    this.verifySelections(selections, apiSelect.user.isSelection)
    return this.execute(this.buildUrl('user', selections ?? [], id))
  }

  /**
   * Executes the request to the Torn API and logs the response if it is an error.
   * @param url The Torn API URL including parameters
   * @returns The response from the Torn API, currently unchecked.
   */
  async execute(url: string): Promise<any> {
    console.debug(`GET ${url}`)
    const response = await axios.get(url)
    if (response.data['error'] != null) {
      if (this.throwError) {
        throw new Error(
          `Request failed with error: ${response.data['error']['error']}`
        )
      }
    }
    return response.data
  }

  /**
   * Builds the URL that is sent to the Torn API. Handles the path, selections and id params.
   * @param compartment The path to send the request to, will be one of user, faction, etc..
   * @param id The id of the user, faction, company or other.
   * @param selections List of selections to specify the requested content.
   * @returns
   */
  buildUrl(compartment: string, selections: string[], id?: string): string {
    const selectionParams = this.buildSelectionParam(selections)
    const idParam = id != null ? id : ''

    return (
      `${this.baseUrl}/${compartment}/${idParam}` +
      `?selections=${selectionParams}` +
      `&key=${this.apiKey}`
    )
  }

  buildSelectionParam(selections?: string[]): string {
    if (selections.length == 0) return ''
    return selections.map((s) => s.toLowerCase()).join(',')
  }

  /**
   * Checks whether all provided selections are valid for their request type.
   * @param selections List of the provided selections.
   * @param isSelection Method that should be used to check the selection.
   * @returns Returns nothing if successful, otherwise throws an exception.
   */
  verifySelections(
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
