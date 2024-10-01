import { Typography, TypographyProps } from '@mui/material'

interface TextCustomProps {
  text: string | undefined | null
  variant?: TypographyProps['variant']
  isWrap?: boolean
  whiteSpace?: TypographyProps['whiteSpace']
  className?: string
}

export const TextCustom = ({
  text = '',
  variant = 'inherit',
  isWrap = false,
  whiteSpace = undefined,
  className = '',
}: TextCustomProps) => {
  return (
    <Typography
      noWrap={isWrap}
      variant={variant}
      whiteSpace={whiteSpace}
      className={className}
      style={{ fontFamily: 'Poppins', color: 'black' }}
    >
      {text}
    </Typography>
  )
}
