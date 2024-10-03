import { useState } from 'react'
import { Divider } from '@mui/material'
import {
  AlertCustom,
  ButtonCustom,
  IAlert,
  PageLayout,
  SnackbarCustom,
  TextCustom,
} from '@components'

export const AlertPage = () => {
  const [alertInfo, setAlertInfo] = useState<IAlert>({} as IAlert)
  const [alertSuccess, setAlertSuccess] = useState<IAlert>({} as IAlert)
  const [alertWarning, setAlertWarning] = useState<IAlert>({} as IAlert)
  const [alertError, setAlertError] = useState<IAlert>({} as IAlert)
  const [snackInfo, setSnackInfo] = useState<IAlert>({} as IAlert)
  const [snackSuccess, setSnackSuccess] = useState<IAlert>({} as IAlert)
  const [snackWarning, setSnackWarning] = useState<IAlert>({} as IAlert)
  const [snackError, setSnackError] = useState<IAlert>({} as IAlert)

  const handleShowAlerts = () => {
    setAlertInfo({
      open: true,
      title: 'Información',
      description: 'Descripción de información',
      severity: 'info',
    })
    setAlertSuccess({
      open: true,
      title: 'Exitoso',
      description: 'Descripción de exitoso',
      severity: 'success',
    })
    setAlertWarning({
      open: true,
      title: 'Advertencia',
      description: 'Descripción de advertencia',
      severity: 'warning',
    })
    setAlertError({
      open: true,
      title: 'Error',
      description: 'Descripción de error',
      severity: 'error',
    })
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
            open={alertInfo.open}
            title={alertInfo.title}
            description={alertInfo.description}
            severity={alertInfo.severity}
            setAlert={setAlertInfo}
          />
          <AlertCustom
            open={alertSuccess.open}
            title={alertSuccess.title}
            description={alertSuccess.description}
            severity={alertSuccess.severity}
            setAlert={setAlertSuccess}
          />
          <AlertCustom
            open={alertWarning.open}
            title={alertWarning.title}
            description={alertWarning.description}
            severity={alertWarning.severity}
            setAlert={setAlertWarning}
          />
          <AlertCustom
            open={alertError.open}
            title={alertError.title}
            description={alertError.description}
            severity={alertError.severity}
            setAlert={setAlertError}
          />
        </div>
        <Divider />
      </div>
      <ButtonCustom
        text="Mostrar Alerts"
        onClick={handleShowAlerts}
        className="mt-4 w-40"
      />
      <div className="mt-4 flex flex-col gap-2">
        <ButtonCustom
          text="Snackbar Info"
          onClick={() =>
            setSnackInfo({
              open: true,
              title: 'Información',
              description: 'Descripción de información',
              severity: 'info',
            })
          }
          typeColor="primary"
        />
        <ButtonCustom
          text="Snackbar Success"
          onClick={() =>
            setSnackSuccess({
              open: true,
              title: 'Exitoso',
              description: 'Descripción de exitoso',
              severity: 'success',
            })
          }
          typeColor="success"
        />
        <ButtonCustom
          text="Snackbar Warning"
          onClick={() =>
            setSnackWarning({
              open: true,
              title: 'Advertencia',
              description: 'Descripción de advertencia',
              severity: 'warning',
            })
          }
          typeColor="warning"
        />
        <ButtonCustom
          text="Snackbar Error"
          onClick={() =>
            setSnackError({
              open: true,
              title: 'Error',
              description: 'Descripción de error',
              severity: 'error',
            })
          }
          typeColor="danger"
        />
      </div>
      <SnackbarCustom
        open={snackInfo.open}
        title={snackInfo.title}
        description={snackInfo.description}
        severity={snackInfo.severity}
        setAlert={setSnackInfo}
      />
      <SnackbarCustom
        open={snackSuccess.open}
        title={snackSuccess.title}
        description={snackSuccess.description}
        severity={snackSuccess.severity}
        setAlert={setSnackSuccess}
      />
      <SnackbarCustom
        open={snackWarning.open}
        title={snackWarning.title}
        description={snackWarning.description}
        severity={snackWarning.severity}
        setAlert={setSnackWarning}
      />
      <SnackbarCustom
        open={snackError.open}
        title={snackError.title}
        description={snackError.description}
        severity={snackError.severity}
        setAlert={setSnackError}
      />
    </PageLayout>
  )
}
