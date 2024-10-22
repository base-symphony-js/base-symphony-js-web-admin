import { useState } from 'react'
import { Collapse, SvgIconProps } from '@mui/material'
import { DrawerItem } from '@components'

interface ModuleMenuProps {
  name: string
  path: string
  icon: React.ReactElement<SvgIconProps> | null
  sections: any
  pathname: string
  handleItem: (path: string) => void
}

export const ModuleMenu = ({
  name,
  path,
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
        isSelected={pathname === path}
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
