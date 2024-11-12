import { useEffect, useState } from 'react'
import { CarruselCore, LinkCustom, TabsCustom, TextCustom } from '@components'
import { COLORS } from '@common'
import { useColorScheme } from '@mui/material'
import { RecoveryAcconutStepOne } from './RecoveryAcconutStepOne'
import { RecoveryAcconutStepTwo } from './RecoveryAcconutStepTwo'
import { RecoveryAcconutStepThree } from './RecoveryAcconutStepThree'
import { RecoveryAcconutStepFour } from './RecoveryAcconutStepFour'

export const RecoveryAcconutPage = () => {
  const { colorScheme: theme } = useColorScheme()
  const [page, setPage] = useState(0)
  const [timeLeft, setTimeLeft] = useState(300)
  const backgroundColor = theme === 'dark' ? COLORS.dark : COLORS.white

  useEffect(() => {
    if (page === 0) {
      setTimeLeft(300)
      return () => null
    } else if (page === 1 || page === 2) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            setPage(0)
            clearInterval(timer)
            return 0
          }
          return prevTime - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    } else {
      return () => null
    }
  }, [page])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return (
    <div
      className="w-screen h-screen flex flex-col gap-8 pt-12 box-border"
      style={{ backgroundColor }}
    >
      <div className="flex flex-col">
        <TextCustom
          text="Recuperación de cuenta"
          className="text-center text-xl font-medium"
        />
        <div className="flex gap-2 self-center">
          <TextCustom
            text="¿Recuerdas tu contraseña?"
            className="text-sm"
            color="textSecondary"
          />
          <LinkCustom
            name="Inicia sesión aquí"
            to="/login"
            className="text-sm"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <TabsCustom
          items={['Enviar OTP', 'Confirmar OTP', 'Actualizar contraseña']}
          value={page}
          setValue={setPage}
          disabled
        />
      </div>
      <CarruselCore pagination={page + 1} isHandlePagination>
        <RecoveryAcconutStepOne nextPage={() => setPage(1)} />
        <RecoveryAcconutStepTwo
          timeLeft={`Tiempo restante: ${formatTime(timeLeft)}`}
          nextPage={() => setPage(2)}
        />
        <RecoveryAcconutStepThree
          timeLeft={`Tiempo restante: ${formatTime(timeLeft)}`}
          nextPage={() => setPage(3)}
        />
        <RecoveryAcconutStepFour />
      </CarruselCore>
    </div>
  )
}
