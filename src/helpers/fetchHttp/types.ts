export interface FetchHttpTypes {
  url: string,
  method?: string,
  body?: {
    date?: string,
    doctorID?: string,
    note?: string,
    reason?: string,
    firstName?: string
    lastName?: string
    userName?: string,
    password?: string,
    confirmPassword?: string,
  } | null | string
  token?: {
    access_token: string
  }
  fetchWithToken?: boolean
}
