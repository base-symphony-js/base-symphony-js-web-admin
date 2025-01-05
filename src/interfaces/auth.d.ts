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

export type Roles = 'admin' | 'owner'

export interface IRole {
  id: string
  type: Roles
  title_en: string
  title_es: string
  description_en: string
  description_es: string
  state: boolean
}
