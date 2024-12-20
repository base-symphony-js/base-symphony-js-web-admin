import { Divider } from '@mui/material'
import { PageLayout, TextCustom } from '@components'

export const TextPage = () => {
  return (
    <PageLayout title="Ejemplos de Textos y Colores">
      <div className="px-4 pt-4">
        <TextCustom text="Variantes" className="text-3xl" />
        <Divider />
        <div className="flex flex-col">
          <TextCustom text="Variante h1" variant="h1" />
          <TextCustom text="Variante h2" variant="h2" />
          <TextCustom text="Variante h3" variant="h3" />
          <TextCustom text="Variante h4" variant="h4" />
          <TextCustom text="Variante h5" variant="h5" />
          <TextCustom text="Variante h6" variant="h6" />
        </div>
        <Divider />
      </div>
      <div className="px-4 pt-4">
        <TextCustom text="Tamaños" className="text-3xl" />
        <Divider />
        <div className="flex flex-col">
          <TextCustom text="text-xs" className="text-xs" />
          <TextCustom text="text-sm" className="text-sm" />
          <TextCustom text="text-base" className="text-base" />
          <TextCustom text="text-lg" className="text-lg" />
          <TextCustom text="text-xl" className="text-xl" />
          <TextCustom text="text-2xl" className="text-2xl" />
          <TextCustom text="text-3xl" className="text-3xl" />
          <TextCustom text="text-4xl" className="text-4xl" />
          <TextCustom text="text-5xl" className="text-5xl" />
          <TextCustom text="text-6xl" className="text-6xl" />
          <TextCustom text="text-7xl" className="text-7xl" />
          <TextCustom text="text-8xl" className="text-8xl" />
          <TextCustom text="text-8xl" className="text-8xl" />
          <TextCustom text="text-9xl" className="text-9xl" />
        </div>
        <Divider />
      </div>
      <div className="px-4 pt-4">
        <TextCustom text="Fuentes" className="text-3xl" />
        <Divider />
        <div className="flex flex-col">
          <TextCustom text="Poppins-Light" className="font-light" />
          <TextCustom text="Poppins-Regular" />
          <TextCustom text="Poppins-Medium" className="font-medium" />
          <TextCustom text="Poppins-SemiBold" className="font-semibold" />
          <TextCustom text="Poppins-bold" className="font-bold" />
          <TextCustom text="Poppins-extrabold" className="font-extrabold" />
        </div>
        <Divider />
      </div>
      <div className="px-4 pt-4">
        <TextCustom text="Colores" className="text-3xl" />
        <Divider />
        <div className="flex flex-col">
          <TextCustom text="Texto blanco" className="text-white bg-black" />
          <TextCustom text="Texto negro" className="text-black bg-white" />
          <TextCustom text="Texto general" className="text-general" />
          <TextCustom text="Texto primary" className="text-primary" />
          <TextCustom text="Texto secondary" className="text-secondary" />
          <TextCustom text="Texto optional" className="text-optional" />
          <TextCustom text="Texto gray" className="text-dark-gray" />
          <TextCustom text="Texto light" className="text-light-gray" />
          <TextCustom text="Texto green" className="text-success" />
          <TextCustom text="Texto red" className="text-error" />
          <TextCustom text="Texto orange" className="text-warning" />
          <Divider className="my-2" />
          <TextCustom text="Fondo blanco" className="bg-white text-black" />
          <TextCustom text="Fondo negro" className="bg-black text-white" />
          <TextCustom text="Fondo general" className="bg-general" />
          <TextCustom text="Fondo primary" className="bg-primary" />
          <TextCustom text="Fondo secondary" className="bg-secondary" />
          <TextCustom text="Fondo optional" className="bg-optional" />
          <TextCustom text="Fondo gray" className="bg-dark-gray" />
          <TextCustom text="Fondo light" className="bg-light-gray" />
          <TextCustom text="Fondo green" className="bg-success" />
          <TextCustom text="Fondo red" className="bg-error" />
          <TextCustom text="Fondo orange" className="bg-warning" />
        </div>
        <Divider />
      </div>
    </PageLayout>
  )
}
