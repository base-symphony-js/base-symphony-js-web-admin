import { useState } from 'react'
import { Divider } from '@mui/material'
import {
  DatePickerCustom,
  PageLayout,
  SelectCustom,
  TextCustom,
} from '@components'

const constGeneros = [
  { id: 'F', label: 'Hombre' },
  { id: 'M', label: 'Mujer' },
  { id: 'T', label: 'Otro' },
]

export const Inputs3Page = () => {
  const [genero1, setGenero1] = useState('')
  const [genero2, setGenero2] = useState('')
  const [genero3, setGenero3] = useState('')
  const [genero4, setGenero4] = useState('')
  const [genero5, setGenero5] = useState('')
  const [fecha1, setFecha1] = useState<Date | null>(null)
  const [fecha2, setFecha2] = useState<Date | null>(null)
  const [fecha3, setFecha3] = useState<Date | null>(null)
  const [fecha4, setFecha4] = useState<Date | null>(null)
  const [fecha5, setFecha5] = useState<Date | null>(null)
  const [fecha6, setFecha6] = useState<Date | null>(null)
  const [fecha7, setFecha7] = useState<Date | null>(null)

  return (
    <PageLayout title="Ejemplos de Selects y DatePickets">
      {/* Estados */}
      <div className="px-4 pt-4">
        <TextCustom text="Estados" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <SelectCustom
            name="Por defecto"
            options={constGeneros}
            value={genero1}
            setValue={setGenero1}
            placeholder="Seleccione una opción"
          />
          <SelectCustom
            name="Requerido"
            options={constGeneros}
            value={genero2}
            setValue={setGenero2}
            required
          />
          <SelectCustom
            name="Deshabilitado"
            options={constGeneros}
            value={genero3}
            setValue={setGenero3}
            disabled
          />
          <SelectCustom
            name="Error"
            options={constGeneros}
            value={genero4}
            setValue={setGenero4}
            msgError="Selección incorrecta"
          />
          <SelectCustom
            name="Exitoso"
            options={constGeneros}
            value={genero5}
            setValue={setGenero5}
            msgError=""
          />
        </div>
        <Divider />
      </div>
      <TextCustom text="DatePickers" className="text-6xl mt-4" />
      <Divider />
      {/* Estados */}
      <div className="px-4 pt-4">
        <TextCustom text="Estados" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <DatePickerCustom
            name="Por defecto"
            value={fecha1}
            setValue={setFecha1}
          />
          <DatePickerCustom
            name="Requerido"
            value={fecha2}
            setValue={setFecha2}
            required
          />
          <DatePickerCustom
            name="Deshabilitado"
            value={fecha3}
            setValue={setFecha3}
            disabled
          />
          <DatePickerCustom
            name="Error"
            value={fecha4}
            setValue={setFecha4}
            msgError="Fecha no válida"
          />
          <DatePickerCustom
            name="Exitoso"
            value={fecha5}
            setValue={setFecha5}
            msgError=""
          />
        </div>
        <Divider />
      </div>
      {/* Validaciones */}
      <div className="px-4 pt-4">
        <TextCustom text="Validaciones" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <DatePickerCustom
            name="Fecha mínima hoy"
            value={fecha6}
            setValue={setFecha6}
            minDate={new Date()}
          />
          <DatePickerCustom
            name="Fecha máxima hoy"
            value={fecha7}
            setValue={setFecha7}
            maxDate={new Date()}
          />
        </div>
        <Divider />
      </div>
    </PageLayout>
  )
}
