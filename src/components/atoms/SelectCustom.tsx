import { memo } from 'react'
import { MenuItem, Select, SelectProps } from '@mui/material'
import { TextCustom, TitleInputCustom } from '@components'

type SelectOptions = {
  id: string
  label: string
}

interface SelectCustomProps {
  name?: string
  placeholder?: string
  options: SelectOptions[]
  value: string
  setValue: (value: string) => void
  onBlur?: () => void
  size?: SelectProps['size']
  msgError?: string | null
  disabled?: boolean
  required?: boolean
  className?: string
}

const Component = ({
  name = '',
  placeholder = '',
  options = [],
  value = '',
  setValue = () => null,
  onBlur = () => null,
  size = 'small',
  msgError = null,
  disabled = false,
  required = false,
  className = '',
}: SelectCustomProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <TitleInputCustom name={name} required={required} />
      <Select
        labelId="demo-simple-select-label"
        value={value}
        displayEmpty
        onChange={e => setValue(e.target.value)}
        onBlur={onBlur}
        className="w-full"
        size={size}
        disabled={disabled}
        error={msgError ? true : false}
        renderValue={selected =>
          selected.length === 0 ? (
            <em className="text-light-gray not-italic font-poppins">
              {placeholder}
            </em>
          ) : (
            options.find(item => item.id === selected)?.label
          )
        }
      >
        {placeholder && (
          <MenuItem disabled className="font-poppins italic">
            {placeholder}
          </MenuItem>
        )}
        {options.map(option => (
          <MenuItem
            key={option?.id}
            value={option?.id}
            className="font-poppins"
          >
            {option?.label}
          </MenuItem>
        ))}
      </Select>
      {msgError && (
        <TextCustom text={msgError} className="text-sm text-error ml-1" />
      )}
    </div>
  )
}

export const SelectCustom = memo(Component)
