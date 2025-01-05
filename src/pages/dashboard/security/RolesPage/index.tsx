import {
  BadgePoint,
  IAlert,
  IModalAlert,
  PageLayout,
  TableCustom,
} from '@components'
import { useCustomFetch } from '@hooks'
import { apiGetRoles } from '@services'
import { useEffect, useState } from 'react'

export const RolesPage = () => {
  const { customFetch } = useCustomFetch()
  const [loader, setLoader] = useState(false)
  const [isSessionExpired, setIsSessionExpired] = useState(false)
  const [alert, setAlert] = useState({} as IAlert)
  const [modalAlert, setModalAlert] = useState({} as IModalAlert)
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
        actions={['view', 'edit', 'disable', 'delete']}
        // onAction={(action, id, obj) => handleActions[action](id, obj)}
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
        /* customToolbar={
          <ButtonCustom text="Agregar" onClick={() => setShowAddUser(true)} />
        } */
      />
      <p>RolesPage</p>
    </PageLayout>
  )
}
