import { useLocation, useNavigate } from 'react-router-dom'
import { List } from '@mui/material'
import { DrawerItem, TextCustom } from '@components'
import { ROUTES, canAccess } from '@routes'
import { DEVELOPMENT_BY, VERSION_NUMBER } from '@common'
import { useAppSelector } from '@redux'
import {
  ContentPasteIcon,
  ExtensionIcon,
  GroupsIcon,
  HomeCustomIcon,
  InfoIcon,
  LogoCustomIcon,
  PolicyIcon,
  ScienceIcon,
  SecurityIcon,
  VerifiedUserIcon,
} from '@assets'
import { ModuleMenu } from './ModuleMenu'

interface SideMenuProps {
  onChange: () => void
}

export const SideMenu = ({ onChange = () => null }: SideMenuProps) => {
  const roles = useAppSelector(state => state.auth.roles)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { DASHBOARD } = ROUTES
  const { EXAMPLES, SECURITY, PRIVACY_POLICY, TERMS_AND_CONDITIONS, ABOUT } =
    DASHBOARD

  const handleItem = (path = '') => {
    navigate(path)
    onChange()
  }

  const modules = [
    {
      name: 'Seguridad',
      path: SECURITY.path,
      icon: <SecurityIcon theme="dark" />,
      sections: [
        {
          access: canAccess(roles, 'security', 'users'),
          name: 'Users',
          path: SECURITY.USERS.path,
          icon: <GroupsIcon theme="dark" />,
        },
        {
          access: canAccess(roles, 'security', 'roles'),
          name: 'Roles',
          path: SECURITY.ROLES.path,
          icon: <VerifiedUserIcon theme="dark" />,
        },
        {
          access: canAccess(roles, 'security', 'permissions'),
          name: 'Permisos',
          path: SECURITY.PERMISSIONS.path,
          icon: <VerifiedUserIcon theme="dark" />,
        },
      ],
    },
    {
      name: 'Ejemplos',
      path: EXAMPLES.path,
      icon: <ScienceIcon theme="dark" />,
      sections: [
        {
          access: true,
          name: 'Textos y Colores',
          path: EXAMPLES.TEXT_AND_COLORS.path,
          icon: <ExtensionIcon theme="dark" />,
        },
        {
          access: true,
          name: 'Botones',
          path: EXAMPLES.BUTTONS.path,
          icon: <ExtensionIcon theme="dark" />,
        },
        {
          access: true,
          name: 'Inputs 1',
          path: EXAMPLES.INPUTS_1.path,
          icon: <ExtensionIcon theme="dark" />,
        },
        {
          access: true,
          name: 'Inputs 2',
          path: EXAMPLES.INPUTS_2.path,
          icon: <ExtensionIcon theme="dark" />,
        },
        {
          access: true,
          name: 'Inputs 3',
          path: EXAMPLES.INPUTS_3.path,
          icon: <ExtensionIcon theme="dark" />,
        },
        {
          access: true,
          name: 'Inputs 4',
          path: EXAMPLES.INPUTS_4.path,
          icon: <ExtensionIcon theme="dark" />,
        },
        {
          access: true,
          name: 'Alertas',
          path: EXAMPLES.ALERTS.path,
          icon: <ExtensionIcon theme="dark" />,
        },
        {
          access: true,
          name: 'Animaciones',
          path: EXAMPLES.LOADERS.path,
          icon: <ExtensionIcon theme="dark" />,
        },
        {
          access: true,
          name: 'Ventanas Modales',
          path: EXAMPLES.MODAL_WINDOWS.path,
          icon: <ExtensionIcon theme="dark" />,
        },
        {
          access: true,
          name: 'Tablas',
          path: EXAMPLES.TABLES.path,
          icon: <ExtensionIcon theme="dark" />,
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center text-white my-2 mx-2">
        <LogoCustomIcon className="w-16 h-16" />
      </div>
      <div className="h-full flex flex-col justify-between gap-12 overflow-y-auto mt-2">
        <List className="flex flex-col py-0">
          {/* Main route */}
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
          {modules.map(({ name, path, icon, sections }) => (
            <ModuleMenu
              key={path}
              path={path}
              name={name}
              icon={icon}
              sections={sections}
              pathname={pathname}
              handleItem={handleItem}
            />
          ))}
          <TextCustom
            text="INFORMACIÓN"
            className="text-center text-white text-xs font-medium tracking-widest mt-8"
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
      </div>
      <List className="flex flex-col py-2 items-center">
        <TextCustom
          text={`© 2024 ${DEVELOPMENT_BY}`}
          className="text-white text-xs font-bold text-center"
        />
        <TextCustom
          text="All rights reserved"
          className="text-white text-xs font-bold text-center"
        />
        <TextCustom
          text={`v${VERSION_NUMBER}`}
          className="text-white text-xs italic font-bold"
        />
      </List>
    </div>
  )
}
