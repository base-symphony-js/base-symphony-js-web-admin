import { Button, ButtonProps, SvgIconProps } from '@mui/material'

interface ButtonCustomProps {
  text: string
  onClick?: () => void
  variant?: ButtonProps['variant']
  className?: string
  startIcon?: React.ReactElement<SvgIconProps> | null
  endIcon?: React.ReactElement<SvgIconProps> | null
  disabled?: boolean
  color?: ButtonProps['color']
  textTransform?: React.CSSProperties['textTransform']
}

export const ButtonCustom = ({
  text = '',
  onClick = () => null,
  variant = 'contained',
  className = '',
  startIcon = null,
  endIcon = null,
  disabled = false,
  color = 'primary',
  textTransform = 'none',
}: ButtonCustomProps) => {
  return (
    <Button
      color={color}
      size="small"
      variant={variant}
      onClick={onClick}
      className={`font-normal ${className}`}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      sx={{
        '&.MuiButtonBase-root': { height: 28 },
        paddingY: 0,
        paddingX: 3,
        textTransform,
        borderRadius: '4px',
        fontSize: '12px',
        boxShadow: 'none',
      }}
      style={{ fontFamily: 'Poppins' }}
    >
      {text}
    </Button>
  )
}
