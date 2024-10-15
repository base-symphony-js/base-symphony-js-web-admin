import { useAppDispatch } from './store'
import {
  login,
  logout,
  updatePersonalInfo,
  updateTokens,
  updateRoles,
} from './features/authSlice'
import { IPersonalInfo, IRole, ITokens } from '@interfaces'

export const useAuthActions = () => {
  const dispatch = useAppDispatch()

  const dispatchLogin = (
    personalInfo: IPersonalInfo,
    tokens: ITokens,
    roles: IRole[],
  ) => {
    dispatch(
      login({
        personalInfo,
        tokens,
        roles,
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

  const dispatchUpdateRoles = (roles: IRole[]) => {
    dispatch(
      updateRoles({
        roles,
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
    dispatchUpdateRoles,
    dispatchLogin,
  }
}
