import { useAppDispatch } from './store'
import {
  login,
  logout,
  updatePersonalInfo,
  updateTokens,
} from './features/authSlice'
import { IPersonalInfo, ITokens } from '@interfaces'

export const useAuthActions = () => {
  const dispatch = useAppDispatch()

  const dispatchLogin = (personalInfo: IPersonalInfo, tokens: ITokens) => {
    dispatch(
      login({
        personalInfo,
        tokens,
      }),
    )
  }

  const dispatchUpdatePersonalInfo = (personalInfo: IPersonalInfo) => {
    dispatch(
      updatePersonalInfo({
        personalInfo,
      }),
    )
  }

  const dispatchUpdateTokens = (tokens: ITokens) => {
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
