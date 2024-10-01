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
          <TextCustom text={name} className="text-sm sm:text-lg" />
          {required && (
            <TextCustom text="*" className="ml-1 text-danger font-bold" />
          )}
        </div>
      </div>
    )
  } else {
    return null
  }
}
