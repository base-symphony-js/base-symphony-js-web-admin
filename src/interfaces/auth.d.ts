export interface IPersonalInfo {
  firstName: string
  lastName?: string
  email: string
  phoneNumber?: string
  photo?: string
}

export interface ITokens {
  accessToken: string
  refreshToken: string
}
