import { MenuItem } from '@mui/material'
import { COLORS } from '@common'

interface MenuItemCustomProps {
  value: string
  children: React.ReactNode
  disabled?: boolean
}

export const MenuItemCustom = ({
  value = '',
  children = null,
  disabled = false,
  ...rest
}: MenuItemCustomProps) => {
  return (
    <MenuItem
      disabled={disabled}
      value={value}
      className="font-normal"
      sx={{
        '&: hover': {
          backgroundColor: COLORS.optional,
        },
        '&.Mui-selected': {
          backgroundColor: COLORS.primary,
          color: COLORS.white,
        },
        '&.Mui-selected:hover': {
          backgroundColor: COLORS.primary,
          color: COLORS.white,
        },
      }}
      style={{ fontFamily: 'Poppins' }}
      {...rest}
    >
      {children}
    </MenuItem>
  )
}
