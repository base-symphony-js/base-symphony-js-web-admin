import { ButtonCustom, DialogCustom, TextCustom } from '@components'
import { useState } from 'react'

interface DialogLoaderEfectProps {
  open: boolean
  setOpen: (value: boolean) => void
}

export const DialogLoaderEfect = ({
  open = false,
  setOpen = () => null,
}: DialogLoaderEfectProps) => {
  const [loader, setLoader] = useState(false)

  const handleSave = () => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
      setOpen(false)
    }, 2000)
  }

  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Ventana modal"
      loader={loader}
      dialogActions={
        <ButtonCustom text="Guardar" color="success" onClick={handleSave} />
      }
    >
      <TextCustom text="Ventana modal con efecto de carga" />
    </DialogCustom>
  )
}
