import { useState } from 'react'
import { Divider } from '@mui/material'
import { PageLayout, TextCustom, TextInputCustom } from '@components'
import { validInputEmail } from '@common'

export const Inputs2Page = () => {
  const [inputDefault, setInputDefault] = useState('')
  const [iOnlyNumbers, setIOnlyNumbers] = useState('')
  const [iOnlyLetters, setIOnlyLetters] = useState('')
  const [iOnlyLettersExtend, setIOnlyLettersExtend] = useState('')
  const [iOnlyAlphanumeric, setIOnlyAlphanumeric] = useState('')
  const [iOnlyAlphanumericExtend, setIOnlyAlphanumericExtend] = useState('')
  const [iMaxLength, setIMaxLength] = useState('')
  const [email, setEmail] = useState('')
  const [emailMsgError, setEmailMsgError] = useState('')
  const [emailDomain, setEmailDomain] = useState('')
  const [emailDomainMsgError, setEmailDomainMsgError] = useState('')

  const handleValidEmail = () => {
    if (email) {
      const isValid = validInputEmail(email, 'validateEmail')
      if (isValid) {
        setEmailMsgError('')
      } else {
        setEmailMsgError('Correo no válido')
      }
    } else {
      setEmailMsgError('')
    }
  }

  const handleValidEmailDomain = () => {
    if (emailDomain) {
      const isValid = validInputEmail(emailDomain, 'validateEmailDomain')
      if (isValid) {
        setEmailDomainMsgError('')
      } else {
        setEmailDomainMsgError('Correo no válido')
      }
    } else {
      setEmailDomainMsgError('')
    }
  }

  return (
    <PageLayout title="Ejemplos de TextInputs con Validaciones">
      <TextCustom text="Validaciones para TextInputs" className="text-6xl" />
      <Divider />
      {/* Validaciones de TextInputs */}
      <div className="px-4 pt-4">
        <TextCustom text="Validaciones de escritura" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <TextInputCustom
            value={inputDefault}
            setValue={setInputDefault}
            name="Cualquier caracter"
          />
          <TextInputCustom
            value={iOnlyNumbers}
            setValue={setIOnlyNumbers}
            name="Solo números"
            validation="onlyNumber"
          />
          <TextInputCustom
            value={iOnlyLetters}
            setValue={setIOnlyLetters}
            name="Solo letras"
            validation="onlyLetters"
          />
          <TextInputCustom
            value={iOnlyLettersExtend}
            setValue={setIOnlyLettersExtend}
            name="Solo letras (extendido)"
            validation="onlyLettersExtend"
          />
          <TextInputCustom
            value={iOnlyAlphanumeric}
            setValue={setIOnlyAlphanumeric}
            name="Solo números y letras"
            validation="onlyAlphanumeric"
          />
          <TextInputCustom
            value={iOnlyAlphanumericExtend}
            setValue={setIOnlyAlphanumericExtend}
            name="Solo números y letras (extendido)"
            validation="onlyAlphanumericExtend"
          />
          <TextInputCustom
            value={iMaxLength}
            setValue={setIMaxLength}
            name="MaxLength 10"
            maxLength={10}
          />
        </div>
        <Divider />
      </div>
      {/* Validacion de TextInput de Correo */}
      <div className="px-4 pt-4">
        <TextCustom text="Validacion de correo" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <TextInputCustom
            value={email}
            setValue={setEmail}
            name="Email"
            onBlur={handleValidEmail}
            type="email"
            msgError={emailMsgError}
          />
          <TextInputCustom
            value={emailDomain}
            setValue={setEmailDomain}
            name="Email con Dominio y Extensión"
            onBlur={handleValidEmailDomain}
            type="email"
            msgError={emailDomainMsgError}
          />
          <TextCustom
            text="Solo correos con dominios: yahoo, hotmail, gmail, live, outlook"
            className="italic"
          />
          <TextCustom
            text="Y con extensión: .com, .es y .hn"
            className="italic"
          />
        </div>
        <Divider />
      </div>
    </PageLayout>
  )
}
