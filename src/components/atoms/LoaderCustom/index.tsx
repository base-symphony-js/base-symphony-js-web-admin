import { useEffect, useRef } from 'react'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import {
  DeliveryAnimation,
  LoaderCircleAnimation,
  LocationAnimation,
} from '@assets'

import './styles.css'

type TypeAnimation = 'delivery' | 'loader' | 'location'

type TypeLoader = 'block' | 'screen' | 'modal'

interface LoaderProps {
  typeAnimation?: TypeAnimation
  loop?: boolean
  size?: string | number
  mode?: TypeLoader
  speed?: number
  pause?: boolean
  setPause?: (value: boolean) => void
  play?: boolean
  setPlay?: (value: boolean) => void
  stop?: boolean
  setStop?: (value: boolean) => void
}

export const LoaderCustom = ({
  typeAnimation = 'loader',
  loop = true,
  size = '3rem',
  mode = 'block',
  speed = 1,
  pause = false,
  setPause = () => null,
  play = true,
  setPlay = () => null,
  stop = false,
  setStop = () => null,
}: LoaderProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null)

  useEffect(() => {
    if (lottieRef.current) lottieRef.current.setSpeed(speed)
  }, [speed])

  useEffect(() => {
    if (pause) {
      if (lottieRef.current) lottieRef.current.pause()
      setPause(false)
    }
  }, [pause, setPause])

  useEffect(() => {
    if (play) {
      if (lottieRef.current) lottieRef.current.play()
      setPlay(false)
    }
  }, [play, setPlay])

  useEffect(() => {
    if (stop) {
      if (lottieRef.current) lottieRef.current.stop()
      setStop(false)
    }
  }, [stop, setStop])

  const renderAnimationData = () => {
    switch (typeAnimation) {
      case 'delivery':
        return DeliveryAnimation
      case 'location':
        return LocationAnimation
      default:
        return LoaderCircleAnimation
    }
  }

  const renderMode = () => {
    if (mode === 'modal') {
      return 'loader-modal'
    } else if (mode === 'screen') {
      return 'loader-screen'
    }
    return ''
  }

  return (
    <div className={renderMode()}>
      <Lottie
        lottieRef={lottieRef}
        animationData={renderAnimationData()}
        loop={loop}
        style={{ width: size, height: size }}
      />
    </div>
  )
}
