import { COLORS, ICOLORS } from '@common'
import { TextCustom } from '@components'

interface BadgePointProps {
  color: ICOLORS
  text: string
  className?: string
  size?: number
  disabledPoint?: boolean
}

export const BadgePoint = ({
  color = 'primary',
  text = '',
  className = '',
  size = 4,
  disabledPoint = false,
}: BadgePointProps) => {
  return (
    <div
      className={`flex justify-start items-center w-fit px-3 py-1 gap-2 rounded-full ${className}`}
      style={{
        backgroundColor: `${COLORS[color]}2F`,
      }}
    >
      {!disabledPoint && (
        <div
          style={{
            width: size,
            height: size,
            backgroundColor: `${COLORS[color]}`,
            color: `${COLORS[color]}`,
            borderRadius: size,
          }}
        ></div>
      )}
      <TextCustom
        text={text}
        className={`text-${color} text-xs font-medium tracking-tight`}
      />
    </div>
  )
}
