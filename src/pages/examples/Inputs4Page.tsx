import { useState } from 'react'
import { Divider } from '@mui/material'
import {
  CheckBoxCustom,
  PageLayout,
  RadioGroupCustom,
  RadioCustom,
  SwitchCustom,
  TextCustom,
} from '@components'

const constGeneros = [
  { id: 'F', label: 'Hombre' },
  { id: 'M', label: 'Mujer' },
  { id: 'T', label: 'Otro' },
]

const constTiposIdentidad = [
  { id: 'indentidad', label: 'Identidad Nacional' },
  { id: 'pasaporte', label: 'Pasaporte' },
]

export const Inputs4Page = () => {
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(true)
  const [check3, setCheck3] = useState(false)
  const [check4, setCheck4] = useState(true)
  const [radio1, setRadio1] = useState(false)
  const [radio2, setRadio2] = useState(true)
  const [radio3, setRadio3] = useState(false)
  const [radio4, setRadio4] = useState(true)
  const [genero, setGenero] = useState('')
  const [tipoIdentidad, setTipoIdentidad] = useState('')
  const [switch1, setSwitch1] = useState(false)
  const [switch2, setSwitch2] = useState(true)
  const [switch3, setSwitch3] = useState(false)
  const [switch4, setSwitch4] = useState(true)

  return (
    <PageLayout title="Ejemplos de Checkbox, RadioButtons y Switchs">
      <TextCustom text="CheckBox" className="text-6xl" />
      <Divider />
      {/* Estados */}
      <div className="px-4 pt-4">
        <TextCustom text="Estados" className="text-3xl" />
        <Divider />
        <div className="flex flex-row gap-1">
          <CheckBoxCustom value={check1} setValue={setCheck1} />
          <CheckBoxCustom value={check2} setValue={setCheck2} />
          <CheckBoxCustom value={check3} setValue={setCheck3} disabled />
          <CheckBoxCustom value={check4} setValue={setCheck4} disabled />
        </div>
        <Divider />
      </div>
      {/* Tamaños */}
      <div className="px-4 pt-4">
        <TextCustom text="Tamaños" className="text-3xl" />
        <Divider />
        <div className="flex flex-row items-center gap-1">
          <CheckBoxCustom value size="small" />
          <CheckBoxCustom value />
          <CheckBoxCustom value fontSize={10} />
          <CheckBoxCustom value fontSize={20} />
          <CheckBoxCustom value fontSize={30} />
          <CheckBoxCustom value fontSize={40} />
        </div>
        <Divider />
      </div>
      {/* Colores */}
      <div className="px-4 pt-4">
        <TextCustom text="Colores" className="text-3xl" />
        <Divider />
        <div className="flex flex-row items-center gap-1">
          <CheckBoxCustom value />
          <CheckBoxCustom />
          <CheckBoxCustom value typeColor="primary" />
          <CheckBoxCustom typeColor="primary" />
          <CheckBoxCustom value typeColor="secondary" />
          <CheckBoxCustom typeColor="secondary" />
          <CheckBoxCustom value typeColor="success" />
          <CheckBoxCustom typeColor="success" />
          <CheckBoxCustom value typeColor="danger" />
          <CheckBoxCustom typeColor="danger" />
          <CheckBoxCustom value typeColor="warning" />
          <CheckBoxCustom typeColor="warning" />
          <CheckBoxCustom value typeColor="dark-gray" />
          <CheckBoxCustom typeColor="dark-gray" />
        </div>
        <Divider />
      </div>
      {/* Etiquetas */}
      <div className="px-4 pt-4">
        <TextCustom text="Etiquetas" className="text-3xl" />
        <Divider />
        <div className="flex flex-row items-center gap-1">
          <CheckBoxCustom value name="Default" />
          <CheckBoxCustom value name="Top" align="top" />
          <CheckBoxCustom value name="Start" align="start" />
          <CheckBoxCustom value name="Bottom" align="bottom" />
          <CheckBoxCustom value name="End" align="end" />
        </div>
        <Divider />
      </div>
      <Divider />
      <TextCustom text="RadioButtons" className="text-6xl mt-4" />
      <Divider />
      {/* Estados */}
      <div className="px-4 pt-4">
        <TextCustom text="Estados" className="text-3xl" />
        <Divider />
        <div className="flex flex-row gap-1">
          <RadioCustom value={radio1} setValue={setRadio1} />
          <RadioCustom value={radio2} setValue={setRadio2} />
          <RadioCustom value={radio3} setValue={setRadio3} disabled />
          <RadioCustom value={radio4} setValue={setRadio4} disabled />
        </div>
        <Divider />
      </div>
      {/* Tamaños */}
      <div className="px-4 pt-4">
        <TextCustom text="Tamaños" className="text-3xl" />
        <Divider />
        <div className="flex flex-row items-center gap-1">
          <RadioCustom value size="small" />
          <RadioCustom value />
          <RadioCustom value fontSize={10} />
          <RadioCustom value fontSize={20} />
          <RadioCustom value fontSize={30} />
          <RadioCustom value fontSize={40} />
        </div>
        <Divider />
      </div>
      {/* Colores */}
      <div className="px-4 pt-4">
        <TextCustom text="Colores" className="text-3xl" />
        <Divider />
        <div className="flex flex-row items-center gap-1">
          <RadioCustom value />
          <RadioCustom />
          <RadioCustom value typeColor="primary" />
          <RadioCustom typeColor="primary" />
          <RadioCustom value typeColor="secondary" />
          <RadioCustom typeColor="secondary" />
          <RadioCustom value typeColor="success" />
          <RadioCustom typeColor="success" />
          <RadioCustom value typeColor="danger" />
          <RadioCustom typeColor="danger" />
          <RadioCustom value typeColor="warning" />
          <RadioCustom typeColor="warning" />
          <RadioCustom value typeColor="dark-gray" />
          <RadioCustom typeColor="dark-gray" />
        </div>
        <Divider />
      </div>
      {/* Etiquetas */}
      <div className="px-4 pt-4">
        <TextCustom text="Etiquetas" className="text-3xl" />
        <Divider />
        <div className="flex flex-row items-center gap-1">
          <RadioCustom value name="Default" />
          <RadioCustom value name="Top" align="top" />
          <RadioCustom value name="Start" align="start" />
          <RadioCustom value name="Bottom" align="bottom" />
          <RadioCustom value name="End" align="end" />
        </div>
        <Divider />
      </div>
      {/* Etiquetas */}
      <div className="px-4 pt-4">
        <TextCustom text="Grupo de Radio Botones" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <RadioGroupCustom
            name="Elija su genero"
            options={constGeneros}
            value={genero}
            setValue={setGenero}
            className="mb-3"
          />
          <RadioGroupCustom
            name="Elija su tipo de identidad"
            options={constTiposIdentidad}
            value={tipoIdentidad}
            setValue={setTipoIdentidad}
            isRow
          />
        </div>
        <Divider />
      </div>
      <TextCustom text="Switchs" className="text-6xl mt-4" />
      <Divider />
      {/* Estados */}
      <div className="px-4 pt-4">
        <TextCustom text="Estados" className="text-3xl" />
        <Divider />
        <div className="flex flex-row gap-1">
          <SwitchCustom value={switch1} setValue={setSwitch1} />
          <SwitchCustom value={switch2} setValue={setSwitch2} />
          <SwitchCustom value={switch3} setValue={setSwitch3} disabled />
          <SwitchCustom value={switch4} setValue={setSwitch4} disabled />
        </div>
        <Divider />
      </div>
      {/* Tamaños */}
      <div className="px-4 pt-4">
        <TextCustom text="Tamaños" className="text-3xl" />
        <Divider />
        <div className="flex flex-row items-center gap-1">
          <SwitchCustom value size="small" />
          <SwitchCustom value />
        </div>
        <Divider />
      </div>
      {/* Colores */}
      <div className="px-4 pt-4">
        <TextCustom text="Colores" className="text-3xl" />
        <Divider />
        <div className="flex flex-row items-center gap-1">
          <div className="flex flex-col">
            <SwitchCustom value />
            <SwitchCustom />
          </div>
          <div className="flex flex-col">
            <SwitchCustom value typeColor="primary" />
            <SwitchCustom typeColor="primary" />
          </div>
          <div className="flex flex-col">
            <SwitchCustom value typeColor="secondary" />
            <SwitchCustom typeColor="secondary" />
          </div>
          <div className="flex flex-col">
            <SwitchCustom value typeColor="success" />
            <SwitchCustom typeColor="success" />
          </div>
          <div className="flex flex-col">
            <SwitchCustom value typeColor="danger" />
            <SwitchCustom typeColor="danger" />
          </div>
          <div className="flex flex-col">
            <SwitchCustom value typeColor="warning" />
            <SwitchCustom typeColor="warning" />
          </div>
          <div className="flex flex-col">
            <SwitchCustom value typeColor="dark-gray" />
            <SwitchCustom typeColor="dark-gray" />
          </div>
        </div>
        <Divider />
      </div>
      {/* Etiquetas */}
      <div className="px-4 pt-4">
        <TextCustom text="Etiquetas" className="text-3xl" />
        <Divider />
        <div className="flex flex-row items-center gap-1">
          <SwitchCustom value name="Default" />
          <SwitchCustom value name="Top" align="top" />
          <SwitchCustom value name="Start" align="start" />
          <SwitchCustom value name="Bottom" align="bottom" />
          <SwitchCustom value name="End" align="end" />
        </div>
        <Divider />
      </div>
    </PageLayout>
  )
}
