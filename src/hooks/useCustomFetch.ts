/*
 * Copyright (c) 2025 Luis Solano. All rights reserved.
 * Licensed under the MIT License. See the LICENSE file in the root of this repository for more information.
 */
import { api } from '@config'
import { IDataResponse, IRequest } from '@interfaces'
import { useAppSelector, useAuthActions } from '@redux'
import { apiRefreshTokens } from '@services'

type IApiFunction = (request: IRequest) => Promise<IDataResponse>

export const useCustomFetch = () => {
  const { refreshToken } = useAppSelector(state => state.auth.tokens)
  const { dispatchUpdateTokens } = useAuthActions()

  const customFetch = async (apiFunction: IApiFunction, request: IRequest) => {
    let response = await apiFunction(request)

    if (response.statusCode === 401) {
      response = await handleRefreshToken()
      if (response.success) {
        response = await apiFunction(request)
      }
    }

    return response
  }

  const handleRefreshToken = async () => {
    const response = await apiRefreshTokens({
      body: { refreshToken },
    })
    if (response.success) {
      const accessToken = response.data?.tokens.accessToken ?? ''
      const refreshToken = response.data?.tokens.refreshToken ?? ''
      api.defaults.headers.Authorization = `Bearer ${accessToken}`
      dispatchUpdateTokens({ accessToken, refreshToken })
    }
    return response
  }

  return { customFetch }
}
