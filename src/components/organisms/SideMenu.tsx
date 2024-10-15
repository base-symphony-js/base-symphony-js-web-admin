import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Collapse, List } from '@mui/material'
import { DrawerItem, TextCustom } from '@components'
import { ROUTES } from '@routes'

import { DEVELOPMENT_BY } from '@common'

interface SideMenuProps {
  onChange: () => void
}

export const SideMenu = ({ onChange = () => null }: SideMenuProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { DASHBOARD, HOME, EXAMPLE } = ROUTES

  const handleItem = (path = '') => {
    navigate(path)
    onChange()
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-start items-start text-white h-16 mt-2 mx-2">
        {/* <img src={EternaLogoImage} alt="Logo DJOET" className="ml-4 w-52" /> */}
      </div>
      <div className="h-full flex flex-col justify-between gap-12 overflow-y-auto">
        <List className="flex flex-col py-0">
          {/* Main route */}
          <DrawerItem
            text={HOME.name}
            onClick={() => handleItem(DASHBOARD.path + HOME.path)}
            icon={<HOME.Icon theme="dark" />}
            isSelected={pathname === DASHBOARD.path + HOME.path}
          />

          {/* Protected routes */}
          {DASHBOARD.modules.map(module => (
            <ModuleMenu
              key={module.pathname}
              module={module}
              pathname={pathname}
              basePath={DASHBOARD.path}
              handleItem={handleItem}
            />
          ))}

          {/* Public routes */}
          <ModuleMenu
            module={EXAMPLE}
            pathname={pathname}
            basePath={DASHBOARD.path}
            handleItem={handleItem}
          />
        </List>
      </div>
      <List className="flex flex-col gap-1 py-2 items-center">
        <TextCustom
          text={`© 2024 ${DEVELOPMENT_BY}`}
          className="text-white text-sm font-bold text-center"
        />
        <TextCustom
          text="All rights reserved"
          className="text-white text-sm font-bold text-center"
        />
      </List>
    </div>
  )
}

interface ModuleMenuProps {
  module: any
  pathname: string
  basePath: string
  handleItem: (path: string) => void
}

const ModuleMenu = ({
  module,
  pathname,
  basePath,
  handleItem,
}: ModuleMenuProps) => {
  const [showModule, setShowModule] = useState(false)

  return (
    <div>
      <DrawerItem
        text={module.name}
        onClick={() => setShowModule(!showModule)}
        icon={<module.Icon theme="dark" />}
        isCollapse
        collapse={showModule}
      />
      <Collapse in={showModule} timeout="auto" unmountOnExit>
        {module.sections.map((SECTION: any) => (
          <DrawerItem
            key={SECTION.pathname}
            text={SECTION.name}
            onClick={() => handleItem(basePath + module.path + SECTION.path)}
            icon={<SECTION.Icon theme="dark" />}
            isSelected={pathname === basePath + module.path + SECTION.path}
            className="ml-4"
          />
        ))}
      </Collapse>
    </div>
  )
}
