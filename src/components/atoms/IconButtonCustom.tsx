import { IconButton, IconButtonProps, SvgIconProps } from '@mui/material'

interface IconButtonCustomProps {
  onClick?: () => void
  size?: number
  className?: string
  icon: React.ReactElement<SvgIconProps> | null
  disabled?: boolean
  color?: IconButtonProps['color']
}

export const IconButtonCustom = ({
  onClick = () => null,
  size = 32,
  className = '',
  icon = null,
  disabled = false,
  color = 'primary',
}: IconButtonCustomProps) => {
  return (
    <IconButton
      color={color}
      disabled={disabled}
      className={className}
      onClick={onClick}
      sx={{ width: size * 1.5, height: size * 1.5 }}
    >
      {icon}
    </IconButton>
  )
}
