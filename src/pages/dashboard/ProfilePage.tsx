import { PhotoCameraIcon, ProfileCustomIcon } from '@assets'
import { ICloudinarySignature, cloudinaryUploadFile } from '@common'
import {
  ButtonCustom,
  DialogCustom,
  IAlert,
  IconButtonCustom,
  PageLayout,
  TextCustom,
  TextInputCustom,
  UploadFileCustom,
} from '@components'
import { api } from '@config'
import { useCustomFetch } from '@hooks'
import { Divider } from '@mui/material'
import { useAuthActions } from '@redux'
import {
  apiDeleteCloudinaryFile,
  apiGetCloudinarySignature,
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
  const [showFile, setShowFile] = useState(false)
  // profile
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [photo, setPhoto] = useState('')
  const [otp, setOtp] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [file, setFile] = useState({} as File)
  const [signature, setSignature] = useState({} as ICloudinarySignature)

  useEffect(() => {
    loadProfile()
    loadCloudinarySignature()
  }, [])

  const loadCloudinarySignature = async () => {
    setLoader(true)
    const response = await customFetch(apiGetCloudinarySignature, {
      params: { folder: 'profile-pictures' },
    })
    const { success, statusCode, message, data } = response
    if (success) {
      setSignature(data)
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

  const loadProfile = async () => {
    setLoader(true)
    const response = await customFetch(apiGetProfile, {})
    const { success, statusCode, message, data } = response
    if (success) {
      setFirstName(data?.user.firstName)
      setLastName(data?.user.lastName)
      setEmail(data?.user.email)
      setPhoto(data?.user.photo)
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

  const handleUpdatePhoto = async () => {
    setLoader(true)
    await customFetch(apiDeleteCloudinaryFile, {
      body: { url: photo, ...signature },
    })
    const url = await cloudinaryUploadFile(signature, file)
    if (url) {
      const response = await customFetch(apiUpdateProfile, {
        body: { photo: url },
      })
      const { success, statusCode, message } = response
      if (success) {
        setShowFile(false)
        setAlert({
          open: true,
          title: 'Exitoso',
          description: message,
          severity: 'success',
        })
        dispatchUpdatePersonalInfo({
          firstName,
          lastName,
          email,
          photo: url,
          phoneNumber,
        })
        loadProfile()
      } else {
        if (statusCode === 401) setIsSessionExpired(true)
        setAlert({
          open: true,
          title: statusCode >= 500 ? 'Error' : 'Advertencia',
          description: message,
          severity: statusCode >= 500 ? 'error' : 'warning',
        })
      }
    } else {
      setAlert({
        open: true,
        title: 'Advertencia',
        description:
          'El tiempo para actualizar la foto de perfil se ha vencido, favor recarga la página nuevamente.',
        severity: 'warning',
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
      dispatchUpdatePersonalInfo({
        firstName,
        lastName,
        email,
        photo,
        phoneNumber,
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
      dispatchUpdatePersonalInfo({
        firstName,
        lastName,
        email,
        photo,
        phoneNumber,
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
    const response = await apiUpdatePassword({
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
        <div className="flex justify-center">
          <div className="relative">
            {photo ? (
              <img
                src={photo}
                alt="Foto de perfil"
                className="w-40 h-40 rounded-full"
              />
            ) : (
              <ProfileCustomIcon className="w-40 h-40" />
            )}
            <div className="absolute top-28 left-28">
              <IconButtonCustom
                icon={<PhotoCameraIcon className="text-white" />}
                onClick={() => setShowFile(true)}
                className="bg-light-gray"
                size={24}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4 flex-col sm:flex-row">
          <TextInputCustom
            name="Nombre:"
            value={firstName}
            setValue={setFirstName}
            className="w-full"
            disableAutoComplete
          />
          <TextInputCustom
            name="Apellido:"
            value={lastName}
            setValue={setLastName}
            className="w-full"
            disableAutoComplete
          />
        </div>
        <div className="flex gap-4 flex-col sm:flex-row">
          <TextInputCustom
            name="Número de teléfono:"
            value={phoneNumber}
            setValue={setPhoneNumber}
            className="w-full"
            disableAutoComplete
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
            disableAutoComplete
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
            name="Contraseña actual:"
            value={password}
            setValue={setPassword}
            type="password"
            className="w-full"
            disableAutoComplete
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
            disableAutoComplete
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
            disableAutoComplete
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
      <DialogCustom
        open={showFile}
        setOpen={setShowFile}
        title="Actualizar foto de perfil"
        disabledCancelAction
        disabledDismiss
        dialogActions={
          <ButtonCustom
            text="Actualizar foto"
            onClick={handleUpdatePhoto}
            color="success"
            disabled={!file}
          />
        }
      >
        <UploadFileCustom
          accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpg', '.jpeg'] }}
          maxSize={2 * 1024 * 1024}
          multiple={false}
          onChange={files => setFile(files[0])}
        />
      </DialogCustom>
    </PageLayout>
  )
}
