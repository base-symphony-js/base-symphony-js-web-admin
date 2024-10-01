import { RadioGroup, RadioProps } from '@mui/material'
import { RadioCustom, TextCustom, TitleInputCustom } from '@components'
import { ICOLORS } from '@common'

type RadioOptions = {
  id: string
  label: string
}

interface RadioGroupCustomProps {
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
  className?: string
  labelClassName?: string
}

export const RadioGroupCustom = ({
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
  className = '',
}: RadioGroupCustomProps) => {
  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  return (
    <div className={`flex flex-col ${className}`}>
      <TitleInputCustom name={name} required={required} />
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        row={isRow}
        value={value}
        onChange={handleChange}
      >
        {options.map(option => (
          <RadioCustom
            key={option.id}
            name={option.label}
            value={option.id === value}
            option={option.id}
            disabled={disabled}
            size={size}
            typeColor={typeColor}
          />
        ))}
      </RadioGroup>
      {msgError && (
        <TextCustom text={msgError} className="text-sm text-danger ml-1" />
      )}
    </div>
  )
}
