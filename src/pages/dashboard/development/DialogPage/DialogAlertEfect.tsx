import { ButtonCustom, DialogCustom, IAlert, TextCustom } from '@components'
import { useState } from 'react'

interface DialogAlertEfectProps {
  open: boolean
  setOpen: (value: boolean) => void
}

export const DialogAlertEfect = ({
  open = false,
  setOpen = () => null,
}: DialogAlertEfectProps) => {
  const [alert, setAlert] = useState({} as IAlert)

  const handleDelete = () => {
    setAlert({
      open: true,
      title: 'Advertencia',
      description: 'No tiene permisos de edición',
      severity: 'warning',
    })
  }

  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Ventana modal"
      alert={alert}
      setAlert={setAlert}
      dialogActions={
        <ButtonCustom text="Editar" color="warning" onClick={handleDelete} />
      }
    >
      <TextCustom text="Ventana modal con efecto de alertas" />
    </DialogCustom>
  )
}
