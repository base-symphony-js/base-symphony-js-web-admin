import { Radio, RadioGroup, RadioProps } from '@mui/material'
import { ControlLabelCustom, TextCustom } from '@components'
import { COLORS, ICOLORS } from '@common'

type RadioOptions = {
  id: string
  label: string
}

interface RadioButtonsCustomProps {
  name?: string
  value: string
  setValue: (value: string) => void
  options: RadioOptions[]
  isRow?: boolean
  disabled?: boolean
  required?: boolean
  msgError?: string
  size?: RadioProps['size']
  typeColor?: ICOLORS
  fontSize?: number
  className?: string
  labelClassName?: string
}

export const RadioButtonsCustom = ({
  name = '',
  value = '',
  setValue = () => null,
  options = [],
  isRow = false,
  disabled = false,
  required = false,
  msgError = '',
  size = undefined,
  typeColor = 'primary',
  fontSize = undefined,
  className = '',
}: RadioButtonsCustomProps) => {
  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  return (
    <div className={`flex flex-col ${className}`}>
      {name && (
        <div className="flex justify-between items-end">
          <div className="flex">
            <TextCustom text={name} className="text-sm sm:text-lg" />
            {required && (
              <TextCustom text="*" className="ml-1 text-danger font-bold" />
            )}
          </div>
        </div>
      )}
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        row={isRow}
        value={value}
        onChange={handleChange}
      >
        {options.map(option => (
          <ControlLabelCustom
            key={option?.id}
            value={option?.id}
            name={option.label}
          >
            <Radio
              disabled={disabled}
              size={size}
              sx={{
                '& .MuiSvgIcon-root': { fontSize },
                '&.Mui-checked': { color: COLORS[typeColor] },
                color: COLORS['light-gray'],
              }}
            />
          </ControlLabelCustom>
        ))}
      </RadioGroup>
      {msgError && (
        <TextCustom
          text={msgError}
          className="text-sm text-danger align-middle ml-1"
        />
      )}
    </div>
  )
}
