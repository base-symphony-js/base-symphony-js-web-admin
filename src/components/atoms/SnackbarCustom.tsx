import Snackbar from '@mui/material/Snackbar'
import Alert, { AlertProps } from '@mui/material/Alert'
import { IAlert, IconButtonCustom, TextCustom } from '@components'
import { AlertTitle } from '@mui/material'
import { CloseIcon } from '@assets'

interface SnackbarCustomProps {
  title?: string
  description?: string
  open?: boolean
  severity?: AlertProps['severity']
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
        action={
          <IconButtonCustom
            icon={<CloseIcon theme="dark" />}
            onClick={handleClose}
          />
        }
        variant="filled"
        className={`flex items-center py-0 whitespace-pre-line`}
        sx={{ '& .MuiAlert-icon': { color: 'white' } }}
      >
        <AlertTitle
          className="text-lg text-white"
          sx={{ '&.MuiTypography-root': { margin: 0 } }}
        >
          {title}
        </AlertTitle>
        <TextCustom text={description} className="text-white" />
      </Alert>
    </Snackbar>
  )
}
