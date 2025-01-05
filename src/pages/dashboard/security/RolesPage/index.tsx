import {
  BadgePoint,
  ButtonCustom,
  IAlert,
  IModalAlert,
  PageLayout,
  TableCustom,
} from '@components'
import { useCustomFetch } from '@hooks'
import { apiGetRoles, apiDisableRole, apiDeleteRole } from '@services'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DialogAddRole } from './DialogAddRole'

export const RolesPage = () => {
  const navigate = useNavigate()
  const { customFetch } = useCustomFetch()
  const [loader, setLoader] = useState(false)
  const [isSessionExpired, setIsSessionExpired] = useState(false)
  const [alert, setAlert] = useState({} as IAlert)
  const [modalAlert, setModalAlert] = useState({} as IModalAlert)
  const [showAddRole, setShowAddRole] = useState(false)
  const [roles, setRoles] = useState([])

  useEffect(() => {
    loadRoles()
  }, [])

  const loadRoles = async () => {
    setLoader(true)
    const response = await customFetch(apiGetRoles, {})
    const { success, statusCode, message, data } = response
    if (success) {
      setRoles(data.roles)
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

  const handleDisableRole = async (id: string) => {
    setLoader(true)
    const response = await customFetch(apiDisableRole, {
      params: { roleId: id },
    })
    const { success, statusCode, message } = response
    if (success) {
      await loadRoles()
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

  const handleDeleteRole = async (id: string) => {
    setLoader(true)
    const response = await customFetch(apiDeleteRole, {
      params: { roleId: id },
    })
    const { success, statusCode, message } = response
    if (success) {
      await loadRoles()
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
    view: (_id: string, _obj: any) => {},
    edit: (id: string, _obj: any) => {
      navigate('/dashboard/security/roles/' + id)
    },
    disable: (id: string, obj: any) => {
      setModalAlert({
        open: true,
        title: '¿Está seguro que desea inhabilitarlo?',
        description: `El rol "${obj.title_es}" quedará inhabilitado.`,
        severity: 'warning',
        action: () => handleDisableRole(id),
      })
    },
    delete: (id: string, obj: any) => {
      setModalAlert({
        open: true,
        title: '¿Está seguro que desea eliminarlo?',
        description: `El rol "${obj.title_es}" no podrá ser recuperado.`,
        severity: 'error',
        action: () => handleDeleteRole(id),
      })
    },
  }

  return (
    <PageLayout
      title="Gestión de Roles"
      loader={loader}
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
            accessorKey: 'id',
            header: 'Nro.',
            enableEditing: false,
            enableHiding: false,
          },
          {
            accessorKey: 'title_es',
            header: 'Title',
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
        /* EXPORT */
        enableExport
        filename="Roles"
        /* ACTIONS */
        actions={['edit', 'disable', 'delete']}
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
          <ButtonCustom text="Agregar" onClick={() => setShowAddRole(true)} />
        }
      />
      <DialogAddRole
        open={showAddRole}
        setOpen={setShowAddRole}
        onDismiss={loadRoles}
        setIsSessionExpired={setIsSessionExpired}
      />
    </PageLayout>
  )
}
