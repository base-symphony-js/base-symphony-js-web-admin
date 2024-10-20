import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Collapse, List, SvgIconProps } from '@mui/material'
import { DrawerItem, TextCustom } from '@components'
import { ROUTES, canAccess } from '@routes'
import { DEVELOPMENT_BY, VERSION_NUMBER } from '@common'
import { useAppSelector } from '@redux'
import {
  ExtensionIcon,
  GroupsIcon,
  HomeCustomIcon,
  ScienceIcon,
  SecurityIcon,
  VerifiedUserIcon,
} from '@assets'

interface SideMenuProps {
  onChange: () => void
}

export const SideMenu = ({ onChange = () => null }: SideMenuProps) => {
  const roles = useAppSelector(state => state.auth.roles)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { EXAMPLES, SECURITY } = ROUTES.DASHBOARD

  const handleItem = (path = '') => {
    navigate(path)
    onChange()
  }

  const modules = [
    {
      name: 'Seguridad',
      path: '/dahsboard/security',
      icon: <SecurityIcon theme="dark" />,
      sections: [
        {
          access: canAccess(roles, 'security', 'users'),
          name: 'Users',
          path: SECURITY.USERS,
          icon: <GroupsIcon theme="dark" />,
        },
        {
          access: canAccess(roles, 'security', 'roles'),
          name: 'Roles',
          path: SECURITY.ROLES,
          icon: <VerifiedUserIcon theme="dark" />,
        },
        {
          access: canAccess(roles, 'security', 'permissions'),
          name: 'Permisos',
          path: SECURITY.PERMISSIONS,
          icon: <VerifiedUserIcon theme="dark" />,
        },
      ],
    },
    {
      name: 'Ejemplos',
      path: '/dahsboard/examples',
      icon: <ScienceIcon theme="dark" />,
      sections: [
        {
          access: true,
          name: 'Textos y Colores',
          path: EXAMPLES.TEXT_AND_COLORS,
          icon: <ExtensionIcon theme="dark" />,
        },
        {
          access: true,
          name: 'Botones',
          path: EXAMPLES.BUTTONS,
          icon: <ExtensionIcon theme="dark" />,
        },
        {
          access: true,
          name: 'Inputs 1',
          path: EXAMPLES.INPUTS_1,
          icon: <ExtensionIcon theme="dark" />,
        },
        {
          access: true,
          name: 'Inputs 2',
          path: EXAMPLES.INPUTS_2,
          icon: <ExtensionIcon theme="dark" />,
        },
        {
          access: true,
          name: 'Inputs 3',
          path: EXAMPLES.INPUTS_3,
          icon: <ExtensionIcon theme="dark" />,
        },
        {
          access: true,
          name: 'Inputs 4',
          path: EXAMPLES.INPUTS_4,
          icon: <ExtensionIcon theme="dark" />,
        },
        {
          access: true,
          name: 'Alertas',
          path: EXAMPLES.ALERTS,
          icon: <ExtensionIcon theme="dark" />,
        },
        {
          access: true,
          name: 'Animaciones',
          path: EXAMPLES.LOADERS,
          icon: <ExtensionIcon theme="dark" />,
        },
        {
          access: true,
          name: 'Ventanas Modales',
          path: EXAMPLES.MODAL_WINDOWS,
          icon: <ExtensionIcon theme="dark" />,
        },
        {
          access: true,
          name: 'Tablas',
          path: EXAMPLES.TABLES,
          icon: <ExtensionIcon theme="dark" />,
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-start items-start text-white h-16 mt-2 mx-2">
        {/* <img src={EternaLogoImage} alt="Logo DJOET" className="ml-4 w-52" /> */}
      </div>
      <div className="h-full flex flex-col justify-between gap-12 overflow-y-auto">
        <List className="flex flex-col py-0">
          {/* Main route */}
          <DrawerItem
            text="Inicio"
            onClick={() => handleItem('/dashboard')}
            icon={<HomeCustomIcon theme="dark" />}
            isSelected={pathname === '/dashboard'}
          />
          {modules.map(({ name, path, icon, sections }) => (
            <ModuleMenu
              key={path}
              name={name}
              icon={icon}
              sections={sections}
              pathname={pathname}
              handleItem={handleItem}
            />
          ))}
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

interface ModuleMenuProps {
  name: string
  icon: React.ReactElement<SvgIconProps> | null
  sections: any
  pathname: string
  handleItem: (path: string) => void
}

const ModuleMenu = ({
  name,
  icon,
  sections,
  pathname,
  handleItem,
}: ModuleMenuProps) => {
  const [showModule, setShowModule] = useState(false)

  return (
    <div>
      <DrawerItem
        text={name}
        onClick={() => setShowModule(!showModule)}
        icon={icon}
        isCollapse
        collapse={showModule}
      />
      <Collapse in={showModule} timeout="auto" unmountOnExit>
        {sections.map(
          ({ access, name, path, icon }: any) =>
            access && (
              <DrawerItem
                key={path}
                text={name}
                onClick={() => handleItem(path)}
                icon={icon}
                isSelected={pathname === path}
                className="ml-4"
              />
            ),
        )}
      </Collapse>
    </div>
  )
}
