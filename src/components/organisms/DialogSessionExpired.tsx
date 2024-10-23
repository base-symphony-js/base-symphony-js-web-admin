import { DialogCustom, IAlert, TextCustom, TextInputCustom } from '@components'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { api } from '@config'
import { useAuthActions } from '@redux'
import { useState } from 'react'
import { apiLoginWithEmailAndPass, apiLoginWithGoogle } from '@services'

interface DialogSessionExpiredProps {
  open: boolean
  setOpen: (value: boolean) => void
}

export const DialogSessionExpired = ({
  open = false,
  setOpen = () => null,
}: DialogSessionExpiredProps) => {
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
          refreshToken: data?.tokens?.refreshToken,
        },
        data?.roles ?? [],
      )
      setOpen(false)
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
    <DialogCustom
      title="Sessión expirada"
      open={open}
      setOpen={setOpen}
      loader={loader}
      labelAction="Iniciar sesión"
      onAction={() => handleLogin('email-and-pass')}
      alert={alert}
      setAlert={setAlert}
      disabledIconClose
      disabledDismiss
    >
      <TextCustom
        text="¡Tu sesión ha expirado!"
        className="text-center text-error"
      />
      <TextCustom text="Inicia sesión nuevamente." className="text-center" />
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
      <div className="flex flex-col gap-2">
        <TextCustom text="Proveedores:" className="self-center font-semibold" />
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
    </DialogCustom>
  )
}
