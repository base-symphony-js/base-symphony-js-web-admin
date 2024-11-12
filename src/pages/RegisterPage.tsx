import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { useAuthActions } from '@redux'
import { apiRegisterWithEmailAndPass, apiRegisterWithGoogle } from '@services'
import { api } from '@config'
import { Box, Drawer, useColorScheme } from '@mui/material'
import {
  ButtonCustom,
  IAlert,
  IconButtonCustom,
  LoaderCustom,
  SnackbarCustom,
  TextCustom,
  TextInputCustom,
} from '@components'
import { COLORS, DRAWER_WIDTH } from '@common'
import { LogoCustomIcon, MenuIcon } from '@assets'

export const RegisterPage = () => {
  const { colorScheme: theme } = useColorScheme()
  const { dispatchLogin } = useAuthActions()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [loader, setLoader] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [alert, setAlert] = useState({} as IAlert)
  const backgroundColor = theme === 'dark' ? COLORS.general : COLORS.info

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleRegister = async (
    provider: 'email-and-pass' | 'google',
    providerCredentials?: { google: CredentialResponse },
  ) => {
    setLoader(true)
    let response
    if (provider === 'email-and-pass') {
      response = await apiRegisterWithEmailAndPass({
        body: { firstName, lastName, email, phoneNumber, password },
      })
    } else if (provider === 'google') {
      response = await apiRegisterWithGoogle({
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
          refreshToken: data?.tokens?.refreshToken,
        },
        data?.roles ?? [],
      )
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
    <Box
      className="w-screen h-screen flex overflow-x-hidden"
      style={{
        backgroundColor,
      }}
    >
      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        variant="temporary"
        sx={{
          display: {
            xs: 'block',
            sm: 'block',
            md: 'none',
            lg: 'none',
            xl: 'none',
          },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
            backgroundColor,
            backgroundImage: 'none',
          },
        }}
      >
        <SideBar />
      </Drawer>
      <div className="hidden md:block w-96">
        <SideBar />
      </div>
      <div
        className="flex flex-col w-full h-full gap-8 overflow-y-auto"
        style={{
          backgroundColor: theme === 'dark' ? COLORS.dark : COLORS.white,
        }}
      >
        <Box className="w-full h-12">
          <IconButtonCustom
            icon={<MenuIcon />}
            onClick={handleDrawerToggle}
            className="flex md:hidden"
            color="info"
          />
        </Box>
        <Box className="w-full flex flex-col items-center">
          <div className="flex items-center">
            <LogoCustomIcon
              theme="light"
              className="w-10 h-10 sm:w-16 sm:h-16"
            />
            <TextCustom
              text="Base Symphony JS"
              className="text-info italic text-xl sm:text-3xl"
            />
          </div>
        </Box>
        <Box className="w-full flex flex-col items-center">
          <div
            className="px-8 w-full flex flex-col gap-4 box-border"
            style={{ maxWidth: 1000 }}
          >
            <div>
              <TextCustom
                text="Creación de cuenta"
                className="text-center text-xl font-medium"
              />
              <TextCustom
                text="Crea tu cuenta usando tu nombre, correo y contraseña"
                className="text-center italic"
                color="textSecondary"
              />
            </div>
            <div className="flex gap-4 flex-col sm:flex-row">
              <TextInputCustom
                name="Nombre:"
                value={firstName}
                setValue={setFirstName}
                className="w-full"
                autoComplete="firstName"
                required
              />
              <TextInputCustom
                name="Apellido:"
                value={lastName}
                setValue={setLastName}
                autoComplete="lastName"
                className="w-full"
              />
            </div>
            <div className="flex gap-4 flex-col sm:flex-row">
              <TextInputCustom
                name="Número de teléfono:"
                value={phoneNumber}
                setValue={setPhoneNumber}
                className="w-full"
                autoComplete="phoneNumber"
                required
              />
              <TextInputCustom
                name="Correo"
                value={email}
                setValue={setEmail}
                type="email"
                autoComplete="email"
                className="w-full"
              />
            </div>
            <div className="flex gap-4 flex-col sm:flex-row">
              <TextInputCustom
                name="Contraseña"
                value={password}
                setValue={setPassword}
                autoComplete="password"
                msgError={
                  password !== confirmPassword
                    ? 'Las contraseñas no coinciden'
                    : ''
                }
                type="password"
                className="w-full"
                required
              />
              <TextInputCustom
                name="Confirmar contraseña"
                value={confirmPassword}
                setValue={setConfirmPassword}
                msgError={
                  password !== confirmPassword
                    ? 'Las contraseñas no coinciden'
                    : ''
                }
                type="password"
                className="w-full"
                required
              />
            </div>
            <ButtonCustom
              text="Crear cuenta"
              onClick={() => handleRegister('email-and-pass')}
              color="info"
            />
          </div>
        </Box>
        <Box className="w-full flex flex-col items-center pb-8">
          <div
            className="px-8 w-full flex flex-col gap-4 box-border"
            style={{ maxWidth: 800 }}
          >
            <div>
              <div className="flex items-center gap-2">
                <div className="bg-light-gray h-px w-full"></div>
                <TextCustom
                  text="O"
                  className="text-center text-xl font-medium"
                />
                <div className="bg-light-gray h-px w-full"></div>
              </div>
              <TextCustom
                text="Con proveedores de incio de sesión"
                className="text-center italic"
                color="textSecondary"
              />
            </div>
            <div className="flex justify-center">
              <GoogleLogin
                size="large"
                onSuccess={credentialResponse => {
                  handleRegister('google', { google: credentialResponse })
                }}
                onError={() => {
                  console.log('Register Failed')
                }}
              />
            </div>
          </div>
        </Box>
      </div>
      <SnackbarCustom
        open={alert.open}
        title={alert.title}
        description={alert.description}
        severity={alert.severity}
        setAlert={setAlert}
      />
      {loader && <LoaderCustom mode="modal" />}
    </Box>
  )
}

const SideBar = () => {
  const navigate = useNavigate()

  return (
    <div className="h-full flex items-center">
      <div className="flex flex-col items-center gap-8 p-4">
        <TextCustom
          text="¿Ya tienes cuenta?"
          className="text-white text-2xl font-semibold"
        />
        <TextCustom
          text="Inicia sesión de una vez. Comienza a explorar las funcionalidades del aplicativo."
          className="text-wrap text-white font-light"
        />
        <ButtonCustom
          text="Iniciar sesión"
          onClick={() => navigate('/login')}
          color="warning"
          className="w-full"
        />
      </div>
    </div>
  )
}
