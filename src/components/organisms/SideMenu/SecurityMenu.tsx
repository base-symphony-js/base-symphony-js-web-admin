import { List } from '@mui/material'
import { DrawerItem, TextCustom } from '@components'
import { SecurityIcon, VerifiedUserIcon } from '@assets'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '@routes'
import ReplyIcon from '@mui/icons-material/Reply'

export const SecurityMenu = ({
  onChange = () => null,
}: {
  onChange: () => void
}) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { DASHBOARD } = ROUTES
  const { SECURITY } = DASHBOARD

  const handleItem = (path: string) => {
    navigate(path)
    onChange()
  }

  return (
    <List className="flex flex-col py-0">
      {/* Main route */}
      <DrawerItem
        text="Regresar a Inicio"
        onClick={() => handleItem(DASHBOARD.path)}
        icon={<ReplyIcon className="text-white" />}
        isSelected={pathname === DASHBOARD.path}
      />
      <TextCustom
        text="MÓDULO DE SEGURIDAD"
        className="text-center text-white text-xs font-medium tracking-widest mt-8"
      />
      <DrawerItem
        text="Gestión de Users"
        onClick={() => handleItem(SECURITY.USERS.path)}
        icon={<SecurityIcon theme="dark" />}
        isSelected={pathname === SECURITY.USERS.path}
      />
      <DrawerItem
        text="Gestión de Roles"
        onClick={() => handleItem(SECURITY.ROLES.path)}
        icon={<VerifiedUserIcon theme="dark" />}
        isSelected={pathname === SECURITY.ROLES.path}
      />
      <DrawerItem
        text="Gestión de Permisos"
        onClick={() => handleItem(SECURITY.PERMISSIONS.path)}
        icon={<VerifiedUserIcon theme="dark" />}
        isSelected={pathname === SECURITY.PERMISSIONS.path}
      />
    </List>
  )
}
