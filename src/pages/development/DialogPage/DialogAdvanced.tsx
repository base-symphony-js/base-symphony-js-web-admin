import { useState } from 'react'

// Components
import { Divider } from '@mui/material'
import {
  CheckBoxCustom,
  DatePickerCustom,
  RadioGroupCustom,
  SelectCustom,
  TextCustom,
  TextInputCustom,
  DialogCustom,
  IAlert,
  ButtonCustom,
} from '@components'

// Core
import { getLegalDate } from '@common'

// Const
const constGeneros = [
  { id: 'F', label: 'Hombre' },
  { id: 'M', label: 'Mujer' },
  { id: 'T', label: 'Otro' },
]

const constEstadosCiviles = [
  { id: 'Solter@', label: 'Solter@' },
  { id: 'Casad@', label: 'Casad@' },
  { id: 'Divorciad@', label: 'Divorciad@' },
  { id: 'Viud@', label: 'Viudo@' },
]

interface DialogAdvancedProps {
  open: boolean
  setOpen: (value: boolean) => void
}

export const DialogAdvanced = ({
  open = false,
  setOpen = () => null,
}: DialogAdvancedProps) => {
  const [nombres, setNombres] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [confirmContrasena, setConfirmContrasena] = useState('')
  const [fechaNaicmiento, setFechaNaicmiento] = useState<Date | null>(null)
  const [genero, setGenero] = useState('')
  const [estadoCivil, setEstadoCivil] = useState('')
  const [isConfirm, setIsConfirm] = useState(false)
  const [loader, setLoader] = useState(false)
  const [alert, setAlert] = useState({} as IAlert)

  const resetValues = () => {
    setNombres('')
    setApellidos('')
    setCorreo('')
    setContrasena('')
    setConfirmContrasena('')
    setFechaNaicmiento(null)
    setGenero('')
    setEstadoCivil('')
    setIsConfirm(false)
    setLoader(false)
  }

  const handleAccept = () => {
    if (
      !nombres ||
      !apellidos ||
      !correo ||
      !fechaNaicmiento ||
      !contrasena ||
      !confirmContrasena ||
      !genero ||
      !estadoCivil
    ) {
      setAlert({
        open: true,
        title: 'Adevertencia',
        description:
          'Algunos campos están incompletos, debe completarlos primero.',
        severity: 'warning',
      })
    } else {
      setLoader(true)
      setTimeout(() => {
        setLoader(false)
        setOpen(false)
        resetValues()
      }, 2000)
    }
  }

  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Registrar usuario"
      disabledDismiss
      disabledIconClose
      loader={loader}
      alert={alert}
      setAlert={setAlert}
      onDismiss={resetValues}
      dialogActions={
        <ButtonCustom
          text="Guardar"
          color="primary"
          onClick={handleAccept}
          disabled={!isConfirm}
        />
      }
    >
      <div className="flex flex-col relative">
        <TextCustom text="Ingrese sus datos" variant="h5" />
        <div className="flex gap-4">
          <TextInputCustom
            name="Nombres"
            value={nombres}
            setValue={setNombres}
            className="mb-2 w-full"
          />
          <TextInputCustom
            name="Apellidos"
            value={apellidos}
            setValue={setApellidos}
            className="mb-2 w-full"
          />
        </div>
        <div className="flex gap-4">
          <DatePickerCustom
            name="Fecha Nacimiento"
            value={fechaNaicmiento}
            setValue={setFechaNaicmiento}
            maxDate={getLegalDate()}
            className="w-full"
          />
          <TextInputCustom
            name="Correo"
            value={correo}
            setValue={setCorreo}
            className="mb-2 w-full"
            type="email"
          />
        </div>
        <TextInputCustom
          name="Contraseña"
          value={contrasena}
          setValue={setContrasena}
          className="mb-2"
          type="password"
        />
        <TextInputCustom
          name="Confirmar Contraseña"
          value={confirmContrasena}
          setValue={setConfirmContrasena}
          className="mb-2"
          type="password"
        />
        <Divider />
        <RadioGroupCustom
          name="Genero"
          options={constGeneros}
          value={genero}
          setValue={setGenero}
          className="mb-3"
          isRow
        />
        <SelectCustom
          name="Estado Civil"
          options={constEstadosCiviles}
          value={estadoCivil}
          setValue={setEstadoCivil}
          className="mb-2"
        />
        <CheckBoxCustom
          name="Estoy de acuerdo con los terminos"
          value={isConfirm}
          setValue={setIsConfirm}
        />
      </div>
    </DialogCustom>
  )
}
