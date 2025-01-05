import { useEffect, useState } from 'react'
import {
  BadgePoint,
  ButtonCustom,
  IAlert,
  IModalAlert,
  PageLayout,
  SwitchCustom,
  TableCustom,
  TextCustom,
  TextInputCustom,
} from '@components'
import { useCustomFetch } from '@hooks'
import { apiGetUser, apiUpdateUser, apiRemoveRole } from '@services'
import { useParams } from 'react-router-dom'
import { Divider } from '@mui/material'
import { DialogAssignRole } from './DialogAssignRole'

export const UserPage = () => {
  const { customFetch } = useCustomFetch()
  const { userId } = useParams()
  const [alert, setAlert] = useState({} as IAlert)
  const [modalAlert, setModalAlert] = useState({} as IModalAlert)
  const [loader, setLoader] = useState(false)
  const [isSessionExpired, setIsSessionExpired] = useState(false)
  const [showRole, setShowRole] = useState(false)
  // User
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [state, setState] = useState(false)
  const [assignedRoles, setAssignedRoles] = useState([])
  const [availableRoles, setAvailableRoles] = useState([])

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = async () => {
    setLoader(true)
    const response = await customFetch(apiGetUser, { params: { userId } })
    const { success, statusCode, message, data } = response
    if (success) {
      setFirstName(data?.user.firstName)
      setLastName(data?.user.lastName)
      setEmail(data?.user.email)
      setState(data?.user.state)
      setAssignedRoles(data?.roles.assignedRoles)
      setAvailableRoles(data?.roles.availableRoles)
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

  const handleEditUser = async () => {
    setLoader(true)
    const response = await customFetch(apiUpdateUser, {
      params: { userId },
      body: { firstName, lastName, email, state },
    })
    const { success, statusCode, message } = response
    if (success) {
      setAlert({
        open: true,
        title: 'Exitoso',
        description: message,
        severity: 'success',
      })
      loadUser()
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

  const handleRemoveRole = async (roleId: string) => {
    setLoader(true)
    const response = await customFetch(apiRemoveRole, {
      params: { userId },
      body: { roleId },
    })
    const { success, statusCode, message } = response
    if (success) {
      setAlert({
        open: true,
        title: 'Exitoso',
        description: message,
        severity: 'success',
      })
      loadUser()
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
      loader={loader}
      alert={alert}
      setAlert={setAlert}
      modalAlert={modalAlert}
      setModalAlert={setModalAlert}
      isSessionExpired={isSessionExpired}
      setIsSessionExpired={setIsSessionExpired}
    >
      <div className="flex flex-col gap-4">
        <TextCustom
          text="Información básica"
          className="text-xl font-semibold"
        />
        <Divider />
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
        <div className="flex gap-4 flex-col sm:flex-row">
          <TextInputCustom
            name="Correo Electrónico:"
            value={email}
            setValue={setEmail}
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
        <ButtonCustom
          text="Guardar"
          onClick={handleEditUser}
          color="success"
          className="self-auto sm:self-end"
        />
      </div>
      <div className="mt-8">
        <TextCustom text="Roles" className="text-xl font-semibold" />
        <Divider />
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
          data={assignedRoles}
          /* STATE */
          identifierName="id"
          initialState={{ columnVisibility: { id: false } }}
          /* ACTIONS */
          actions={['delete']}
          onAction={(_action, id, obj) =>
            setModalAlert({
              open: true,
              title: '¿Está seguro que desea removerlo?',
              description: `Remover el rol "${obj.name}".`,
              severity: 'error',
              action: () => handleRemoveRole(id),
            })
          }
          positionActionsColumn="last"
          /* TOOLBAR */
          enableTopToolbar
          /* RENDERS */
          customToolbar={
            <ButtonCustom
              text="Asignar rol"
              onClick={() => setShowRole(true)}
            />
          }
        />
      </div>
      <DialogAssignRole
        open={showRole}
        setOpen={setShowRole}
        setIsSessionExpired={setIsSessionExpired}
        onDismiss={loadUser}
        userId={userId}
        roles={availableRoles}
      />
    </PageLayout>
  )
}
