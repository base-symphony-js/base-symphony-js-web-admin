import { Checkbox, CheckboxProps } from '@mui/material'
import { COLORS, ICOLORS } from '@common'

interface CheckBoxCustomProps {
  name: string
  value?: boolean
  setValue?: (value: boolean) => void
  onChange?: (value: boolean) => void
  disabled?: boolean
  size?: CheckboxProps['size']
  typeColor?: ICOLORS
  fontSize?: number
}

export const CheckBoxCustom = ({
  name = '',
  value = false,
  setValue = () => null,
  onChange = () => null,
  disabled = false,
  size = 'medium',
  typeColor = 'primary',
  fontSize = undefined,
}: CheckBoxCustomProps) => {
  const handleChange = (event: any) => {
    setValue(!value)
    onChange(event)
  }

  return (
    <Checkbox
      name={name}
      checked={value}
      onChange={handleChange}
      disabled={disabled}
      size={size}
      sx={{
        '&.MuiButtonBase-root': { padding: '4px' },
        '& .MuiSvgIcon-root': { fontSize },
        '&.Mui-checked': { color: COLORS[typeColor] },
        color: COLORS['light-gray'],
      }}
    />
  )
}
