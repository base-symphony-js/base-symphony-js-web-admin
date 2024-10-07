import { memo, useEffect, useRef, useState } from 'react'
import { useInterval } from '@hooks'
import { IconButtonCustom } from '@components'
import { KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from '@assets'

interface CarruselCoreProps {
  height: number
  children: any
  auto: boolean
  speed: number
  isPagination: boolean
  pagination: number
  isHandlePagination: boolean
}

const Component = ({
  height = 300,
  children,
  auto = false,
  speed = 3000,
  isPagination = false,
  pagination = 1,
  isHandlePagination = false,
}: CarruselCoreProps) => {
  const ref = useRef<any>()
  const [position, setPosition] = useState(1)
  const [length] = useState(children?.length + 1)
  const [percent] = useState(100 / length)
  const [isMouseOver, setIsMouseOver] = useState(false)

  useEffect(() => {
    if (isHandlePagination) {
      handleChangePosition(pagination)
    }
  }, [pagination, isHandlePagination])

  const moveToRight = () => {
    const currentPer = -position * percent
    const movePer = position < length - 1 ? currentPer - percent : currentPer
    if (position === length - 1) {
      ref.current.style.transition = 'none'
      ref.current.style.transform = `translateX(${0}%)`
      setTimeout(() => {
        ref.current.style.transition = 'all 0.3s ease-in'
        ref.current.style.transform = `translateX(-${percent}%)`
      }, 50)
    } else {
      ref.current.style.transition = 'all 0.3s ease-in'
      ref.current.style.transform = `translateX(${movePer}%)`
    }
    setPosition(position < length - 1 ? position + 1 : 1)
  }

  const moveToLeft = () => {
    const currentPer = -position * percent
    const movePer = position !== 0 ? currentPer + percent : currentPer
    if (position === 1) {
      ref.current.style.transition = 'all 0.3s ease-in'
      ref.current.style.transform = `translateX(${movePer}%)`
      setTimeout(() => {
        ref.current.style.transition = 'none'
        ref.current.style.transform = `translateX(-${percent * (length - 1)}%)`
      }, 300)
    } else {
      ref.current.style.transition = 'all 0.3s ease-in'
      ref.current.style.transform = `translateX(${movePer}%)`
    }
    setPosition(position !== 1 ? position - 1 : length - 1)
  }

  const handleChangePosition = (newPosition = 1) => {
    setPosition(newPosition)
    ref.current.style.transition = 'all 0.3s ease-in'
    ref.current.style.transform = `translateX(-${percent * newPosition}%)`
  }

  useInterval(
    () => {
      if (auto) moveToRight()
    },
    !isMouseOver ? speed : null,
  )

  return (
    <div
      className="flex flex-col w-full h-full relative"
      onMouseLeave={() => {
        setIsMouseOver(false)
      }}
      onMouseOver={() => {
        setIsMouseOver(true)
      }}
    >
      <div
        data-height={height}
        data-length={length}
        data-percent={percent}
        className="w-full h-full overflow-hidden"
      >
        <div
          ref={ref}
          style={{
            width: length * 100 + '%',
            fontSize: 20,
            transition: 'all 0.3s ease-in',
            display: 'flex',
            transform: `translateX(-${percent}%)`,
            height: '100%',
          }}
        >
          {children[children.length - 1]}
          {children}
        </div>
      </div>
      {isPagination && (
        <div
          className="flex absolute bottom-6 left-4 items-center"
          style={{ zIndex: 999 }}
        >
          <IconButtonCustom
            icon={<KeyboardArrowLeftIcon theme="dark" />}
            onClick={moveToLeft}
          />
          <div>
            {children.map((_chil: any, index: number) => (
              <IconButtonCustom
                key={index}
                icon={
                  <div
                    className={`w-2 h-2 rounded-xl ${position === index + 1 ? 'bg-primary' : 'bg-light-gray'}`}
                  ></div>
                }
                onClick={() => handleChangePosition(index + 1)}
                size={24}
              />
            ))}
          </div>
          <IconButtonCustom
            icon={<KeyboardArrowRightIcon theme="dark" />}
            onClick={moveToRight}
          />
        </div>
      )}
    </div>
  )
}

export const CarruselCore = memo(Component)
