import {
  ButtonCustom,
  DialogCustom,
  IAlert,
  PageLayout,
  TextCustom,
  TextInputCustom,
} from '@components'
import { api } from '@config'
import { useCustomFetch } from '@hooks'
import { Divider } from '@mui/material'
import { useAuthActions } from '@redux'
import {
  apiGetProfile,
  apiUpdateEmail,
  apiUpdateEmailSendOtp,
  apiUpdatePassword,
  apiUpdateProfile,
} from '@services'
import { useEffect, useState } from 'react'

export const ProfilePage = () => {
  const { customFetch } = useCustomFetch()
  const { dispatchUpdatePersonalInfo, dispatchUpdateTokens } = useAuthActions()
  const [loader, setLoader] = useState(false)
  const [alert, setAlert] = useState({} as IAlert)
  const [isSessionExpired, setIsSessionExpired] = useState(false)
  const [showOtp, setShowOtp] = useState(false)
  // profile
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  useEffect(() => {
    loadProfile()
  }, [])

  const loadProfile = async () => {
    setLoader(true)
    const response = await customFetch(apiGetProfile, {})
    const { success, statusCode, message, data } = response
    if (success) {
      setFirstName(data?.user.firstName)
      setLastName(data?.user.lastName)
      setEmail(data?.user.email)
      setPhoneNumber(data?.user.phoneNumber)
    } else {
      if (statusCode === 401) setIsSessionExpired(true)
      setAlert({
        open: true,
        title: statusCode >= 500 ? 'Error' : 'Advertencia',
        description: message,
        severity: statusCode >= 500 ? 'error' : 'warning',
      })
    }
    setLoader(false)
  }

  const handleUpdateProfile = async () => {
    setLoader(true)
    const response = await customFetch(apiUpdateProfile, {
      body: { firstName, lastName, phoneNumber },
    })
    const { success, statusCode, message } = response
    if (success) {
      setAlert({
        open: true,
        title: 'Exitoso',
        description: message,
        severity: 'success',
      })
    } else {
      if (statusCode === 401) setIsSessionExpired(true)
      setAlert({
        open: true,
        title: statusCode >= 500 ? 'Error' : 'Advertencia',
        description: message,
        severity: statusCode >= 500 ? 'error' : 'warning',
      })
    }
    setLoader(false)
  }

  const handleUpdateEmailSendOtp = async () => {
    setLoader(true)
    const response = await customFetch(apiUpdateEmailSendOtp, {
      body: { email },
    })
    const { success, statusCode, message } = response
    if (success) {
      setAlert({
        open: true,
        title: 'Exitoso',
        description: message,
        severity: 'success',
      })
      setShowOtp(true)
    } else {
      if (statusCode === 401) setIsSessionExpired(true)
      setAlert({
        open: true,
        title: statusCode >= 500 ? 'Error' : 'Advertencia',
        description: message,
        severity: statusCode >= 500 ? 'error' : 'warning',
      })
    }
    setLoader(false)
  }

  const handleUpdateEmail = async () => {
    setLoader(true)
    const response = await customFetch(apiUpdateEmail, {
      body: { email, otp },
    })
    const { success, statusCode, message, data } = response
    if (success) {
      setAlert({
        open: true,
        title: 'Exitoso',
        description: message,
        severity: 'success',
      })
      setShowOtp(false)
      api.defaults.headers.Authorization = `Bearer ${data?.tokens?.accessToken}`
      dispatchUpdatePersonalInfo({
        firstName: data?.user?.firstName,
        lastName: data?.user?.lastName,
        email: data?.user?.email,
        photo: data?.user?.photo,
        phoneNumber: data?.user?.phoneNumber,
      })
      dispatchUpdateTokens({
        accessToken: data?.tokens?.accessToken,
        refreshToken: data?.tokens?.refreshToken,
      })
    } else {
      if (statusCode === 401) setIsSessionExpired(true)
      setAlert({
        open: true,
        title: statusCode >= 500 ? 'Error' : 'Advertencia',
        description: message,
        severity: statusCode >= 500 ? 'error' : 'warning',
      })
    }
    setLoader(false)
  }

  const handleUpdatePassword = async () => {
    setLoader(true)
    const response = await customFetch(apiUpdatePassword, {
      body: { password, newPassword },
    })
    const { success, statusCode, message, data } = response
    if (success) {
      setAlert({
        open: true,
        title: 'Exitoso',
        description: message,
        severity: 'success',
      })
      setShowOtp(false)
      api.defaults.headers.Authorization = `Bearer ${data?.tokens?.accessToken}`
      dispatchUpdateTokens({
        accessToken: data?.tokens?.accessToken,
        refreshToken: data?.tokens?.refreshToken,
      })
    } else {
      if (statusCode === 401) setIsSessionExpired(true)
      setAlert({
        open: true,
        title: statusCode >= 500 ? 'Error' : 'Advertencia',
        description: message,
        severity: statusCode >= 500 ? 'error' : 'warning',
      })
    }
    setLoader(false)
  }

  return (
    <PageLayout
      title="Perfil"
      loader={loader}
      alert={alert}
      setAlert={setAlert}
      isSessionExpired={isSessionExpired}
    >
      {/* Basic Info */}
      <div className="flex flex-col gap-4">
        <TextCustom
          text="Información básica"
          className="text-xl font-semibold"
        />
        <Divider />
        <div className="flex gap-4 flex-col sm:flex-row">
          <TextInputCustom
            name="Nombre:"
            value={firstName}
            setValue={setFirstName}
            className="w-full"
          />
          <TextInputCustom
            name="Apellido:"
            value={lastName}
            setValue={setLastName}
            className="w-full"
          />
        </div>
        <div className="flex gap-4 flex-col sm:flex-row">
          <TextInputCustom
            name="Número de teléfono:"
            value={phoneNumber}
            setValue={setPhoneNumber}
            className="w-full"
          />
          <div className="w-full"></div>
        </div>
        <ButtonCustom
          text="Actualizar"
          onClick={handleUpdateProfile}
          color="success"
          className="self-auto sm:self-end"
        />
      </div>
      {/* Email */}
      <div className="flex flex-col gap-4">
        <TextCustom
          text="Correo electrónico"
          className="text-xl font-semibold"
        />
        <Divider />
        <div className="flex gap-4 flex-col sm:flex-row">
          <TextInputCustom
            name="Correo electrónico:"
            value={email}
            setValue={setEmail}
            className="w-full"
          />
          <div className="w-full"></div>
        </div>
        <ButtonCustom
          text="Actualizar"
          onClick={handleUpdateEmailSendOtp}
          color="success"
          className="self-auto sm:self-end"
          disabled={!email}
        />
      </div>
      {/* Password */}
      <div className="flex flex-col gap-4">
        <TextCustom text="Contraseña" className="text-xl font-semibold" />
        <Divider />
        <div className="flex gap-4 flex-col sm:flex-row">
          <TextInputCustom
            name="Contraseña:"
            value={password}
            setValue={setPassword}
            type="password"
            className="w-full"
          />
          <div className="w-full"></div>
        </div>
        <div className="flex gap-4 flex-col sm:flex-row">
          <TextInputCustom
            name="Nueva contraseña:"
            value={newPassword}
            setValue={setNewPassword}
            msgError={
              newPassword !== confirmPassword
                ? 'Las contraseñas no coinciden'
                : ''
            }
            type="password"
            className="w-full"
          />
          <TextInputCustom
            name="Confirmar contraseña:"
            value={confirmPassword}
            setValue={setConfirmPassword}
            msgError={
              newPassword !== confirmPassword
                ? 'Las contraseñas no coinciden'
                : ''
            }
            type="password"
            className="w-full"
          />
        </div>
        <ButtonCustom
          text="Actualizar"
          onClick={handleUpdatePassword}
          color="success"
          className="self-auto sm:self-end"
          disabled={newPassword !== confirmPassword || !newPassword}
        />
      </div>
      <DialogCustom
        open={showOtp}
        setOpen={setShowOtp}
        title="Introduzca el otp"
        disabledCancelAction
        disabledDismiss
        dialogActions={
          <ButtonCustom
            text="Confirmar actualización"
            onClick={handleUpdateEmail}
            color="success"
          />
        }
      >
        <TextCustom
          text="El otp debió de llegar al nuevo correo electrónico."
          color="textSecondary"
          className="mb-4"
        />
        <TextInputCustom
          value={otp}
          setValue={setOtp}
          validation="onlyNumber"
          maxLength={6}
        />
      </DialogCustom>
    </PageLayout>
  )
}
