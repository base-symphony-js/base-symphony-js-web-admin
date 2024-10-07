import { memo } from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { TextCustom, IconButtonCustom, ButtonCustom } from '@components'
import {
  CheckCircleIcon,
  CloseIcon,
  ErrorIcon,
  InfoIcon,
  WarningIcon,
} from '@assets'

interface ModalCustomProps {
  title: string
  description: string
  open: boolean
  setOpen: (value: boolean) => void
  onDismiss?: () => void
  disabledDismiss?: boolean
  action: () => void
  type: 'success' | 'warning' | 'error' | 'info'
}

const Component = ({
  title = '',
  description = '',
  open = false,
  setOpen = () => null,
  onDismiss = () => null,
  disabledDismiss = false,
  action = () => null,
  type = 'info',
}: ModalCustomProps) => {
  const renderIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircleIcon className="text-success" />
      case 'warning':
        return <WarningIcon className="text-warning" />
      case 'error':
        return <ErrorIcon className="text-danger" />
      case 'info':
      default:
        return <InfoIcon className="text-primary" />
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleAction = () => {
    action()
    onDismiss()
    setOpen(false)
  }

  const renderButton = () => {
    switch (type) {
      case 'success':
        return (
          <ButtonCustom
            text="Guardar"
            typeColor="success"
            className="px-8"
            onClick={handleAction}
          />
        )
      case 'warning':
        return (
          <ButtonCustom
            text="Inhabilitar"
            typeColor="warning"
            className="px-8"
            onClick={handleAction}
          />
        )
      case 'error':
        return (
          <ButtonCustom
            text="Eliminar"
            typeColor="danger"
            className="px-8"
            onClick={handleAction}
          />
        )
      case 'info':
      default:
        return (
          <ButtonCustom
            text="Aceptar"
            typeColor="primary"
            className="px-8"
            onClick={handleAction}
          />
        )
    }
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
            {renderIcon()}
            <TextCustom text={title} className="font-bold text-lg" />
          </div>
          <IconButtonCustom
            icon={<CloseIcon />}
            onClick={handleClose}
            typeColor="dark-gray"
          />
        </div>
      </DialogTitle>
      <DialogContent className="mt-2">
        <TextCustom text={description} className="text-dark-gray" />
      </DialogContent>
      <DialogActions>
        <ButtonCustom
          text="Cancelar"
          variant="outlined"
          typeColor="dark-gray"
          className="px-8"
          onClick={handleClose}
        />
        {renderButton()}
      </DialogActions>
    </Dialog>
  )
}

export const ModalCustom = memo(Component)
