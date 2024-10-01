import { FormControlLabel, FormControlLabelProps } from '@mui/material'

interface ControlLabelCustomProps {
  name: string
  value?: FormControlLabelProps['value']
  children: FormControlLabelProps['control']
  align?: FormControlLabelProps['labelPlacement']
  className?: string
}

export const ControlLabelCustom = ({
  name = '',
  value = undefined,
  children,
  align = 'end',
  className = '',
}: ControlLabelCustomProps) => {
  return (
    <FormControlLabel
      value={value}
      control={children}
      label={name}
      labelPlacement={align}
      className={className}
      sx={{
        '&.MuiFormControlLabel-root': { margin: 0 },
        '& .MuiFormControlLabel-label': { fontFamily: 'Poppins' },
      }}
    />
  )
}
