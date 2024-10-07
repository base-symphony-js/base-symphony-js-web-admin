import { memo } from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
import { usePreferences } from '@hooks'
import { COLORS } from '@common'

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
  const { theme } = usePreferences()

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
      <DialogTitle
        className="pl-5 pr-2 m-0 py-0"
        style={{
          backgroundColor:
            theme === 'dark' ? COLORS['dark-general'] : COLORS.general,
        }}
      >
        <div className="flex justify-between items-center">
          <TextCustom text={title} className="font-medium py-2 text-white" />
          {!disabledIconClose && (
            <IconButtonCustom
              icon={<CloseIcon theme="dark" />}
              onClick={handleClose}
              typeColor="white"
            />
          )}
        </div>
      </DialogTitle>
      <div
        style={{
          backgroundColor: theme === 'dark' ? COLORS.dark : COLORS.white,
        }}
      >
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
            typeColor="danger"
            onClick={handleClose}
            disabled={loader}
          />
          <ButtonCustom
            text={labelAction}
            typeColor="primary"
            onClick={onAction}
            disabled={disabledAction ? true : loader}
          />
        </DialogActions>
      </div>
      {loader && <LoaderCustom mode="modal" />}
    </Dialog>
  )
}

export const DialogCustom = memo(Component)
