import { IconButton, SvgIconProps } from '@mui/material'
import { COLORS, ICOLORS } from '@common'

interface IconButtonCustomProps {
  onClick?: () => void
  size?: number
  className?: string
  icon: React.ReactElement<SvgIconProps> | null
  disabled?: boolean
  typeColor?: ICOLORS
  typeColorHover?: ICOLORS
}

export const IconButtonCustom = ({
  onClick = () => null,
  size = 32,
  className = '',
  icon = null,
  disabled = false,
  typeColor = 'primary',
  typeColorHover = 'primary',
}: IconButtonCustomProps) => {
  return (
    <IconButton
      color="primary"
      disabled={disabled}
      className={className}
      onClick={onClick}
      sx={{
        width: size * 1.5,
        height: size * 1.5,
        '&:hover, &.Mui-focusVisible': {
          backgroundColor: `${COLORS[typeColor]}0F`,
        },
        '&.MuiButtonBase-root svg': {
          color: `${COLORS[typeColor]}`,
          width: size,
          height: size,
        },
        '&:hover.MuiButtonBase-root svg': {
          color: `${COLORS[typeColorHover]}`,
        },
        color: COLORS[typeColor],
        ':hover': {
          color: `${COLORS[typeColorHover]}`,
        },
      }}
    >
      {icon}
    </IconButton>
  )
}
