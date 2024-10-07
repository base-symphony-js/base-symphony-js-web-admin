import { Checkbox, CheckboxProps, FormControlLabelProps } from '@mui/material'
import { ControlLabelCustom } from '@components'

interface CheckBoxCustomProps {
  name?: string
  value?: boolean
  setValue?: (value: boolean) => void
  disabled?: boolean
  size?: CheckboxProps['size']
  color?: CheckboxProps['color']
  fontSize?: number
  align?: FormControlLabelProps['labelPlacement']
}

export const CheckBoxCustom = ({
  name = '',
  value = false,
  setValue = () => null,
  disabled = false,
  size = 'medium',
  color = 'primary',
  fontSize = undefined,
  align = 'end',
}: CheckBoxCustomProps) => {
  return (
    <ControlLabelCustom name={name} align={align}>
      <Checkbox
        color={color}
        checked={value}
        onChange={e => setValue(e.target.checked)}
        disabled={disabled}
        size={size}
        sx={{
          '&.MuiButtonBase-root': { padding: '4px' },
          '& .MuiSvgIcon-root': { fontSize },
        }}
      />
    </ControlLabelCustom>
  )
}
