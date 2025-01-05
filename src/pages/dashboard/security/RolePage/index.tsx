import { formatDate } from '@common'
import {
  ButtonCustom,
  IAlert,
  IModalAlert,
  PageLayout,
  SwitchCustom,
  TextCustom,
  TextInputCustom,
} from '@components'
import { useCustomFetch } from '@hooks'
import { Box, Divider } from '@mui/material'
import { apiGetPermissions, apiGetRole, apiUpdateRole } from '@services'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PermissionTest } from './PermissionTest'

export const RolePage = () => {
  const { customFetch } = useCustomFetch()
  const { roleId } = useParams()
  const [alert, setAlert] = useState({} as IAlert)
  const [modalAlert, setModalAlert] = useState({} as IModalAlert)
  const [loader, setLoader] = useState(false)
  const [isSessionExpired, setIsSessionExpired] = useState(false)
  // Role
  const [type, setType] = useState('')
  const [title_es, setTitle_es] = useState('')
  const [title_en, setTitle_en] = useState('')
  const [description_en, setDescription_en] = useState('')
  const [description_es, setDescription_es] = useState('')
  const [state, setState] = useState(false)
  const [created, setCreated] = useState({
    at: '',
    by: '',
  })
  const [updated, setUpdated] = useState({
    at: '',
    by: '',
  })
  // Permissions
  const [customPermissions, setCustomPermissions] = useState<any[]>([])
  const [permissions, setPermissions] = useState<any[]>([])
  const [actions, setActions] = useState<any[]>([])

  useEffect(() => {
    loadRole()
    loadPermissions()
  }, [])

  const loadPermissions = async () => {
    setLoader(true)
    const response = await customFetch(apiGetPermissions, {})
    const { success, statusCode, message, data } = response
    if (success) {
      setPermissions(data.permissions)
      setActions(data.actions)
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

  const loadRole = async () => {
    setLoader(true)
    const response = await customFetch(apiGetRole, { params: { roleId } })
    const { success, statusCode, message, data } = response
    if (success) {
      setType(data?.role.type)
      setTitle_es(data?.role.title_es)
      setTitle_en(data?.role.title_en)
      setDescription_en(data?.role.description_en)
      setDescription_es(data?.role.description_es)
      setState(data?.role.state)
      setCreated({
        at: data?.role.createdAt,
        by: data?.role.createdBy?.email,
      })
      setUpdated({
        at: data?.role.updatedAt,
        by: data?.role.updatedBy?.email,
      })
      setCustomPermissions(data?.role.CustomPermissions)
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

  const handleEditRole = async () => {
    setLoader(true)
    const response = await customFetch(apiUpdateRole, {
      params: { roleId },
      body: { title_en, title_es, description_en, description_es, state },
    })
    const { success, statusCode, message } = response
    if (success) {
      setAlert({
        open: true,
        title: 'Exitoso',
        description: message,
        severity: 'success',
      })
      loadRole()
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
        <TextCustom text={`Tipo: ${type}`} className="text-xl font-semibold" />
        <Divider />
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
        <div className="flex gap-4 flex-col sm:flex-row">
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
        </div>
        <SwitchCustom
          name="Estado:"
          value={state}
          setValue={setState}
          align="top"
          className="w-full"
        />
        <Box>
          <TextCustom
            text="Información de cambios:"
            className="font-semibold"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <TextCustom text="Creado en:" />
              <TextCustom text={formatDate(created.at)} color="textSecondary" />
            </div>
            <div className="flex flex-col">
              <TextCustom text="Creado por:" />
              <TextCustom
                text={created.by ?? 'El sistema'}
                color="textSecondary"
              />
            </div>
            <div className="flex flex-col">
              <TextCustom text="Actualizado en:" />
              <TextCustom text={formatDate(updated.at)} color="textSecondary" />
            </div>
            <div className="flex flex-col">
              <TextCustom text="Actualizado por:" />
              <TextCustom text={updated.by} color="textSecondary" />
            </div>
          </div>
        </Box>
        <ButtonCustom
          text="Guardar"
          onClick={handleEditRole}
          color="success"
          className="self-auto sm:self-end"
        />
      </div>
      <PermissionTest
        permissions={permissions}
        actions={actions}
        customPermissions={customPermissions}
        setCustomPermissions={setCustomPermissions}
      />
    </PageLayout>
  )
}
