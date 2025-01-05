import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPersonalInfo, IRole, ITokens } from '@interfaces'
import { AuthStorage } from '@services'

export interface AuthState {
  isAuth: boolean
  personalInfo: IPersonalInfo
  tokens: ITokens
  roles: IRole[]
  permissions: string[]
}

const initialState: AuthState = {
  isAuth: false,
  personalInfo: {
    firstName: '',
    email: '',
  },
  tokens: {
    accessToken: '',
    refreshToken: '',
  },
  roles: [],
  permissions: [],
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        personalInfo: IPersonalInfo
        tokens: ITokens
        roles: IRole[]
        permissions: string[]
      }>,
    ) => {
      AuthStorage.setPersonalInfo(action.payload.personalInfo)
      AuthStorage.setTokens(action.payload.tokens)
      AuthStorage.setRoles(action.payload.roles)
      AuthStorage.setPermissions(action.payload.permissions)
      state.isAuth = true
      state.personalInfo = action.payload.personalInfo
      state.tokens = action.payload.tokens
      state.roles = action.payload.roles
      state.permissions = action.payload.permissions
    },
    updatePersonalInfo: (
      state,
      action: PayloadAction<{ personalInfo: IPersonalInfo }>,
    ) => {
      AuthStorage.setPersonalInfo(action.payload.personalInfo)
      state.personalInfo = action.payload.personalInfo
    },
    updateTokens: (state, action: PayloadAction<{ tokens: ITokens }>) => {
      AuthStorage.setTokens(action.payload.tokens)
      state.tokens = action.payload.tokens
    },
    updateRolesAndPermissions: (
      state,
      action: PayloadAction<{ roles: IRole[]; permissions: string[] }>,
    ) => {
      AuthStorage.setRoles(action.payload.roles)
      AuthStorage.setPermissions(action.payload.permissions)
      state.roles = action.payload.roles
      state.permissions = action.payload.permissions
    },
    logout: state => {
      AuthStorage.removePersonalInfo()
      AuthStorage.removeTokens()
      AuthStorage.removeRoles()
      AuthStorage.removePermissions()
      state.isAuth = initialState.isAuth
      state.personalInfo = initialState.personalInfo
      state.tokens = initialState.tokens
      state.roles = initialState.roles
      state.permissions = initialState.permissions
    },
  },
})

export default AuthSlice.reducer
export const {
  login,
  updatePersonalInfo,
  updateTokens,
  updateRolesAndPermissions,
  logout,
} = AuthSlice.actions
