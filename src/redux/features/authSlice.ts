import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPersonalInfo, IRole, ITokens } from '@interfaces'

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
      state.isAuth = true
      state.personalInfo = action.payload.personalInfo
      state.tokens = action.payload.tokens
      state.roles = action.payload.roles
    },
    updatePersonalInfo: (
      state,
      action: PayloadAction<{ personalInfo: IPersonalInfo }>,
    ) => {
      state.personalInfo = action.payload.personalInfo
    },
    updateTokens: (state, action: PayloadAction<{ tokens: ITokens }>) => {
      state.tokens = action.payload.tokens
    },
    updateRoles: (state, action: PayloadAction<{ roles: IRole[] }>) => {
      state.roles = action.payload.roles
    },
    logout: state => {
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
