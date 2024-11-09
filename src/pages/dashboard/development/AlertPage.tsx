import { useState } from 'react'
import { Divider } from '@mui/material'
import {
  AlertCustom,
  ButtonCustom,
  IAlert,
  IModalAlert,
  ModalAlert,
  PageLayout,
  SnackbarCustom,
  TextCustom,
} from '@components'

export const AlertPage = () => {
  const [alert, setAlert] = useState({} as IAlert)
  const [snackbar, setSnackbar] = useState({} as IAlert)
  const [modalAlert, setModalAlert] = useState({} as IModalAlert)

  const handleInfo = () => console.log('Aceptar..')
  const handleSuccess = () => console.log('Guardar..')
  const handleWarning = () => console.log('Inhabilitar..')
  const handleError = () => console.log('Eliminar...')
  const handleClean = () => console.log('Limpiar información')

  return (
    <PageLayout title="Ejemplos de Alertas">
      {/* Tipos de Alerts */}
      <div className="px-4 py-4">
        <TextCustom text="Tipos de Alerts" className="text-3xl" />
        <Divider />
        <AlertCustom
          open={alert.open}
          title={alert.title}
          description={alert.description}
          severity={alert.severity}
          setAlert={setAlert}
        />
        <div className="mt-4 flex flex-col gap-2">
          <ButtonCustom
            text="Alert Info"
            onClick={() =>
              setAlert({
                open: true,
                title: 'Información',
                description: 'Descripción de información',
                severity: 'info',
              })
            }
            color="info"
          />
          <ButtonCustom
            text="Alert Success"
            onClick={() =>
              setAlert({
                open: true,
                title: 'Exitoso',
                description: 'Descripción de exitoso',
                severity: 'success',
              })
            }
            color="success"
          />
          <ButtonCustom
            text="Alert Warning"
            onClick={() =>
              setAlert({
                open: true,
                title: 'Advertencia',
                description: 'Descripción de advertencia',
                severity: 'warning',
              })
            }
            color="warning"
          />
          <ButtonCustom
            text="Alert Error"
            onClick={() =>
              setAlert({
                open: true,
                title: 'Error',
                description: 'Descripción de error',
                severity: 'error',
              })
            }
            color="error"
          />
        </div>
      </div>
      <div className="px-4 py-4">
        <TextCustom text="Tipos de Snackbar" className="text-3xl" />
        <Divider />
        <div className="mt-4 flex flex-col gap-2">
          <ButtonCustom
            text="Snackbar Info"
            onClick={() =>
              setSnackbar({
                open: true,
                title: 'Información',
                description: 'Descripción de información',
                severity: 'info',
              })
            }
            color="info"
          />
          <ButtonCustom
            text="Snackbar Success"
            onClick={() =>
              setSnackbar({
                open: true,
                title: 'Exitoso',
                description: 'Descripción de exitoso',
                severity: 'success',
              })
            }
            color="success"
          />
          <ButtonCustom
            text="Snackbar Warning"
            onClick={() =>
              setSnackbar({
                open: true,
                title: 'Advertencia',
                description: 'Descripción de advertencia',
                severity: 'warning',
              })
            }
            color="warning"
          />
          <ButtonCustom
            text="Snackbar Error"
            onClick={() =>
              setSnackbar({
                open: true,
                title: 'Error',
                description: 'Descripción de error',
                severity: 'error',
              })
            }
            color="error"
          />
        </div>
      </div>
      <div className="px-4 py-4">
        <TextCustom text="Tipos de Alertas Modales" className="text-3xl" />
        <Divider />
        <div className="mt-4 flex flex-col gap-2">
          <ButtonCustom
            text="Alert Modal Info"
            onClick={() =>
              setModalAlert({
                open: true,
                title: 'Información importante',
                description: 'El usuario necesita actualizar su contraseña.',
                severity: 'info',
                action: handleInfo,
                onDismiss: handleClean,
              })
            }
            color="info"
          />
          <ButtonCustom
            text="Alert Modal Success"
            onClick={() =>
              setModalAlert({
                open: true,
                title: '¿Está seguro que desea guardar la información?',
                description: 'El registro será actualizado.',
                severity: 'success',
                action: handleSuccess,
                onDismiss: handleClean,
              })
            }
            color="success"
          />
          <ButtonCustom
            text="Alert Modal Warning"
            onClick={() =>
              setModalAlert({
                open: true,
                title: '¿Está seguro que desea inhabilitarlo?',
                description: 'El registro no podrá ser utilizado.',
                severity: 'warning',
                action: handleWarning,
                onDismiss: handleClean,
              })
            }
            color="warning"
          />
          <ButtonCustom
            text="Alert Modal Error"
            onClick={() =>
              setModalAlert({
                open: true,
                title: '¿Está seguro que desea eliminarlo?',
                description: 'El registro no podrá ser recuperado.',
                severity: 'error',
                action: handleError,
                onDismiss: handleClean,
              })
            }
            color="error"
          />
        </div>
      </div>
      <SnackbarCustom
        open={snackbar.open}
        title={snackbar.title}
        description={snackbar.description}
        severity={snackbar.severity}
        setAlert={setSnackbar}
      />
      <ModalAlert
        open={modalAlert.open}
        title={modalAlert.title}
        description={modalAlert.description}
        severity={modalAlert.severity}
        action={modalAlert.action}
        onDismiss={modalAlert.onDismiss}
        setAlert={setModalAlert}
      />
    </PageLayout>
  )
}
