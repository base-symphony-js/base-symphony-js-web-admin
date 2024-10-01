import { Switch, SwitchProps } from '@mui/material'
import { TextCustom } from '@components'
import { COLORS, ICOLORS } from '@common'

interface SwitchCustomProps {
  name?: string
  value?: boolean
  setValue?: (value: boolean) => void
  disabled?: boolean
  msgError?: string
  required?: boolean
  size?: SwitchProps['size']
  typeColor?: ICOLORS
  className?: string
}

export const SwitchCustom = ({
  name = '',
  value = false,
  setValue = () => null,
  disabled = false,
  size = 'medium',
  typeColor = 'primary',
  msgError = '',
  required = false,
  className = '',
}: SwitchCustomProps) => {
  const handleChange = () => {
    setValue(!value)
  }

  return (
    <div className={`flex flex-col ${className}`}>
      {name && (
        <div className="flex justify-between items-end">
          <div className="flex">
            <TextCustom
              text={name}
              className="text-sm sm:text-lg text-general"
            />
            {required && (
              <TextCustom text="*" className="ml-1 text-danger font-bold" />
            )}
          </div>
        </div>
      )}
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
      {msgError && (
        <TextCustom
          text={msgError}
          className="text-sm text-danger align-middle ml-1"
        />
      )}
    </div>
  )
}
