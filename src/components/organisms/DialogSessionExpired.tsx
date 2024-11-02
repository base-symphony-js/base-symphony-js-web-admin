import { ButtonCustom, DialogCustom, TextCustom } from '@components'
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

  const handleLogout = (): string => {
    api.defaults.headers.Authorization = ''
    dispatchLogout()
    return ''
  }

  return (
    <DialogCustom
      title="Sessión expirada"
      open={open}
      setOpen={setOpen}
      disabledDismiss
      disabledIconClose
      disabledCancelAction
      dialogActions={
        <ButtonCustom
          text="Ir a inicio de sesión"
          color="error"
          className="font-semibold"
          onClick={handleLogout}
        />
      }
    >
      <TextCustom
        text="¡Tu sesión ha expirado!"
        className="text-center text-error"
      />
      <TextCustom text="Inicia sesión nuevamente." className="text-center" />
    </DialogCustom>
  )
}
