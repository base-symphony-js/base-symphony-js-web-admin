import { FormControlLabelProps, Switch, SwitchProps } from '@mui/material'
import { ControlLabelCustom } from '@components'

interface SwitchCustomProps {
  name?: string
  value?: boolean
  setValue?: (value: boolean) => void
  disabled?: boolean
  size?: SwitchProps['size']
  color?: SwitchProps['color']
  align?: FormControlLabelProps['labelPlacement']
  className?: string
}

export const SwitchCustom = ({
  name = '',
  value = false,
  setValue = () => null,
  disabled = false,
  size = 'medium',
  color = 'primary',
  align = 'end',
  className = '',
}: SwitchCustomProps) => {
  const handleChange = () => {
    setValue(!value)
  }

  return (
    <div className={`flex flex-row ${className}`}>
      <ControlLabelCustom name={name} align={align}>
        <Switch
          color={color}
          checked={value}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
          disabled={disabled}
          size={size}
        />
      </ControlLabelCustom>
    </div>
  )
}
