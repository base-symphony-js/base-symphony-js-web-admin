import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PersonalInfo {
  firstName: string
  lastName?: string
  email: string
  phoneNumber?: string
  photo?: string
}

interface Tokens {
  accessToken: string
  refreshToken: string
}

export interface AuthState {
  isAuth: boolean
  personalInfo: PersonalInfo
  tokens: Tokens
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
      action: PayloadAction<{ personalInfo: PersonalInfo; tokens: Tokens }>,
    ) => {
      state.isAuth = true
      state.personalInfo = action.payload.personalInfo
      state.tokens = action.payload.tokens
    },
    updatePersonalInfo: (
      state,
      action: PayloadAction<{ personalInfo: PersonalInfo }>,
    ) => {
      state.personalInfo = action.payload.personalInfo
    },
    updateTokens: (state, action: PayloadAction<{ tokens: Tokens }>) => {
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
