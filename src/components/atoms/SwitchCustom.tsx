import { FormControlLabelProps, Switch, SwitchProps } from '@mui/material'
import { COLORS, ICOLORS } from '@common'
import { ControlLabelCustom } from '@components'

interface SwitchCustomProps {
  name?: string
  value?: boolean
  setValue?: (value: boolean) => void
  disabled?: boolean
  size?: SwitchProps['size']
  typeColor?: ICOLORS
  align?: FormControlLabelProps['labelPlacement']
}

export const SwitchCustom = ({
  name = '',
  value = false,
  setValue = () => null,
  disabled = false,
  size = 'medium',
  typeColor = 'primary',
  align = 'end',
}: SwitchCustomProps) => {
  const handleChange = () => {
    setValue(!value)
  }

  return (
    <ControlLabelCustom name={name} align={align}>
      <Switch
        checked={value}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
        disabled={disabled}
        size={size}
        sx={{
          '& .MuiSwitch-switchBase.Mui-checked': {
            color: COLORS[typeColor],
            '&:hover': { backgroundColor: `${COLORS[typeColor]}2F` },
          },
          '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: COLORS[typeColor],
          },
        }}
      />
    </ControlLabelCustom>
  )
}
