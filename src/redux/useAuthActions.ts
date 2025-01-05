import { useAppDispatch } from './store'
import {
  login,
  logout,
  updatePersonalInfo,
  updateTokens,
  updateRolesAndPermissions,
} from './features/authSlice'
import { IPersonalInfo, IRole, ITokens } from '@interfaces'

export const useAuthActions = () => {
  const dispatch = useAppDispatch()

  const dispatchLogin = (
    personalInfo: IPersonalInfo,
    tokens: ITokens,
    roles: IRole[],
    permissions: string[],
  ) => {
    dispatch(
      login({
        personalInfo,
        tokens,
        roles,
        permissions,
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

  const dispatchUpdateRolesAndPermissions = (
    roles: IRole[],
    permissions: string[],
  ) => {
    dispatch(
      updateRolesAndPermissions({
        roles,
        permissions,
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
    dispatchUpdateRolesAndPermissions,
    dispatchLogin,
  }
}
