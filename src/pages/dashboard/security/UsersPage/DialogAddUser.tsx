import {
  ButtonCustom,
  DialogCustom,
  IAlert,
  SwitchCustom,
  TextInputCustom,
} from '@components'
import { useCustomFetch } from '@hooks'
import { useState } from 'react'
import { apiCreateUser } from '@services'

interface DialogAddUserProps {
  open: boolean
  setOpen: (value: boolean) => void
  setIsSessionExpired: (value: boolean) => void
  onDismiss?: () => void
}

export const DialogAddUser = ({
  open = false,
  setOpen = () => null,
  setIsSessionExpired = () => null,
  onDismiss = () => null,
}: DialogAddUserProps) => {
  const { customFetch } = useCustomFetch()
  const [alert, setAlert] = useState({} as IAlert)
  const [loader, setLoader] = useState(false)
  // User
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [state, setState] = useState(true)

  const handleAddUser = async () => {
    setLoader(true)
    const response = await customFetch(apiCreateUser, {
      body: { firstName, lastName, email, state },
    })
    const { success, statusCode, message } = response
    if (success) {
      setOpen(false)
      onDismiss()
    } else {
      if (statusCode === 401) setIsSessionExpired(true)
      setAlert({
        open: true,
        title: statusCode >= 500 ? 'Error' : 'Advertencia',
        description: message,
        severity: statusCode >= 500 ? 'error' : 'warning',
      })
    }
    setLoader(false)
  }

  return (
    <DialogCustom
      title="Información del usuario"
      open={open}
      setOpen={setOpen}
      loader={loader}
      alert={alert}
      setAlert={setAlert}
      disabledCancelAction
      dialogActions={
        <ButtonCustom text="Agregar" onClick={handleAddUser} color="success" />
      }
    >
      <div className="flex gap-4 flex-col sm:flex-row">
        <TextInputCustom
          name="Nombre:"
          value={firstName}
          setValue={setFirstName}
          className="w-full"
        />
        <TextInputCustom
          name="Apellido:"
          value={lastName}
          setValue={setLastName}
          className="w-full"
        />
      </div>
      <TextInputCustom
        name="Correo Electrónico:"
        value={email}
        setValue={setEmail}
      />
      <SwitchCustom
        name="Estado:"
        value={state}
        setValue={setState}
        align="top"
        className="w-full"
      />
    </DialogCustom>
  )
}
