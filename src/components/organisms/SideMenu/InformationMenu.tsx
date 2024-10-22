import { List } from '@mui/material'
import { DrawerItem, TextCustom } from '@components'
import { ContentPasteIcon, InfoIcon, PolicyIcon } from '@assets'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '@routes'

export const InformationMenu = ({
  onChange = () => null,
}: {
  onChange: () => void
}) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { DASHBOARD } = ROUTES
  const { PRIVACY_POLICY, TERMS_AND_CONDITIONS, ABOUT } = DASHBOARD

  const handleItem = (path: string) => {
    navigate(path)
    onChange()
  }

  return (
    <List className="flex flex-col py-0">
      <TextCustom
        text="INFORMACIÓN"
        className="text-center text-white text-xs font-medium tracking-widest"
      />
      <DrawerItem
        text="Políticas de privacidad"
        onClick={() => handleItem(PRIVACY_POLICY.path)}
        icon={<PolicyIcon theme="dark" />}
        isSelected={pathname === PRIVACY_POLICY.path}
      />
      <DrawerItem
        text="Térmionos y condiciones"
        onClick={() => handleItem(TERMS_AND_CONDITIONS.path)}
        icon={<ContentPasteIcon theme="dark" />}
        isSelected={pathname === TERMS_AND_CONDITIONS.path}
      />
      <DrawerItem
        text="Acerca de"
        onClick={() => handleItem(ABOUT.path)}
        icon={<InfoIcon theme="dark" />}
        isSelected={pathname === ABOUT.path}
      />
    </List>
  )
}
