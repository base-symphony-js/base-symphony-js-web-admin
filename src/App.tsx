import { useCallback, useEffect } from 'react'
import { AppRouter } from '@routes'
import { useAuthActions } from '@redux'
import { api, apiInterceptor } from '@config'
import { AuthStorage } from '@services'

const App = () => {
  const { dispatchLogin, dispatchLogout } = useAuthActions()

  useEffect(() => {
    apiInterceptor()
    loadUserInfo()
  }, [])

  const loadUserInfo = useCallback(() => {
    const personalInfo = AuthStorage.getPersonalInfo()
    const tokens = AuthStorage.getTokens()
    if (
      Object.keys(personalInfo).length !== 0 &&
      Object.keys(tokens).length !== 0
    ) {
      api.defaults.headers.Authorization = `Bearer ${tokens?.accessToken}`
      dispatchLogin(personalInfo, tokens)
    } else {
      AuthStorage.removePersonalInfo()
      AuthStorage.removeTokens()
      dispatchLogout()
    }
  }, [])

  return <AppRouter />
}

export default App
