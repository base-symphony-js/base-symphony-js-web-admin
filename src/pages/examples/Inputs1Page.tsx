import { useState } from 'react'
import { Divider } from '@mui/material'
import { PageLayout, TextCustom, TextInputCustom } from '@components'
import { ReplyIcon, SendIcon } from '@assets'

export const Inputs1Page = () => {
  const [inputDefault, setInputDefault] = useState('')
  const [inputDisabled, setInputDisabled] = useState('')
  const [inputRequired, setInputRequired] = useState('')
  const [inputMultiline, setInputMultiline] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [inputError, setInputError] = useState('')
  const [inputSuccess, setInputSuccess] = useState('')
  const [inputIconAdornament, setInputIconAdornament] = useState('')
  const [inputIconButton, setInputIconButton] = useState('')
  const [inputIconButtonColor, setInputIconButtonColor] = useState('')

  return (
    <PageLayout title="Ejemplos de TextInputs">
      <TextCustom text="Componentes para TextInputs" className="text-6xl" />
      <Divider />
      {/* Variante de TextInputs */}
      <div className="px-4 pt-4">
        <TextCustom text="Variantes de TextInputs" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <TextInputCustom
            value={inputDefault}
            setValue={setInputDefault}
            name="Por defecto"
          />
          <TextInputCustom
            value={inputDisabled}
            setValue={setInputDisabled}
            name="Placeholder"
            placeholder="Ingrese un texto"
          />
          <TextInputCustom
            value={inputDisabled}
            setValue={setInputDisabled}
            name="Deshabilitado"
            disabled
          />
          <TextInputCustom
            value={inputRequired}
            setValue={setInputRequired}
            name="Requerido"
            required
          />
          <TextInputCustom
            value={inputMultiline}
            setValue={setInputMultiline}
            name="Multiline"
            multiline
          />
          <TextInputCustom value={name} setValue={setName} name="Texto" />
          <TextInputCustom
            value={number}
            setValue={setNumber}
            name="Numero"
            type="number"
          />
          <TextInputCustom
            value={email}
            setValue={setEmail}
            name="Email"
            type="email"
          />
          <TextInputCustom
            value={password}
            setValue={setPassword}
            name="Password"
            type="password"
          />
          <TextInputCustom
            value={inputError}
            setValue={setInputError}
            name="Error"
            msgError="Datos no válidos"
          />
          <TextInputCustom
            value={inputSuccess}
            setValue={setInputSuccess}
            name="Exitoso"
            msgError=""
          />
        </div>
        <Divider />
      </div>
      {/* Iconos para TextInputs */}
      <div className="px-4 pt-4">
        <TextCustom text="Iconos para TextInputs" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <TextInputCustom
            name="Iconos de adorno"
            value={inputIconAdornament}
            setValue={setInputIconAdornament}
            startIcon={<ReplyIcon />}
            endIcon={<SendIcon />}
          />
          <TextInputCustom
            name="Iconos de botones"
            value={inputIconButton}
            setValue={setInputIconButton}
            startIcon={<ReplyIcon />}
            startIconMode="button"
            startIconAction={() => setInputIconButton('')}
            endIcon={<SendIcon />}
            endIconMode="button"
            endIconAction={() => setInputIconButton('')}
          />
          <TextInputCustom
            name="Color para iconos de botones"
            value={inputIconButtonColor}
            setValue={setInputIconButtonColor}
            startIcon={<ReplyIcon />}
            startIconMode="button"
            startIconAction={() => setInputIconButton('')}
            startIconTypeColor="success"
            endIcon={<SendIcon />}
            endIconMode="button"
            endIconAction={() => setInputIconButton('')}
            endIconTypeColor="danger"
          />
          <TextCustom
            text="La accion de los botones es limpiar los inputs"
            className="italic"
          />
        </div>
        <Divider />
      </div>
    </PageLayout>
  )
}
