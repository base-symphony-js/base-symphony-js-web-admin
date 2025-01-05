import {
  BadgePoint,
  ButtonCustom,
  DialogCustom,
  IAlert,
  TableCustom,
} from '@components'
import { useCustomFetch } from '@hooks'
import { apiAssignRole } from '@services'
import { useState } from 'react'

interface DialogAssignRoleProps {
  open: boolean
  setOpen: (value: boolean) => void
  setIsSessionExpired: (value: boolean) => void
  onDismiss?: () => void
  idUser: any
  roles: any[]
}

export const DialogAssignRole = ({
  open = false,
  setOpen = () => null,
  setIsSessionExpired = () => null,
  onDismiss = () => null,
  idUser = null,
  roles = [],
}: DialogAssignRoleProps) => {
  const { customFetch } = useCustomFetch()
  const [selectedRole, setSelectedRole] = useState('')
  const [loader, setLoader] = useState(false)
  const [alert, setAlert] = useState({} as IAlert)

  const handleAddRole = async () => {
    setLoader(true)
    const response = await customFetch(apiAssignRole, {
      params: { idUser },
      body: { idRole: selectedRole },
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
      title="Asignar Rol"
      open={open}
      setOpen={setOpen}
      loader={loader}
      alert={alert}
      setAlert={setAlert}
      dialogActions={
        <ButtonCustom text="Asignar" onClick={handleAddRole} color="success" />
      }
    >
      <TableCustom
        /* DATA */
        columns={[
          {
            accessorKey: 'id',
            header: 'Nro.',
            enableEditing: false,
            enableHiding: false,
          },
          {
            accessorKey: 'title_es',
            header: 'Nombre',
            enableEditing: true,
          },
          {
            accessorKey: 'description_es',
            header: 'Descripción',
            enableEditing: true,
          },
          {
            accessorKey: 'state',
            header: 'Estado',
            enableEditing: true,
            Cell: ({ cell }) =>
              cell.getValue() ? (
                <BadgePoint text="Habilitado" color="success" />
              ) : (
                <BadgePoint text="Inhabilitado" color="warning" />
              ),
          },
        ]}
        data={roles}
        /* STATE */
        identifierName="id"
        initialState={{ columnVisibility: { id: false } }}
        enableRowSelection
        onRowSelectionChange={selectedRows => setSelectedRole(selectedRows[0])}
      />
    </DialogCustom>
  )
}
