import { UserProfileIcon } from '@assets'

export const ProfileComponent = ({ name = '' }) => {
  return (
    <div className="flex items-center gap-4">
      <span className="text-white text-sm w-36 font-semibold text-end">
        {name}
      </span>
      <UserProfileIcon className="w-10 h-10" />
    </div>
  )
}
