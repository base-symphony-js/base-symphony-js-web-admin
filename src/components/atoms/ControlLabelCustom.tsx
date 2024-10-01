import { FormControlLabel, FormControlLabelProps } from '@mui/material'
import { COLORS } from '@common'

interface ControlLabelCustomProps {
  value?: FormControlLabelProps['value']
  children: FormControlLabelProps['control'] | undefined
  name: string
  align?: FormControlLabelProps['labelPlacement']
  className?: string
}

export const ControlLabelCustom = ({
  value = undefined,
  children = undefined,
  name = '',
  align = 'end',
  className = '',
}: ControlLabelCustomProps) => {
  return (
    <FormControlLabel
      value={value}
      control={children!}
      label={name}
      labelPlacement={align}
      className={className}
      sx={{
        '&.MuiFormControlLabel-root': { margin: 0 },
        '& .MuiFormControlLabel-label': { fontFamily: 'Poppins' },
        color: COLORS.white,
      }}
    />
  )
}
