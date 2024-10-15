import { useCallback, useEffect, useState } from 'react'
import { AppRouter } from '@routes'
import { useAuthActions } from '@redux'
import { api, apiInterceptor } from '@config'
import { AuthStorage } from '@services'

const App = () => {
  const [loader, setLoader] = useState(true)
  const { dispatchLogin, dispatchLogout } = useAuthActions()

  useEffect(() => {
    apiInterceptor()
    loadUserInfo().then(() => setLoader(false))
  }, [])

  const loadUserInfo = useCallback(async () => {
    const personalInfo = AuthStorage.getPersonalInfo()
    const tokens = AuthStorage.getTokens()
    const roles = AuthStorage.getRoles()
    if (
      Object.keys(personalInfo).length !== 0 &&
      Object.keys(tokens).length !== 0 &&
      roles
    ) {
      api.defaults.headers.Authorization = `Bearer ${tokens?.accessToken}`
      dispatchLogin(personalInfo, tokens, roles)
    } else {
      AuthStorage.removePersonalInfo()
      AuthStorage.removeTokens()
      dispatchLogout()
    }
  }, [dispatchLogin, dispatchLogout])

  if (loader) {
    return <div>Loading...</div>
  }

  return <AppRouter />
}

export default App
