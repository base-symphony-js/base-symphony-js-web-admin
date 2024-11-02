import { Alert, AlertProps, AlertTitle, Collapse } from '@mui/material'
import { TextCustom } from '@components'

export interface IAlert {
  open: boolean
  title: string
  description: string
  severity: AlertProps['severity']
}

interface AlertCustomProps {
  title?: string
  description?: string
  open?: boolean
  severity?: AlertProps['severity']
  setAlert: (value: IAlert) => void
}

export const AlertCustom = ({
  title = '',
  description = '',
  open = false,
  severity = 'info',
  setAlert = () => null,
}: AlertCustomProps) => {
  const handleClose = () => {
    setAlert({
      open: false,
      title,
      description,
      severity,
    })
  }

  return (
    <Collapse in={open}>
      <Alert
        severity={severity}
        onClose={handleClose}
        variant="filled"
        className={`flex items-center py-0 whitespace-pre-line`}
      >
        <AlertTitle
          className="text-lg"
          sx={{ '&.MuiTypography-root': { margin: 0 } }}
        >
          {title}
        </AlertTitle>
        <TextCustom text={description} color="inherit" />
      </Alert>
    </Collapse>
  )
}
