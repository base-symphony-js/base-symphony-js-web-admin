import { ButtonCustom, TextCustom } from '@components'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const RecoveryAcconutStepFour = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full">
      <Box className="w-full flex flex-col items-center">
        <div
          className="px-8 w-full flex flex-col gap-8 box-border"
          style={{ maxWidth: 600 }}
        >
          <div className="flex flex-col gap-2">
            <TextCustom
              text="¡Cuenta recuperada exitosamente!"
              className="text-center text-success text-xl"
            />
            <TextCustom
              text="Su cuenta ha sido recuperada, ahora puedes iniciar sesión con tu nueva contraseña."
              className="text-center italic text-sm"
              color="textSecondary"
            />
          </div>
          <ButtonCustom
            text="Iniciar sesión"
            onClick={() => navigate('/login')}
            color="warning"
          />
        </div>
      </Box>
    </div>
  )
}
