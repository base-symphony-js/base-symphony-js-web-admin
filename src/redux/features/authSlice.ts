import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPersonalInfo, ITokens } from '@interfaces'

export interface AuthState {
  isAuth: boolean
  personalInfo: IPersonalInfo
  tokens: ITokens
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
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ personalInfo: IPersonalInfo; tokens: ITokens }>,
    ) => {
      state.isAuth = true
      state.personalInfo = action.payload.personalInfo
      state.tokens = action.payload.tokens
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
    logout: state => {
      state.isAuth = initialState.isAuth
      state.personalInfo = initialState.personalInfo
      state.tokens = initialState.tokens
    },
  },
})

export default AuthSlice.reducer
export const { login, updatePersonalInfo, updateTokens, logout } =
  AuthSlice.actions
