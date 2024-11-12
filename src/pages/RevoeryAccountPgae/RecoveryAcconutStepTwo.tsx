import { ButtonCustom, TextCustom, TextInputCustom } from '@components'
import { Box } from '@mui/material'
import { useState } from 'react'

interface RecoveryAcconutStepTwoProps {
  timeLeft: string
  nextPage: () => void
}

export const RecoveryAcconutStepTwo = ({
  timeLeft = '',
  nextPage = () => null,
}: RecoveryAcconutStepTwoProps) => {
  const [otp, setOtp] = useState('')

  const handleConfirmOtp = () => {
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
            name="OTP"
            value={otp}
            setValue={setOtp}
            onEnter={handleConfirmOtp}
            placeholder="Ingrese el otp"
            required
          />
          <ButtonCustom text="Confirmar OTP" onClick={handleConfirmOtp} />
        </div>
      </Box>
    </div>
  )
}
