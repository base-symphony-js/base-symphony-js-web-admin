import { FormControlLabelProps, Radio, RadioProps } from '@mui/material'
import { ControlLabelCustom } from '@components'

interface RadioCustomProps {
  name?: string
  option?: string
  value?: boolean
  setValue?: (value: boolean) => void
  disabled?: boolean
  size?: RadioProps['size']
  color?: RadioProps['color']
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
  color = 'primary',
  fontSize = undefined,
  align = 'end',
}: RadioCustomProps) => {
  return (
    <ControlLabelCustom value={option} name={name} align={align}>
      <Radio
        color={color}
        checked={value}
        onChange={e => setValue(e.target.checked)}
        disabled={disabled}
        size={size}
        sx={{ '& .MuiSvgIcon-root': { fontSize } }}
      />
    </ControlLabelCustom>
  )
}
