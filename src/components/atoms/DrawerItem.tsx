import { ExpandLessIcon, ExpandMoreIcon } from '@assets'
import { ListItem, ListItemIcon, SvgIconProps, Typography } from '@mui/material'

interface DrawerItemProps {
  text: string
  onClick: () => void
  icon: React.ReactElement<SvgIconProps> | null
  isSelected?: boolean
  collapse?: boolean
  isCollapse?: boolean
  className?: string
}

export const DrawerItem = ({
  text = '',
  onClick = () => null,
  icon = null,
  isSelected = false,
  collapse = false,
  isCollapse = false,
  className = '',
}: DrawerItemProps) => {
  return (
    <ListItem
      disablePadding
      onClick={onClick}
      className={`text-white w-full pl-4 pr-2 hover:bg-secondary ${
        isSelected ? 'bg-secondary/70' : ''
      }`}
    >
      <div className="w-full py-3 flex cursor-pointer items-center justify-between gap-2">
        <div className={`flex gap-2 items-center ${className}`}>
          <ListItemIcon sx={{ '&.MuiListItemIcon-root': { minWidth: 'auto' } }}>
            {icon}
          </ListItemIcon>
          <Typography noWrap={false} className="font-light tracking-tight">
            {text}
          </Typography>
        </div>
        {isCollapse ? (
          collapse ? (
            <ExpandLessIcon className="text-white" />
          ) : (
            <ExpandMoreIcon className="text-white" />
          )
        ) : null}
      </div>
    </ListItem>
  )
}
