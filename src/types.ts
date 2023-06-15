export interface ClientOptions {
  verifySelection?: boolean
  baseUrl?: string
}

export interface Meta {
  url: string
}

export type TornResponse = { _meta: Meta } & Record<string, any>

export interface TornError {
  code: number
  error: string
  isTornError: true
}

export interface GenericError {
  isTornError: false
}

export interface ErrorResponse {
  _meta: Meta
  error: TornError | GenericError
}
