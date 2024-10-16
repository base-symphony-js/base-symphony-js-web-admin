import { useState } from 'react'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { useAuthActions } from '@redux'
import {
  apiLoginWithEmailAndPass,
  apiLoginWithGoogle,
  AuthStorage,
} from '@services'
import { api } from '@config'
import { Paper, useColorScheme } from '@mui/material'
import {
  ButtonCustom,
  IAlert,
  LoaderCustom,
  SnackbarCustom,
  TextCustom,
  TextInputCustom,
} from '@components'
import { COLORS } from '@common'

export const LoginPage = () => {
  const { colorScheme: theme } = useColorScheme()
  const { dispatchLogin } = useAuthActions()
  const [loader, setLoader] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState<IAlert>({} as IAlert)

  const handleLogin = async (
    provider: 'email-and-pass' | 'google',
    providerCredentials?: { google: CredentialResponse },
  ) => {
    setLoader(true)
    let response
    if (provider === 'email-and-pass') {
      response = await apiLoginWithEmailAndPass({
        body: { email, password },
      })
    } else if (provider === 'google') {
      response = await apiLoginWithGoogle({
        body: { idToken: providerCredentials?.google.credential },
      })
    } else {
      return
    }
    const { success, data, message } = response
    if (success) {
      api.defaults.headers.Authorization = `Bearer ${data?.tokens?.accessToken}`
      dispatchLogin(
        {
          firstName: data?.user?.firstName,
          lastName: data?.user?.lastName,
          email: data?.user?.email,
          photo: data?.user?.photo,
          phoneNumber: data?.user?.phoneNumber,
        },
        {
          accessToken: data?.tokens?.accessToken,
          refreshToken: data?.tokens?.accessToken,
        },
        data?.roles ?? [],
      )
      AuthStorage.setPersonalInfo({
        firstName: data?.user?.firstName,
        lastName: data?.user?.lastName,
        email: data?.user?.email,
        photo: data?.user?.photo,
        phoneNumber: data?.user?.phoneNumber,
      })
      AuthStorage.setTokens({
        accessToken: data?.tokens?.accessToken,
        refreshToken: data?.tokens?.accessToken,
      })
      AuthStorage.setRoles(data?.roles ?? [])
    } else {
      setAlert({
        open: true,
        title: 'Error',
        description: message,
        severity: 'error',
      })
    }
    setLoader(false)
  }

  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      style={{
        backgroundColor: theme === 'dark' ? COLORS.general : COLORS.primary,
      }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <Paper
          elevation={3}
          className="py-8 px-6 min-w-48 sm:min-w-80 flex flex-col gap-4"
        >
          <TextCustom
            text="Inicio de Sesión"
            className="self-center text-2xl font-bold"
          />
          <TextInputCustom
            name="Correo"
            value={email}
            setValue={setEmail}
            onEnter={() => handleLogin('email-and-pass')}
          />
          <TextInputCustom
            name="Contraseña"
            value={password}
            setValue={setPassword}
            onEnter={() => handleLogin('email-and-pass')}
            type="password"
          />
          <ButtonCustom
            text="Iniciar sesión"
            onClick={() => handleLogin('email-and-pass')}
          />
          <div className="flex flex-col gap-2">
            <TextCustom
              text="Proveedores:"
              className="self-center font-semibold"
            />
            <div className="flex justify-center">
              <GoogleLogin
                size="large"
                onSuccess={credentialResponse => {
                  handleLogin('google', { google: credentialResponse })
                }}
                onError={() => {
                  console.log('Login Failed')
                }}
              />
            </div>
          </div>
        </Paper>
      </div>
      <SnackbarCustom
        open={alert.open}
        title={alert.title}
        description={alert.description}
        severity={alert.severity}
        setAlert={setAlert}
      />
      {loader && <LoaderCustom mode="modal" />}
    </div>
  )
}
