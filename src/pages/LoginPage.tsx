import { useState } from 'react'
import { useAuthActions } from '@redux'
import { apiLogin, AuthStorage } from '@services'
import { api } from '@config'
import { Paper, useColorScheme } from '@mui/material'
import {
  ButtonCustom,
  LoaderCustom,
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

  const handleLogin = async () => {
    setLoader(true)
    const response = await apiLogin({ body: { email, password } })
    const { success, data } = response
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
            onEnter={handleLogin}
          />
          <TextInputCustom
            name="Contraseña"
            value={password}
            setValue={setPassword}
            onEnter={handleLogin}
            type="password"
          />
          <ButtonCustom text="Iniciar sesión" onClick={handleLogin} />
        </Paper>
      </div>
      {loader && <LoaderCustom mode="modal" />}
    </div>
  )
}
