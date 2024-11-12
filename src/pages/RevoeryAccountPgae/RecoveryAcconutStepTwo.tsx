import { ButtonCustom, IAlert, TextCustom, TextInputCustom } from '@components'
import { Box } from '@mui/material'
import { apiRecoveryAccountVerifyOtp } from '@services'

interface RecoveryAcconutStepTwoProps {
  timeLeft: string
  setAlert: (value: IAlert) => void
  setLoader: (value: boolean) => void
  nextPage: () => void
  email: string
  otp: string
  setOtp: (value: string) => void
}

export const RecoveryAcconutStepTwo = ({
  timeLeft = '',
  setAlert = () => null,
  setLoader = () => null,
  nextPage = () => null,
  email = '',
  otp = '',
  setOtp = () => null,
}: RecoveryAcconutStepTwoProps) => {
  const handleConfirmOtp = async () => {
    setLoader(true)
    const response = await apiRecoveryAccountVerifyOtp({ body: { otp, email } })
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
