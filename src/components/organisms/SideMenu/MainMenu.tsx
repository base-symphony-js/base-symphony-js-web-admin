import { List } from '@mui/material'
import { DrawerItem, TextCustom } from '@components'
import { HomeCustomIcon, ScienceIcon, SecurityIcon } from '@assets'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '@routes'

export const MainMenu = ({
  onChange = () => null,
}: {
  onChange: () => void
}) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { DASHBOARD } = ROUTES
  const { SECURITY, EXAMPLES } = DASHBOARD

  const handleItem = (path: string) => {
    navigate(path)
    onChange()
  }

  return (
    <List className="flex flex-col py-0">
      <TextCustom
        text="MENU PRINCIPAL"
        className="text-center text-white text-xs font-medium tracking-widest"
      />
      <DrawerItem
        text="Inicio"
        onClick={() => handleItem(DASHBOARD.path)}
        icon={<HomeCustomIcon theme="dark" />}
        isSelected={pathname === DASHBOARD.path}
      />
      <DrawerItem
        text="Seguridad"
        onClick={() => handleItem(SECURITY.path)}
        icon={<SecurityIcon theme="dark" />}
        isSelected={pathname === SECURITY.path}
      />
      <DrawerItem
        text="Desarrollo"
        onClick={() => handleItem(EXAMPLES.path)}
        icon={<ScienceIcon theme="dark" />}
        isSelected={pathname === EXAMPLES.path}
      />
    </List>
  )
}
