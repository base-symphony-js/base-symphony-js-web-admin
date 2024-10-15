import { IPersonalInfo, IRole, ITokens } from '@interfaces'

export const AuthStorage = {
  getTokens(): ITokens {
    return JSON.parse(localStorage.getItem('auth-tokens') ?? '{}')
  },
  setTokens(newTokens: ITokens) {
    localStorage.setItem('auth-tokens', JSON.stringify(newTokens))
  },
  removeTokens() {
    localStorage.removeItem('auth-tokens')
  },
  getPersonalInfo(): IPersonalInfo {
    return JSON.parse(localStorage.getItem('auth-personal-info') ?? '{}')
  },
  setPersonalInfo(newTokens: IPersonalInfo) {
    localStorage.setItem('auth-personal-info', JSON.stringify(newTokens))
  },
  removePersonalInfo() {
    localStorage.removeItem('auth-personal-info')
  },
  getRoles(): IRole[] | null {
    const roles = localStorage.getItem('auth-roles')
    if (roles) {
      return JSON.parse(roles)
    } else {
      return null
    }
  },
  setRoles(newTokens: IRole[]) {
    localStorage.setItem('auth-roles', JSON.stringify(newTokens))
  },
  removeRoles() {
    localStorage.removeItem('auth-roles')
  },
}
