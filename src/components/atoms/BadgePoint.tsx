import { COLORS, ICOLORS } from '@common'
import { TextCustom } from '@components'

interface BadgePointProps {
  typeColor: ICOLORS
  text: string
  className?: string
  size?: number
  disabledPoint?: boolean
}

export const BadgePoint = ({
  typeColor = 'primary',
  text = '',
  className = '',
  size = 4,
  disabledPoint = false,
}: BadgePointProps) => {
  return (
    <div
      className={`flex justify-start items-center w-fit px-3 py-1 gap-2 rounded-full ${className}`}
      style={{
        backgroundColor: `${COLORS[typeColor]}2F`,
      }}
    >
      {!disabledPoint && (
        <div
          style={{
            width: size,
            height: size,
            backgroundColor: `${COLORS[typeColor]}`,
            color: `${COLORS[typeColor]}`,
            borderRadius: size,
          }}
        ></div>
      )}
      <TextCustom
        text={text}
        className={`text-${typeColor} text-xs font-medium tracking-tight`}
      />
    </div>
  )
}
