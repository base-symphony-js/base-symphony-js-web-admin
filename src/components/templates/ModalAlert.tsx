import { memo } from 'react'
import {
  AlertProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { TextCustom, IconButtonCustom, ButtonCustom, IAlert } from '@components'
import {
  CheckCircleIcon,
  CloseIcon,
  ErrorIcon,
  InfoIcon,
  WarningIcon,
} from '@assets'

export interface IModalAlert extends IAlert {
  textAction?: string
  action: () => void
  disabledDismiss?: boolean
  onDismiss?: () => void
}

interface ModalAlertProps {
  title: string
  description: string
  open: boolean
  severity: AlertProps['severity']
  textAction?: string
  action: () => void
  disabledDismiss?: boolean
  onDismiss?: () => void
  setAlert: (value: IModalAlert) => void
}

const Component = ({
  title = '',
  description = '',
  open = false,
  severity = 'info',
  textAction,
  action = () => null,
  disabledDismiss = false,
  onDismiss = () => null,
  setAlert = () => null,
}: ModalAlertProps) => {
  const handleClose = () => {
    setAlert({
      open: false,
      title,
      description,
      severity,
      action,
      disabledDismiss,
      onDismiss,
    })
    onDismiss()
  }

  const handleAction = () => {
    action()
    handleClose()
  }

  const icons = {
    info: <InfoIcon className="text-info" />,
    success: <CheckCircleIcon className="text-success" />,
    warning: <WarningIcon className="text-warning" />,
    error: <ErrorIcon className="text-error" />,
  }

  const buttons = {
    info: (
      <ButtonCustom
        text={textAction ?? 'Aceptar'}
        color="info"
        className="px-8"
        onClick={handleAction}
      />
    ),
    success: (
      <ButtonCustom
        text={textAction ?? 'Guardar'}
        color="success"
        className="px-8"
        onClick={handleAction}
      />
    ),
    warning: (
      <ButtonCustom
        text={textAction ?? 'Inhabilitar'}
        color="warning"
        className="px-8"
        onClick={handleAction}
      />
    ),
    error: (
      <ButtonCustom
        text={textAction ?? 'Eliminar'}
        color="error"
        className="px-8"
        onClick={handleAction}
      />
    ),
  }

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      onClose={() => !disabledDismiss && handleClose()}
      maxWidth="xl"
    >
      <DialogTitle className="pl-5 pr-2 m-0 py-0">
        <div className="flex justify-between items-center pt-4">
          <div className="flex items-center gap-2">
            {icons[severity]}
            <TextCustom text={title} className="font-bold text-lg" />
          </div>
          <IconButtonCustom
            icon={<CloseIcon />}
            onClick={handleClose}
            color="inherit"
          />
        </div>
      </DialogTitle>
      <DialogContent className="mt-2">
        <TextCustom
          text={description}
          className="italic"
          color="textSecondary"
        />
      </DialogContent>
      <DialogActions>
        <ButtonCustom
          text="Cancelar"
          variant="outlined"
          color="inherit"
          className="px-8"
          onClick={handleClose}
        />
        {buttons[severity]}
      </DialogActions>
    </Dialog>
  )
}

export const ModalAlert = memo(Component)
