import { useCallback, useEffect, useState } from 'react'
import { AppRouter } from '@routes'
import { useAuthActions } from '@redux'
import { api, apiInterceptor } from '@config'
import { AuthStorage } from '@services'
import { PreferencesContextProvider } from '@hooks'

const App = () => {
  const [loading, setLoading] = useState(true)
  const { dispatchLogin, dispatchLogout } = useAuthActions()

  useEffect(() => {
    apiInterceptor()
    loadUserInfo().then(() => setLoading(false))
  }, [])

  const loadUserInfo = useCallback(async () => {
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
  }, [dispatchLogin, dispatchLogout])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <PreferencesContextProvider>
      <AppRouter />
    </PreferencesContextProvider>
  )
}

export default App
