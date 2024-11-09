import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  BadgePoint,
  ButtonCustom,
  IAlert,
  IModalAlert,
  PageLayout,
  TableCustom,
} from '@components'
import { apiDeleteUser, apiDisableUser, apiGetUsers } from '@services'
import { useCustomFetch } from '@hooks'
import { DialogViewUser } from './DialogViewUser'
import { DialogAddUser } from './DialogAddUser'

export const UsersPage = () => {
  const navigate = useNavigate()
  const { customFetch } = useCustomFetch()
  const [idUser, setIdUser] = useState<any>(null)
  const [users, setUsers] = useState<any[]>([])
  const [loader, setLoader] = useState(false)
  const [isSessionExpired, setIsSessionExpired] = useState(false)
  const [showUser, setShowUser] = useState(false)
  const [showAddUser, setShowAddUser] = useState(false)
  const [alert, setAlert] = useState({} as IAlert)
  const [modalAlert, setModalAlert] = useState({} as IModalAlert)

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    setLoader(true)
    const response = await customFetch(apiGetUsers, {})
    const { success, statusCode, message, data } = response
    if (success) {
      setUsers(data.users)
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

  const handleDisableUser = async (id: string) => {
    setLoader(true)
    const response = await customFetch(apiDisableUser, {
      params: { idUser: id },
    })
    const { success, statusCode, message } = response
    if (success) {
      loadUsers()
      setAlert({
        open: true,
        title: 'Exitoso',
        description: message,
        severity: 'success',
      })
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

  const handleDeleteUser = async (id: string) => {
    setLoader(true)
    const response = await customFetch(apiDeleteUser, {
      params: { idUser: id },
    })
    const { success, statusCode, message } = response
    if (success) {
      loadUsers()
      setAlert({
        open: true,
        title: 'Exitoso',
        description: message,
        severity: 'success',
      })
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

  const handleActions = {
    view: (id: string, _obj: any) => {
      setIdUser(id)
      setShowUser(true)
    },
    edit: (id: string, _obj: any) => {
      navigate('/dashboard/security/users/' + id)
    },
    disable: (id: string, obj: any) => {
      setModalAlert({
        open: true,
        title: '¿Está seguro que desea inhabilitarlo?',
        description: `El usuario "${obj.email}" quedará inhabilitado.`,
        severity: 'warning',
        action: () => handleDisableUser(id),
      })
    },
    delete: (id: string, obj: any) => {
      setModalAlert({
        open: true,
        title: '¿Está seguro que desea eliminarlo?',
        description: `El usuario "${obj.email}" no podrá ser recuperado.`,
        severity: 'error',
        action: () => handleDeleteUser(id),
      })
    },
  }

  return (
    <PageLayout
      title="Gestión de usuarios"
      alert={alert}
      setAlert={setAlert}
      modalAlert={modalAlert}
      setModalAlert={setModalAlert}
      isSessionExpired={isSessionExpired}
      setIsSessionExpired={setIsSessionExpired}
    >
      <TableCustom
        /* DATA */
        columns={[
          {
            accessorKey: '_id',
            header: 'Nro.',
            enableEditing: false,
            enableHiding: false,
          },
          {
            accessorKey: 'firstName',
            header: 'Nombres',
            enableEditing: true,
          },
          {
            accessorKey: 'lastName',
            header: 'Apellidos',
            enableEditing: true,
          },
          {
            accessorKey: 'email',
            header: 'Correo',
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
        data={users}
        /* STATE */
        identifierName="_id"
        initialState={{ columnVisibility: { _id: false } }}
        isLoading={loader}
        /* EXPORT */
        enableExport
        filename="Usuarios"
        /* ACTIONS */
        actions={['view', 'edit', 'disable', 'delete']}
        onAction={(action, id, obj) => handleActions[action](id, obj)}
        positionActionsColumn="last"
        /* HEAD */
        enableColumnActions
        enableGrouping
        enableColumnOrdering
        enableStickyHeader
        enableColumnPinning
        enableColumnFilterModes
        /* TOOLBAR */
        enableTopToolbar
        enableFilters
        enableHiding
        enableDensityToggle
        enableFullScreenToggle
        /* RENDERS */
        customToolbar={
          <ButtonCustom text="Agregar" onClick={() => setShowAddUser(true)} />
        }
      />
      <DialogViewUser
        open={showUser}
        setOpen={setShowUser}
        onDismiss={loadUsers}
        idUser={idUser}
        setIsSessionExpired={setIsSessionExpired}
      />
      <DialogAddUser
        open={showAddUser}
        setOpen={setShowAddUser}
        onDismiss={loadUsers}
        setIsSessionExpired={setIsSessionExpired}
      />
    </PageLayout>
  )
}
