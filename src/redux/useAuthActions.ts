import { useAppDispatch } from './store'
import {
  login,
  logout,
  AuthState,
  updatePersonalInfo,
  updateTokens,
} from './features/authSlice'

export const useAuthActions = () => {
  const dispatch = useAppDispatch()

  const dispatchLogin = (
    personalInfo: AuthState['personalInfo'],
    tokens: AuthState['tokens'],
  ) => {
    dispatch(
      login({
        personalInfo,
        tokens,
      }),
    )
  }

  const dispatchUpdatePersonalInfo = (
    personalInfo: AuthState['personalInfo'],
  ) => {
    dispatch(
      updatePersonalInfo({
        personalInfo,
      }),
    )
  }

  const dispatchUpdateTokens = (tokens: AuthState['tokens']) => {
    dispatch(
      updateTokens({
        tokens,
      }),
    )
  }

  const dispatchLogout = () => {
    dispatch(logout())
  }

  return {
    dispatchLogout,
    dispatchUpdatePersonalInfo,
    dispatchUpdateTokens,
    dispatchLogin,
  }
}
