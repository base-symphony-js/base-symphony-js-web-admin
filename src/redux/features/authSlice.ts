import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPersonalInfo, IRole, ITokens } from '@interfaces'
import { AuthStorage } from '@services'

export interface AuthState {
  isAuth: boolean
  personalInfo: IPersonalInfo
  tokens: ITokens
  roles: IRole[]
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
      }>,
    ) => {
      AuthStorage.setPersonalInfo(action.payload.personalInfo)
      AuthStorage.setTokens(action.payload.tokens)
      AuthStorage.setRoles(action.payload.roles)
      state.isAuth = true
      state.personalInfo = action.payload.personalInfo
      state.tokens = action.payload.tokens
      state.roles = action.payload.roles
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
    updateRoles: (state, action: PayloadAction<{ roles: IRole[] }>) => {
      AuthStorage.setRoles(action.payload.roles)
      state.roles = action.payload.roles
    },
    logout: state => {
      AuthStorage.removePersonalInfo()
      AuthStorage.removeTokens()
      AuthStorage.removeRoles()
      state.isAuth = initialState.isAuth
      state.personalInfo = initialState.personalInfo
      state.tokens = initialState.tokens
      state.roles = initialState.roles
    },
  },
})

export default AuthSlice.reducer
export const { login, updatePersonalInfo, updateTokens, updateRoles, logout } =
  AuthSlice.actions
