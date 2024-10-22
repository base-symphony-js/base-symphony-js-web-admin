import { DialogCustom, TextCustom } from '@components'
import { api } from '@config'
import { useAuthActions } from '@redux'

interface DialogSessionExpiredProps {
  open: boolean
  setOpen: (value: boolean) => void
}

export const DialogSessionExpired = ({
  open = false,
  setOpen = () => null,
}: DialogSessionExpiredProps) => {
  const { dispatchLogout } = useAuthActions()

  const handleLogout = () => {
    api.defaults.headers.Authorization = ''
    dispatchLogout()
  }

  return (
    <DialogCustom
      title="Sessión expirada"
      open={open}
      setOpen={setOpen}
      labelAction="Iniciar sesión"
      onAction={handleLogout}
    >
      <TextCustom
        text="Lo sentimos, tu sesión ha expirado."
        className="text-center"
      />
      <TextCustom text="Inicia sesión nuevamente." className="text-center" />
    </DialogCustom>
  )
}
