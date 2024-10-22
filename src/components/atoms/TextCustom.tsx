import { Typography, TypographyProps } from '@mui/material'

interface TextCustomProps {
  text: string | undefined | null
  variant?: TypographyProps['variant']
  isWrap?: boolean
  whiteSpace?: TypographyProps['whiteSpace']
  className?: string
  color?: TypographyProps['color']
}

export const TextCustom = ({
  text = '',
  variant = 'inherit',
  isWrap = false,
  whiteSpace = undefined,
  className = '',
  color = 'textPrimary',
}: TextCustomProps) => {
  return (
    <Typography
      noWrap={isWrap}
      variant={variant}
      whiteSpace={whiteSpace}
      className={className}
      color={color}
    >
      {text}
    </Typography>
  )
}
