import Snackbar from '@mui/material/Snackbar'
import Alert, { AlertProps } from '@mui/material/Alert'
import { IAlert, TextCustom } from '@components'
import { AlertTitle } from '@mui/material'

interface SnackbarCustomProps {
  title: string
  description?: string
  open: boolean
  severity: AlertProps['severity']
  setAlert: (value: IAlert) => void
}

export const SnackbarCustom = ({
  title = '',
  description = '',
  open = false,
  severity = 'info',
  setAlert = () => null,
}: SnackbarCustomProps) => {
  const handleClose = () => {
    setAlert({
      open: false,
      title,
      description,
      severity,
    })
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={(_e, reason) => (reason === 'clickaway' ? null : handleClose())}
    >
      <Alert
        severity={severity}
        className={`flex items-center py-0 whitespace-pre-line`}
        onClose={handleClose}
        variant="filled"
        sx={{ width: '100%' }}
      >
        <AlertTitle
          className="text-lg"
          sx={{ '&.MuiTypography-root': { margin: 0 } }}
          style={{ fontFamily: 'Poppins' }}
        >
          {title}
        </AlertTitle>
        <TextCustom text={description} className="text-white" />
      </Alert>
    </Snackbar>
  )
}
