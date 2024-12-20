import { TextCustom } from '@components'

interface TitleInputCustomProps {
  name: string
  required: boolean
}

export const TitleInputCustom = ({
  name = '',
  required = false,
}: TitleInputCustomProps) => {
  if (name) {
    return (
      <div className="flex justify-between items-end">
        <div className="flex">
          <TextCustom text={name} className="text-md" />
          {required && (
            <TextCustom text="*" className="ml-1 text-error font-bold" />
          )}
        </div>
      </div>
    )
  } else {
    return null
  }
}
