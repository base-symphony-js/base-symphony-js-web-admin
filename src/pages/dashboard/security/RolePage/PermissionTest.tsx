import { Box, Tooltip, Typography } from '@mui/material'
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view'
import VisibilityIcon from '@mui/icons-material/Visibility'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

interface IPermission {
  id: number
  parentId: number | null
  name: string
  title_en: string
  title_es: string
  description_en: string
  description_es: string
  children?: IPermission[]
  actions?: IAction[]
}

interface IAction {
  id: number
  name: string
  title_en: string
  title_es: string
  description_en: string
  description_es: string
}

const renderActionIcon = (action: IAction, onlyIcon?: boolean) => {
  if (onlyIcon) {
    switch (action.name) {
      case 'read':
        return <VisibilityIcon fontSize="small" className="text-info" />
      case 'add':
        return <AddIcon fontSize="small" className="text-success" />
      case 'edit':
        return <EditIcon fontSize="small" className="text-warning" />
      case 'delete':
        return <DeleteIcon fontSize="small" className="text-error" />
      default:
        return null
    }
  }
  switch (action.name) {
    case 'read':
      return (
        <Tooltip title={action.description_es} arrow>
          <VisibilityIcon fontSize="small" className="text-info" />
        </Tooltip>
      )
    case 'add':
      return (
        <Tooltip title={action.description_es} arrow>
          <AddIcon fontSize="small" className="text-success" />
        </Tooltip>
      )
    case 'edit':
      return (
        <Tooltip title={action.description_es} arrow>
          <EditIcon fontSize="small" className="text-warning" />
        </Tooltip>
      )
    case 'delete':
      return (
        <Tooltip title={action.description_es} arrow>
          <DeleteIcon fontSize="small" className="text-error" />
        </Tooltip>
      )
    default:
      return null
  }
}

const renderTree = (nodes: IPermission) => {
  const actions = nodes.actions || []
  return (
    <TreeItem
      key={nodes.id}
      itemId={nodes.name}
      label={
        <Box className="flex items-center space-x-2">
          <Tooltip title={nodes.description_es} arrow>
            <span>{nodes.title_es}</span>
          </Tooltip>
          {actions.map(action => (
            <div key={action.id}>{renderActionIcon(action)}</div>
          ))}
        </Box>
      }
    >
      {nodes.children?.map(child => renderTree(child))}
    </TreeItem>
  )
}

interface PermissionTestProps {
  permissions: IPermission[]
  actions: IAction[]
  customPermissions: IPermission[]
  setCustomPermissions: (permissions: IPermission[]) => void
}

export const PermissionTest = ({
  permissions,
  actions,
  customPermissions,
}: PermissionTestProps) => {
  const getAllNodeIds = (nodes: IPermission[]): string[] => {
    let ids: string[] = []
    nodes.forEach(node => {
      ids.push(node.name)
      if (node.children) {
        ids = ids.concat(getAllNodeIds(node.children))
      }
    })
    return ids
  }
  const expandedPermissions = getAllNodeIds(permissions)
  const expandedCustomPermissions = getAllNodeIds(customPermissions)

  return (
    <Box className="flex flex-col gap-4">
      <Box className="w-full">
        <Typography variant="h6" className="mb-4">
          Acciones disponibles
        </Typography>
        <Box className="flex space-x-2">
          {actions.map(action => (
            <Tooltip key={action.id} title={action.description_es} arrow>
              <span className="inline-flex items-center justify-center rounded-full bg-gray-300 text-sm px-4 py-1 cursor-pointer hover:bg-gray-400">
                {renderActionIcon(action, true)}
                {action.title_es}
              </span>
            </Tooltip>
          ))}
        </Box>
      </Box>
      <Box className="flex">
        <Box className="w-1/2">
          <Typography variant="h6" className="mb-4">
            Permisos disponibles
          </Typography>
          <SimpleTreeView
            sx={{ height: 'auto', flexGrow: 1 }}
            expandedItems={expandedPermissions}
            defaultExpandedItems={expandedPermissions}
          >
            {permissions.map(permission => renderTree(permission))}
          </SimpleTreeView>
        </Box>
        <Box className="w-1/2">
          <Typography variant="h6" className="mb-4">
            Permisos del rol
          </Typography>
          <SimpleTreeView
            sx={{ height: 'auto', flexGrow: 1 }}
            expandedItems={expandedCustomPermissions}
            defaultExpandedItems={expandedCustomPermissions}
          >
            {customPermissions.map(permission => renderTree(permission))}
          </SimpleTreeView>
        </Box>
      </Box>
    </Box>
  )
}
