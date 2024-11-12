import { ButtonCustom, TextInputCustom } from '@components'
import { Box } from '@mui/material'
import { useState } from 'react'

interface RecoveryAcconutStepOneProps {
  nextPage: () => void
}

export const RecoveryAcconutStepOne = ({
  nextPage = () => null,
}: RecoveryAcconutStepOneProps) => {
  const [email, setEmail] = useState('')

  const handleSendOtp = () => {
    nextPage()
  }

  return (
    <div className="w-full">
      <Box className="w-full flex flex-col items-center">
        <div
          className="px-8 w-full flex flex-col gap-4 box-border"
          style={{ maxWidth: 600 }}
        >
          <TextInputCustom
            name="Correo"
            value={email}
            setValue={setEmail}
            onEnter={handleSendOtp}
            placeholder="Ingrese su correo electrónico"
            required
          />
          <ButtonCustom text="Enviar OTP" onClick={handleSendOtp} />
        </div>
      </Box>
    </div>
  )
}
