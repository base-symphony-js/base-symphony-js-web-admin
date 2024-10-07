import { useState } from 'react'
import { Divider } from '@mui/material'
import { ModalCustom, ButtonCustom, PageLayout, TextCustom } from '@components'

export const AlertModalPage = () => {
  const [alertInfo, setAlertInfo] = useState(false)
  const [alertSuccess, setAlertSuccess] = useState(false)
  const [alertWarning, setAlertWarning] = useState(false)
  const [alertError, setAlertError] = useState(false)

  return (
    <PageLayout title="Ejemplos de Alertas Modales">
      <TextCustom text="Alerts" className="text-6xl" />
      <Divider />
      {/* Tipos de Alerts */}
      <ButtonCustom
        text="Alert de Información"
        onClick={() => setAlertInfo(true)}
        className="mt-4"
        color="primary"
      />
      <ButtonCustom
        text="Alert de Guardar"
        onClick={() => setAlertSuccess(true)}
        className="mt-4"
        color="success"
      />
      <ButtonCustom
        text="Alert de Inhabilitar"
        onClick={() => setAlertWarning(true)}
        className="mt-4"
        color="warning"
      />
      <ButtonCustom
        text="Alert de Eliminar"
        onClick={() => setAlertError(true)}
        className="mt-4"
        color="error"
      />
      <ModalCustom
        action={() => console.log('Ejecutar acción')}
        open={alertInfo}
        setOpen={setAlertInfo}
        onDismiss={() => console.log('Limpiar información')}
        type="info"
        title="Información importante"
        description="El usuario necesita actualizar su contraseña."
      />
      <ModalCustom
        action={() => console.log('Ejecutar acción')}
        open={alertSuccess}
        setOpen={setAlertSuccess}
        onDismiss={() => console.log('Limpiar información')}
        type="success"
        title="¿Está seguro que desea guardar la información?"
        description="El registro será actualizado."
      />
      <ModalCustom
        action={() => console.log('Ejecutar acción')}
        open={alertWarning}
        setOpen={setAlertWarning}
        onDismiss={() => console.log('Limpiar información')}
        type="warning"
        title="¿Está seguro que desea inhabilitarlo?"
        description="El registro no podrá ser utilizado."
      />
      <ModalCustom
        action={() => console.log('Ejecutar acción')}
        open={alertError}
        setOpen={setAlertError}
        onDismiss={() => console.log('Limpiar información')}
        type="error"
        title="¿Está seguro que desea eliminarlo?"
        description="El registro no podrá ser recuperado."
      />
    </PageLayout>
  )
}
