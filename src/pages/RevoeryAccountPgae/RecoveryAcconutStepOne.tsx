import { ButtonCustom, IAlert, TextInputCustom } from '@components'
import { Box } from '@mui/material'
import { apiRecoveryAccountSendOtp } from '@services'

interface RecoveryAcconutStepOneProps {
  setAlert: (value: IAlert) => void
  setLoader: (value: boolean) => void
  nextPage: () => void
  email: string
  setEmail: (value: string) => void
}

export const RecoveryAcconutStepOne = ({
  setAlert = () => null,
  setLoader = () => null,
  nextPage = () => null,
  email = '',
  setEmail = () => null,
}: RecoveryAcconutStepOneProps) => {
  const handleSendOtp = async () => {
    setLoader(true)
    const response = await apiRecoveryAccountSendOtp({ body: { email } })
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
