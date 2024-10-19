import { memo } from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from '@mui/material'
import {
  TextCustom,
  LoaderCustom,
  IconButtonCustom,
  ButtonCustom,
  AlertCustom,
  IAlert,
} from '@components'
import { CloseIcon } from '@assets'

interface DialogCustomProps {
  children: React.ReactNode
  title?: string
  open: boolean
  setOpen: (value: boolean) => void
  onDismiss?: () => void
  labelAction?: string
  onAction?: () => void
  disabledAction?: boolean
  loader?: boolean
  disabledDismiss?: boolean
  disabledIconClose?: boolean
  alert?: IAlert
  setAlert?: (value: IAlert) => void
}

const Component = ({
  children = null,
  title = '',
  open = false,
  setOpen = () => null,
  onDismiss = () => null,
  labelAction = '',
  onAction = () => null,
  disabledAction = false,
  loader = false,
  disabledDismiss = false,
  disabledIconClose = false,
  alert,
  setAlert = () => null,
}: DialogCustomProps) => {
  const handleClose = () => {
    onDismiss()
    setOpen(false)
    return false
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
        <div className="flex justify-between items-center">
          <TextCustom text={title} className="font-medium py-2" />
          {!disabledIconClose && (
            <IconButtonCustom
              icon={<CloseIcon theme="dark" />}
              onClick={handleClose}
            />
          )}
        </div>
      </DialogTitle>
      <Divider />
      <DialogContent className="flex flex-col min-w-96">
        <AlertCustom
          title={alert?.title}
          description={alert?.description}
          open={alert?.open}
          severity={alert?.severity}
          setAlert={setAlert}
        />
        {children}
      </DialogContent>
      <DialogActions>
        <ButtonCustom
          text="Cancelar"
          variant="outlined"
          color="inherit"
          onClick={handleClose}
          disabled={loader}
        />
        <ButtonCustom
          text={labelAction}
          color="primary"
          onClick={onAction}
          disabled={disabledAction ? true : loader}
        />
      </DialogActions>
      {loader && <LoaderCustom mode="modal" />}
    </Dialog>
  )
}

export const DialogCustom = memo(Component)
