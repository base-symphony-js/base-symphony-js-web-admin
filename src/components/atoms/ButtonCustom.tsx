import { Button, ButtonProps, SvgIconProps } from '@mui/material'
import { COLORS, ICOLORS } from '@common'

interface ButtonCustomProps {
  text: string
  onClick?: () => void
  variant?: ButtonProps['variant']
  className?: string
  startIcon?: React.ReactElement<SvgIconProps> | null
  endIcon?: React.ReactElement<SvgIconProps> | null
  disabled?: boolean
  typeColor?: ICOLORS
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
  typeColor = 'primary',
  textTransform = 'none',
}: ButtonCustomProps) => {
  return (
    <Button
      color="primary"
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
        backgroundColor:
          variant === 'contained' ? COLORS[typeColor] : undefined,
        borderColor:
          variant === 'outlined' || variant === 'text'
            ? COLORS[typeColor]
            : undefined,
        color:
          variant === 'outlined' || variant === 'text'
            ? COLORS[typeColor]
            : undefined,
        ':disabled': {
          color: COLORS['light-gray'],
        },
        borderRadius: '4px',
        fontSize: '12px',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor:
            variant === 'contained'
              ? `${COLORS[typeColor]}CF`
              : variant === 'outlined' || variant === 'text'
                ? `${COLORS[typeColor]}0F`
                : undefined,
          borderColor:
            variant === 'outlined' || variant === 'text'
              ? COLORS[typeColor]
              : undefined,
        },
      }}
      style={{ fontFamily: 'Poppins' }}
    >
      {text}
    </Button>
  )
}
