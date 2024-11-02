import { useState } from 'react'
import { Divider } from '@mui/material'
import { ButtonCustom, TextCustom, DialogCustom, PageLayout } from '@components'
import { DialogButtons } from './DialogButtons'
import { DialogLoaderEfect } from './DialogLoaderEfect'
import { DialogDismissEfect } from './DialogDismissEfect'
import { DialogAlertEfect } from './DialogAlertEfect'
import { DialogAdvanced } from './DialogAdvanced'

export const DialogPage = () => {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)
  const [show6, setShow6] = useState(false)
  const [show7, setShow7] = useState(false)
  const [show8, setShow8] = useState(false)
  const [show9, setShow9] = useState(false)

  return (
    <PageLayout title="Ejemplos de Ventanas Modales">
      <div className="px-4 pt-4">
        <TextCustom text="Tipos" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-2">
          <ButtonCustom
            text="Ventana modal basica"
            onClick={() => setShow1(true)}
            className="w-fit"
          />
          <ButtonCustom
            text="Ventana modal sin evento Dismiss"
            onClick={() => setShow2(true)}
            className="w-fit"
          />
          <ButtonCustom
            text="Ventana modal sin icono de cerrar"
            onClick={() => setShow3(true)}
            className="w-fit"
          />
          <ButtonCustom
            text="Ventana modal sin botón de cerrar"
            onClick={() => setShow4(true)}
            className="w-fit"
          />
        </div>
        <Divider />
      </div>
      <div className="px-4 pt-4">
        <TextCustom text="Botones de acción y efectos" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-2">
          <ButtonCustom
            text="Ventana modal con botones de acción"
            onClick={() => setShow5(true)}
            className="w-fit"
          />
          <ButtonCustom
            text="Ventana modal con efecto de carga"
            onClick={() => setShow6(true)}
            className="w-fit"
          />
          <ButtonCustom
            text="Ventana modal con efecto de alertas"
            onClick={() => setShow7(true)}
            className="w-fit"
          />
          <ButtonCustom
            text="Ventana modal con efecto al cerrarse"
            onClick={() => setShow8(true)}
            className="w-fit"
          />
        </div>
        <Divider />
      </div>
      <div className="px-4 pt-4">
        <TextCustom text="Ventana Modal Avanzada" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-2">
          <ButtonCustom
            text="Ventana modal con formulario"
            onClick={() => setShow9(true)}
            className="w-fit"
          />
        </div>
        <Divider />
      </div>
      {/* Ventanas modales basicas */}
      <DialogCustom open={show1} setOpen={setShow1} title="Ventana modal">
        <TextCustom text="Ventana modal básica" />
      </DialogCustom>
      <DialogCustom
        open={show2}
        setOpen={setShow2}
        title="Ventana modal"
        disabledDismiss
      >
        <TextCustom text="Ventana modal sin evento Dismiss" />
      </DialogCustom>
      <DialogCustom
        open={show3}
        setOpen={setShow3}
        title="Ventana modal"
        disabledIconClose
      >
        <TextCustom text="Ventana modal sin icono de cerrar" />
      </DialogCustom>
      <DialogCustom
        open={show4}
        setOpen={setShow4}
        title="Ventana modal"
        disabledCancelAction
      >
        <TextCustom text="Ventana modal sin botón de cerrar" />
      </DialogCustom>
      {/* Ventanas con botones de acciones */}
      <DialogButtons open={show5} setOpen={setShow5} />
      <DialogLoaderEfect open={show6} setOpen={setShow6} />
      <DialogAlertEfect open={show7} setOpen={setShow7} />
      <DialogDismissEfect open={show8} setOpen={setShow8} />
      {/* Ventanas modal avanzada */}
      <DialogAdvanced open={show9} setOpen={setShow9} />
    </PageLayout>
  )
}
