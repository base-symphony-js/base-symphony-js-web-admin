import {
  IAlert,
  IModalAlert,
  LoaderCustom,
  ModalAlert,
  SnackbarCustom,
  TextCustom,
} from '@components'
import { COLORS } from '@common'
import { Box, CssBaseline, useColorScheme } from '@mui/material'
import { useEffect } from 'react'
import { api } from '@config'
import { useAuthActions } from '@redux'

interface PageLayoutProps {
  children: React.ReactNode
  title?: string
  alert?: IAlert
  setAlert?: (value: IAlert) => void
  modalAlert?: IModalAlert
  setModalAlert?: (value: IModalAlert) => void
  loader?: boolean
  isSessionExpired?: boolean
}

export const PageLayout = ({
  children,
  title = '',
  alert = {} as IAlert,
  setAlert = () => null,
  modalAlert = {} as IModalAlert,
  setModalAlert = () => null,
  loader = false,
  isSessionExpired = false,
}: PageLayoutProps) => {
  const { dispatchLogout } = useAuthActions()
  const { colorScheme: theme } = useColorScheme()

  useEffect(() => {
    if (isSessionExpired) {
      api.defaults.headers.Authorization = ''
      dispatchLogout()
    }
  }, [isSessionExpired])

  return (
    <Box className="p-6 flex flex-col gap-4">
      <CssBaseline />
      <TextCustom text={title} className="text-2xl font-bold" />
      <div
        className="p-6 flex flex-col rounded-lg shadow-lg"
        style={{
          backgroundColor: theme === 'dark' ? COLORS.dark : COLORS.white,
        }}
      >
        {children}
        {loader && <LoaderCustom mode="screen" />}
      </div>
      <SnackbarCustom
        open={alert.open}
        title={alert.title}
        description={alert.description}
        severity={alert.severity}
        setAlert={setAlert}
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
    </Box>
  )
}
