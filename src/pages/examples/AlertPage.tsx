import { useState } from 'react'
import { Divider } from '@mui/material'
import { AlertCustom, ButtonCustom, PageLayout, TextCustom } from '@components'

export const AlertPage = () => {
  const [alertInfo, setAlertInfo] = useState(true)
  const [alertSuccess, setAlertSuccess] = useState(true)
  const [alertWarning, setAlertWarning] = useState(true)
  const [alertError, setAlertError] = useState(true)

  const handleShowAlerts = () => {
    setAlertInfo(true)
    setAlertSuccess(true)
    setAlertWarning(true)
    setAlertError(true)
  }

  return (
    <PageLayout title="Ejemplos de Alertas">
      <TextCustom text="Alerts" className="text-6xl" />
      <Divider />
      {/* Tipos de Alerts */}
      <div className="px-4 pt-4">
        <TextCustom text="Tipos de Alerts" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-2">
          <AlertCustom
            open={alertInfo}
            setOpen={setAlertInfo}
            title="Información"
            description="Descripción de información"
            severity="info"
          />
          <AlertCustom
            open={alertSuccess}
            setOpen={setAlertSuccess}
            title="Exitoso"
            description="Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso Descripción de exitoso"
            severity="success"
          />
          <AlertCustom
            open={alertWarning}
            setOpen={setAlertWarning}
            title="Advertencia"
            description="Descripción de advertencia"
            severity="warning"
          />
          <AlertCustom
            open={alertError}
            setOpen={setAlertError}
            title="Error"
            description="Descripción de error"
            severity="error"
          />
        </div>
        <Divider />
      </div>
      <ButtonCustom
        text="Mostrar Alerts"
        onClick={handleShowAlerts}
        className="mt-4 w-40"
      />
    </PageLayout>
  )
}
