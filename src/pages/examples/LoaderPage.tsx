import { useState } from 'react'
import { Divider } from '@mui/material'
import { ButtonCustom, LoaderCustom, PageLayout, TextCustom } from '@components'

export const LoaderPage = () => {
  const [pause, setPause] = useState(false)
  const [play, setPlay] = useState(true)
  const [stop, setStop] = useState(false)

  const handlePausa = () => {
    setPause(true)
  }

  const handlePlay = () => {
    setPlay(true)
  }

  const handleStop = () => {
    setStop(true)
  }

  return (
    <PageLayout title="Ejemplos de Loaders">
      <TextCustom text="Loaders" className="text-6xl" />
      <Divider />
      {/* Data */}
      <div className="px-4 pt-4">
        <TextCustom text="Data" className="text-3xl" />
        <Divider />
        <div className="flex gap-1">
          <LoaderCustom size="8rem" />
          <LoaderCustom size="8rem" typeAnimation="delivery" />
          <LoaderCustom size="8rem" typeAnimation="location" />
        </div>
        <Divider />
      </div>
      {/* Estados */}
      <div className="px-4 pt-4">
        <TextCustom text="Estados" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <TextCustom text="Repetitivo:" />
            <LoaderCustom />
          </div>
          <div className="flex items-center">
            <TextCustom text="Solo una vez:" />
            <LoaderCustom loop={false} />
          </div>
        </div>
        <Divider />
      </div>
      {/* Tamaños */}
      <div className="px-4 pt-4">
        <TextCustom text="Tamaños" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <TextCustom text="32px:" />
            <LoaderCustom size={32} />
          </div>
          <div className="flex items-center">
            <TextCustom text="48px:" />
            <LoaderCustom />
          </div>
          <div className="flex items-center">
            <TextCustom text="64px:" />
            <LoaderCustom size={64} />
          </div>

          <div className="flex items-center">
            <TextCustom text="1rem:" />
            <LoaderCustom size="1rem" />
          </div>
          <div className="flex items-center">
            <TextCustom text="2rem:" />
            <LoaderCustom size="2rem" />
          </div>
          <div className="flex items-center">
            <TextCustom text="3rem:" />
            <LoaderCustom />
            <TextCustom text="por defecto" className="text-danger" />
          </div>
          <div className="flex items-center">
            <TextCustom text="4rem:" />
            <LoaderCustom size="4rem" />
          </div>
        </div>
        <Divider />
      </div>
      {/* Velocidades */}
      <div className="px-4 pt-4">
        <TextCustom text="Velocidades" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <TextCustom text="x0.5:" />
            <LoaderCustom speed={0.5} />
          </div>
          <div className="flex items-center">
            <TextCustom text="x1:" />
            <LoaderCustom speed={1} />
            <TextCustom text="por defecto" className="text-danger" />
          </div>
          <div className="flex items-center">
            <TextCustom text="x2:" />
            <LoaderCustom speed={2} />
          </div>
          <div className="flex items-center">
            <TextCustom text="x3:" />
            <LoaderCustom speed={3} />
          </div>
        </div>
        <Divider />
      </div>
      {/* Modos */}
      <div className="px-4 pt-4">
        <TextCustom text="Modos" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <TextCustom text="Modo bloque por defecto:" />
          <div className="flex flex-col w-full h-40">
            <TextCustom text="Texto de prueba" />
            <LoaderCustom />
            <TextCustom text="Texto de prueba" />
            <TextCustom text="Texto de prueba" />
            <TextCustom text="Texto de prueba" />
          </div>
          <TextCustom text="Modo modal:" />
          <div className="flex flex-col w-full h-40 relative">
            <TextCustom text="Texto de prueba" />
            <TextCustom text="Texto de prueba" />
            <TextCustom text="Texto de prueba" />
            <TextCustom text="Texto de prueba" />
            <TextCustom text="Texto de prueba" />
            <TextCustom text="Texto de prueba" />
            <LoaderCustom mode="modal" />
          </div>
          <div>
            <TextCustom text="Nota: " className="font-bold" />
            <TextCustom
              text="El modo modal del loader se superpone sobre el div con posición relativa. Se establece en el centro del div y lo cubre con un fondo opaco."
              className="italic"
            />
          </div>
        </div>
        <Divider />
      </div>
      {/* Eventos */}
      <div className="px-4 pt-4">
        <TextCustom text="Eventos" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <ButtonCustom text="Pausa" onClick={handlePausa} />
            <ButtonCustom text="Play" onClick={handlePlay} />
            <ButtonCustom text="Stop" onClick={handleStop} />
          </div>
          <LoaderCustom
            pause={pause}
            setPause={setPause}
            play={play}
            setPlay={setPlay}
            stop={stop}
            setStop={setStop}
          />
        </div>
        <Divider />
      </div>
      <div>
        <TextCustom text="Nota: " className="font-bold" />
        <TextCustom
          text="No todas las animaciones se visualizan bien en todas las plataformas como: (web, android y iOS). Es de revisar la documentación oficial de Lottie."
          className="italic"
        />
      </div>
    </PageLayout>
  )
}
