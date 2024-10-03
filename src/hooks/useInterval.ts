import { useEffect, useRef } from 'react'

export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<any>()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      savedCallback.current()
    }
    if (delay) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    } else {
      return () => null
    }
  }, [delay])
}
