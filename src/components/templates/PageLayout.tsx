import {
  DialogSessionExpired,
  IAlert,
  IModalAlert,
  LoaderCustom,
  ModalAlert,
  SnackbarCustom,
  TextCustom,
} from '@components'
import { COLORS } from '@common'
import { Box, CssBaseline, Divider, useColorScheme } from '@mui/material'

interface PageLayoutProps {
  children: React.ReactNode
  title?: string
  alert?: IAlert
  setAlert?: (value: IAlert) => void
  modalAlert?: IModalAlert
  setModalAlert?: (value: IModalAlert) => void
  loader?: boolean
  isSessionExpired?: boolean
  setIsSessionExpired?: (value: boolean) => void
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
  setIsSessionExpired = () => null,
}: PageLayoutProps) => {
  const { colorScheme: theme } = useColorScheme()

  return (
    <Box className="p-6 flex flex-col gap-4">
      <CssBaseline />
      <div
        className="p-6 flex flex-col rounded-lg shadow-lg"
        style={{
          backgroundColor: theme === 'dark' ? COLORS.dark : COLORS.white,
        }}
      >
        <div className="mb-4">
          <TextCustom text={title} className="text-3xl font-bold" />
          <Divider />
        </div>
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
      <DialogSessionExpired
        open={isSessionExpired}
        setOpen={setIsSessionExpired}
      />
    </Box>
  )
}
