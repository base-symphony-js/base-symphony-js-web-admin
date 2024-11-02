import { ButtonCustom, DialogCustom, TextCustom } from '@components'

interface DialogButtonsProps {
  open: boolean
  setOpen: (value: boolean) => void
}

export const DialogButtons = ({
  open = false,
  setOpen = () => null,
}: DialogButtonsProps) => {
  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Ventana modal"
      dialogActions={
        <>
          <ButtonCustom text="Omitir" color="error" />
          <ButtonCustom text="Guardar y enviar" color="success" />
        </>
      }
    >
      <TextCustom text="Ventana modal con botones de acción" />
    </DialogCustom>
  )
}
