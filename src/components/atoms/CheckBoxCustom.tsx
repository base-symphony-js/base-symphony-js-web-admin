import { Checkbox, CheckboxProps, FormControlLabelProps } from '@mui/material'
import { COLORS, ICOLORS } from '@common'
import { ControlLabelCustom } from '@components'

interface CheckBoxCustomProps {
  name?: string
  value?: boolean
  setValue?: (value: boolean) => void
  disabled?: boolean
  size?: CheckboxProps['size']
  typeColor?: ICOLORS
  fontSize?: number
  align?: FormControlLabelProps['labelPlacement']
}

export const CheckBoxCustom = ({
  name = '',
  value = false,
  setValue = () => null,
  disabled = false,
  size = 'medium',
  typeColor = 'primary',
  fontSize = undefined,
  align = 'end',
}: CheckBoxCustomProps) => {
  return (
    <ControlLabelCustom name={name} align={align}>
      <Checkbox
        checked={value}
        onChange={e => setValue(e.target.checked)}
        disabled={disabled}
        size={size}
        sx={{
          '&.MuiButtonBase-root': { padding: '4px' },
          '& .MuiSvgIcon-root': { fontSize },
          '&.Mui-checked': { color: COLORS[typeColor] },
          color: COLORS['light-gray'],
        }}
      />
    </ControlLabelCustom>
  )
}
