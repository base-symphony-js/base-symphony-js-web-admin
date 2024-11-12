import { ButtonCustom, TextCustom, TextInputCustom } from '@components'
import { Box } from '@mui/material'
import { useState } from 'react'

interface RecoveryAcconutStepThreeProps {
  timeLeft: string
  nextPage: () => void
}

export const RecoveryAcconutStepThree = ({
  timeLeft = '',
  nextPage = () => null,
}: RecoveryAcconutStepThreeProps) => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleRecoveryAccount = () => {
    nextPage()
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
