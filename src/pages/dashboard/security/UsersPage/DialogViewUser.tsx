import { ButtonCustom, DialogCustom, IAlert, TextCustom } from '@components'
import { useCustomFetch } from '@hooks'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { apiGetUser, apiUnlockedUser } from '@services'
import { formatDate } from '@common'

interface DialogViewUserProps {
  open: boolean
  setOpen: (value: boolean) => void
  setIsSessionExpired: (value: boolean) => void
  onDismiss?: () => void
  userId: any
}

export const DialogViewUser = ({
  open = false,
  setOpen = () => null,
  setIsSessionExpired = () => null,
  onDismiss = () => null,
  userId = null,
}: DialogViewUserProps) => {
  const { customFetch } = useCustomFetch()
  const [user, setUser] = useState<any>(null)
  const [roles, setRoles] = useState<any>(null)
  const [alert, setAlert] = useState({} as IAlert)
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    if (open) loadUser()
  }, [open, userId])

  const loadUser = async () => {
    setLoader(true)
    const response = await customFetch(apiGetUser, { params: { userId } })
    const { success, statusCode, message, data } = response
    if (success) {
      setUser(data?.user)
      setRoles(data?.roles.assignedRoles)
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

  const unlockedUser = async () => {
    setLoader(true)
    const response = await customFetch(apiUnlockedUser, { params: { userId } })
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
        <ButtonCustom
          text="¿Desbloquear cuenta?"
          onClick={unlockedUser}
          color="info"
          disabled={user?.passwordVersion === 3 ? false : true}
        />
      }
    >
      <div className="flex flex-col gap-8">
        <Box>
          <TextCustom text="Información básica:" className="font-semibold" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <TextCustom text="Nombre:" />
              <TextCustom text={user?.firstName} color="textSecondary" />
            </div>
            <div className="flex flex-col">
              <TextCustom text="Apellido:" />
              <TextCustom text={user?.lastName} color="textSecondary" />
            </div>
            <div className="flex flex-col">
              <TextCustom text="Correo electrónico:" />
              <TextCustom text={user?.email} color="textSecondary" />
            </div>
            <div className="flex flex-col">
              <TextCustom text="Número de teléfono:" />
              <TextCustom text={user?.phoneNumber} color="textSecondary" />
            </div>
            <div className="flex flex-col">
              <TextCustom text="Estado del usuario:" />
              <TextCustom
                text={user?.state ? 'Habilitado' : 'Deshabilitado'}
                color="textSecondary"
              />
            </div>
            <div className="flex flex-col">
              <TextCustom text="Estado de la cuenta:" />
              <TextCustom
                text={
                  user?.passwordVersion === 3 ? 'Bloqueada' : 'Desbloqueada'
                }
                color="textSecondary"
              />
            </div>
          </div>
        </Box>
        <Box>
          <TextCustom
            text="Información de cambios:"
            className="font-semibold"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <TextCustom text="Creado en:" />
              <TextCustom
                text={formatDate(user?.createdAt)}
                color="textSecondary"
              />
            </div>
            <div className="flex flex-col">
              <TextCustom text="Creado por:" />
              <TextCustom
                text={user?.createdBy?.email ?? 'El sistema'}
                color="textSecondary"
              />
            </div>
            <div className="flex flex-col">
              <TextCustom text="Actualizado en:" />
              <TextCustom
                text={formatDate(user?.updatedAt)}
                color="textSecondary"
              />
            </div>
            <div className="flex flex-col">
              <TextCustom text="Actualizado por:" />
              <TextCustom text={user?.updatedBy?.email} color="textSecondary" />
            </div>
          </div>
        </Box>
        <Box>
          <TextCustom text="Roles del usuario:" className="font-semibold" />
          <div className="flex flex-col gap-4">
            {roles?.map((role: any, index: number) => (
              <div key={role.id} className="flex gap-4 items-center">
                <TextCustom text={`${index + 1}`} />
                <div className="flex flex-col">
                  <TextCustom text={role.title_es} />
                  <TextCustom
                    text={role.description_es}
                    color="textSecondary"
                  />
                </div>
              </div>
            ))}
          </div>
        </Box>
      </div>
    </DialogCustom>
  )
}
