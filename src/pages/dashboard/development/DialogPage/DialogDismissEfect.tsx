import {
  ButtonCustom,
  CheckBoxCustom,
  DialogCustom,
  TextCustom,
} from '@components'
import { useState } from 'react'

interface DialogDismissEfectProps {
  open: boolean
  setOpen: (value: boolean) => void
}

export const DialogDismissEfect = ({
  open = false,
  setOpen = () => null,
}: DialogDismissEfectProps) => {
  const [check, setCheck] = useState(false)

  const handleResetForm = () => {
    setCheck(false)
  }

  const handleAccept = () => {
    setOpen(false)
    handleResetForm()
  }

  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Ventana modal"
      onDismiss={handleResetForm}
      dialogActions={
        <ButtonCustom text="Aceptar" onClick={handleAccept} disabled={!check} />
      }
    >
      <TextCustom text="Ventana modal con efecto al cerrarse" />
      <TextCustom
        text="Los elementos del formulario reestablecen su valor original"
        className="italic mb-2"
      />
      <CheckBoxCustom
        name="Estoy de acuerdo con los términos"
        value={check}
        setValue={setCheck}
      />
    </DialogCustom>
  )
}
