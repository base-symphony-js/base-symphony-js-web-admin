import { FormControlLabelProps, Radio, RadioProps } from '@mui/material'
import { COLORS, ICOLORS } from '@common'
import { ControlLabelCustom } from '@components'

interface RadioCustomProps {
  name?: string
  option?: string
  value?: boolean
  setValue?: (value: boolean) => void
  disabled?: boolean
  size?: RadioProps['size']
  typeColor?: ICOLORS
  fontSize?: number
  align?: FormControlLabelProps['labelPlacement']
}

export const RadioCustom = ({
  name = '',
  option = '',
  value = false,
  setValue = () => null,
  disabled = false,
  size = 'medium',
  typeColor = 'primary',
  fontSize = undefined,
  align = 'end',
}: RadioCustomProps) => {
  return (
    <ControlLabelCustom value={option} name={name} align={align}>
      <Radio
        checked={value}
        onChange={e => setValue(e.target.checked)}
        disabled={disabled}
        size={size}
        sx={{
          '& .MuiSvgIcon-root': { fontSize },
          '&.Mui-checked': { color: COLORS[typeColor] },
          color: COLORS['light-gray'],
        }}
      />
    </ControlLabelCustom>
  )
}
