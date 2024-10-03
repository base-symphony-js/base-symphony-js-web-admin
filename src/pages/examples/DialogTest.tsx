import { useEffect, useState } from 'react'

// Components
import { Divider } from '@mui/material'
import {
  CheckBoxCustom,
  ControlLabelCustom,
  DatePickerCustom,
  RadioGroupCustom,
  SelectCustom,
  TextCustom,
  TextInputCustom,
  DialogCustom,
  IAlert,
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

interface DialogTestProps {
  open: boolean
  setOpen: (value: boolean) => void
}

export const DialogTest = ({
  open = false,
  setOpen = () => null,
}: DialogTestProps) => {
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
  const [maxDate, setMaxDate] = useState<Date | null>(null)
  const [alert, setAlert] = useState<IAlert>({} as IAlert)

  useEffect(() => {
    if (open) {
      const legalDate = getLegalDate()
      setMaxDate(legalDate)
    } else {
      resetValues()
    }
  }, [open])

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
    setMaxDate(null)
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
      labelAction="Guardar"
      onAction={handleAccept}
      disabledAction={!isConfirm}
      alert={alert}
      setAlert={setAlert}
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
            maxDate={maxDate}
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
        <ControlLabelCustom name={'Estoy de acuerdo con los terminos'}>
          <CheckBoxCustom value={isConfirm} setValue={setIsConfirm} />
        </ControlLabelCustom>
      </div>
    </DialogCustom>
  )
}
