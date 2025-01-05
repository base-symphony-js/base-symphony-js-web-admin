import {
  ButtonCustom,
  DialogCustom,
  IAlert,
  SwitchCustom,
  TextInputCustom,
} from '@components'
import { useCustomFetch } from '@hooks'
import { useState } from 'react'
import { apiCreateRole } from '@services'

interface DialogAddRoleProps {
  open: boolean
  setOpen: (value: boolean) => void
  setIsSessionExpired: (value: boolean) => void
  onDismiss?: () => void
}

export const DialogAddRole = ({
  open = false,
  setOpen = () => null,
  setIsSessionExpired = () => null,
  onDismiss = () => null,
}: DialogAddRoleProps) => {
  const { customFetch } = useCustomFetch()
  const [alert, setAlert] = useState({} as IAlert)
  const [loader, setLoader] = useState(false)
  // Role
  const [title_en, setTitle_en] = useState('')
  const [title_es, setTitle_es] = useState('')
  const [description_en, setDescription_en] = useState('')
  const [description_es, setDescription_es] = useState('')
  const [state, setState] = useState(true)

  const handleAddRole = async () => {
    setLoader(true)
    const response = await customFetch(apiCreateRole, {
      body: { title_en, title_es, description_en, description_es, state },
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
      title="Información del rol"
      open={open}
      setOpen={setOpen}
      loader={loader}
      alert={alert}
      setAlert={setAlert}
      disabledCancelAction
      dialogActions={
        <ButtonCustom text="Agregar" onClick={handleAddRole} color="success" />
      }
    >
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 flex-col sm:flex-row">
          <TextInputCustom
            name="Título (EN):"
            value={title_en}
            setValue={setTitle_en}
            className="w-full"
          />
          <TextInputCustom
            name="Título (ES):"
            value={title_es}
            setValue={setTitle_es}
            className="w-full"
          />
        </div>
        <TextInputCustom
          name="Descripción (EN):"
          value={description_en}
          setValue={setDescription_en}
          className="w-full"
        />
        <TextInputCustom
          name="Descripción (ES):"
          value={description_es}
          setValue={setDescription_es}
          className="w-full"
        />
        <SwitchCustom
          name="Estado:"
          value={state}
          setValue={setState}
          align="top"
          className="w-full"
        />
      </div>
    </DialogCustom>
  )
}
