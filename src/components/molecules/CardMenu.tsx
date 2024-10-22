import { TextCustom } from '../atoms'
import { useState } from 'react'

interface CardMenuProps {
  title: string
  icon: React.ReactNode
  onClick: () => void
}

export const CardMenu = ({
  title = '',
  icon,
  onClick = () => null,
}: CardMenuProps) => {
  const [isActive, setIsActive] = useState(false)

  const handleMouseDown = () => {
    setIsActive(true)
  }

  const handleMouseUp = () => {
    setIsActive(false)
  }

  return (
    <div
      className={`min-w-[12rem] w-full h-48 rounded-lg border-solid border border-gray-300 shadow-lg cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105 
                  ${isActive ? 'shadow-xl bg-gray-100' : ''}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsActive(false)}
      onClick={onClick}
    >
      <div className="w-full h-full p-4 flex flex-col items-center justify-between">
        {icon}
        <TextCustom
          text={title}
          className="text-md text-center m-0 font-semibold"
        />
      </div>
    </div>
  )
}
