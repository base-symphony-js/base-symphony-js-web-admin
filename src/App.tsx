import { useCallback, useEffect, useState } from 'react'
import { AppRouter } from '@routes'
import { useAuthActions } from '@redux'
import { api, apiInterceptor } from '@config'
import { AuthStorage } from '@services'
import { COLORS } from '@common'
import { useColorScheme } from '@mui/material'
import { LoaderCustom, TextCustom } from '@components'

const App = () => {
  const [loader, setLoader] = useState(true)
  const { dispatchLogin, dispatchLogout } = useAuthActions()
  const { colorScheme: theme } = useColorScheme()

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

  return (
    <div
      className="h-screen w-screen"
      style={{
        backgroundColor:
          theme === 'dark' ? COLORS['dark-optional'] : COLORS.optional,
      }}
    >
      {loader ? <LoaderCustom mode="screen" size="8rem" /> : <AppRouter />}
    </div>
  )
}

export default App
