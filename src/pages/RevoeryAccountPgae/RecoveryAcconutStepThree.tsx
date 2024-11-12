import { ButtonCustom, IAlert, TextCustom, TextInputCustom } from '@components'
import { Box } from '@mui/material'
import { apiRecoveryAccount } from '@services'
import { useState } from 'react'

interface RecoveryAcconutStepThreeProps {
  timeLeft: string
  setAlert: (value: IAlert) => void
  setLoader: (value: boolean) => void
  nextPage: () => void
  email: string
  otp: string
}

export const RecoveryAcconutStepThree = ({
  timeLeft = '',
  setAlert = () => null,
  setLoader = () => null,
  nextPage = () => null,
  email = '',
  otp = '',
}: RecoveryAcconutStepThreeProps) => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleRecoveryAccount = async () => {
    setLoader(true)
    const response = await apiRecoveryAccount({
      body: { otp, email, password },
    })
    const { success, statusCode, message } = response
    if (success) {
      nextPage()
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
    <div className="w-full">
      <TextCustom
        text={timeLeft}
        className="text-center text-sm italic text-error"
      />
      <Box className="w-full flex flex-col items-center">
        <div
          className="px-8 w-full flex flex-col gap-4 box-border"
          style={{ maxWidth: 600 }}
        >
          <TextInputCustom
            name="Contraseña"
            value={password}
            setValue={setPassword}
            msgError={
              password !== confirmPassword ? 'Las contraseñas no coinciden' : ''
            }
            type="password"
            required
            disableAutoComplete
          />
          <TextInputCustom
            name="Confirmar contraseña"
            value={confirmPassword}
            setValue={setConfirmPassword}
            msgError={
              password !== confirmPassword ? 'Las contraseñas no coinciden' : ''
            }
            type="password"
            required
            disableAutoComplete
          />
          <ButtonCustom
            text="Recuperar cuenta"
            onClick={handleRecoveryAccount}
          />
        </div>
      </Box>
    </div>
  )
}
