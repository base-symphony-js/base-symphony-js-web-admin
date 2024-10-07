import { Alert, AlertProps, AlertTitle, Collapse } from '@mui/material'
import { IconButtonCustom, TextCustom } from '@components'
import { CloseIcon } from '@assets'

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
          style={{ fontFamily: 'Poppins' }}
        >
          {title}
        </AlertTitle>
        <TextCustom text={description} className="text-white" />
      </Alert>
    </Collapse>
  )
}
