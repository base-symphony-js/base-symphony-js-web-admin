import { IAlert, PageLayout } from '@components'
import { useCustomFetch } from '@hooks'
import { Typography, Box, Tooltip } from '@mui/material'
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view'
import { apiGetPermissions } from '@services'
import { useEffect, useState } from 'react'

interface IPermission {
  id: number
  parentId: number | null
  name: string
  title_en: string
  title_es: string
  description_en: string
  description_es: string
  children: IPermission[]
}

interface IAction {
  id: number
  name: string
  title_en: string
  title_es: string
  description_en: string
  description_es: string
}

const renderTree = (nodes: IPermission) => (
  <TreeItem
    key={nodes.id}
    itemId={nodes.name}
    label={
      <Tooltip title={nodes.description_es} arrow>
        <span>{nodes.title_es}</span>
      </Tooltip>
    }
  >
    {nodes.children.map(child => renderTree(child))}
  </TreeItem>
)

export const PermissionsPage = () => {
  const { customFetch } = useCustomFetch()
  const [permissions, setPermissions] = useState<IPermission[]>([])
  const [actions, setActions] = useState<IAction[]>([])
  const [isSessionExpired, setIsSessionExpired] = useState(false)
  const [loader, setLoader] = useState(false)
  const [alert, setAlert] = useState({} as IAlert)

  useEffect(() => {
    loadRoles()
  }, [])

  const loadRoles = async () => {
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

  return (
    <PageLayout
      title="Gestión de Permisos"
      loader={loader}
      alert={alert}
      setAlert={setAlert}
      isSessionExpired={isSessionExpired}
      setIsSessionExpired={setIsSessionExpired}
    >
      <Box className="flex">
        <Box className="w-2/3">
          <Typography variant="h6" className="mb-4">
            Permisos
          </Typography>
          <SimpleTreeView sx={{ height: 'auto', flexGrow: 1 }}>
            {permissions.map(permission => renderTree(permission))}
          </SimpleTreeView>
        </Box>
        <Box className="w-1/3 p-4 bg-gray-100">
          <Typography variant="h6" className="mb-4">
            Acciones
          </Typography>
          <ul className="space-y-2">
            {actions.map(action => (
              <Tooltip key={action.id} title={action.description_es} arrow>
                <li className="text-sm text-gray-700">{action.title_es}</li>
              </Tooltip>
            ))}
          </ul>
        </Box>
      </Box>
    </PageLayout>
  )
}
