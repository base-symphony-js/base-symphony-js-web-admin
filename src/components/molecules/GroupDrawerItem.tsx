import { useState } from 'react'
import { DrawerItem } from '@components'
import { Collapse, SvgIconProps } from '@mui/material'

interface GroupDrawerItemProps {
  text: string
  icon: React.ReactElement<SvgIconProps> | null
  children: React.ReactNode
}

export const GroupDrawerItem = ({
  text = '',
  icon = null,
  children,
}: GroupDrawerItemProps) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div>
      <DrawerItem
        text={text}
        onClick={() => setShowMore(!showMore)}
        icon={icon}
        isCollapse
      />
      <Collapse in={showMore} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </div>
  )
}
