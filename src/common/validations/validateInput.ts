import { typeRegex } from './regex'

export type TypeValidation =
  | 'onlyNumber'
  | 'onlyLetters'
  | 'onlyLettersExtend'
  | 'onlyAlphanumeric'
  | 'onlyAlphanumericExtend'
  | 'validateEmail'
  | 'validateEmailDomain'

const {
  regexOnlyNumber,
  regexOnlyLetters,
  regexOnlyLettersExtend,
  regexAlphanumeric,
  regexAlphanumericExtend,
  regexValidateEmail,
  regexValidateEmailDomain,
} = typeRegex

export const validTextInput = (
  value: string,
  type: TypeValidation | undefined,
): boolean => {
  switch (type) {
    case 'onlyNumber':
      return regexOnlyNumber.test(value)
    case 'onlyLetters':
      return regexOnlyLetters.test(value)
    case 'onlyLettersExtend':
      return regexOnlyLettersExtend.test(value)
    case 'onlyAlphanumeric':
      return regexAlphanumeric.test(value)
    case 'onlyAlphanumericExtend':
      return regexAlphanumericExtend.test(value)
    default:
      return true
  }
}

export const validInputEmail = (
  value: string,
  type: TypeValidation | undefined,
): boolean => {
  switch (type) {
    case 'validateEmail':
      return regexValidateEmail.test(value)
    case 'validateEmailDomain':
      return regexValidateEmailDomain.test(value)
    default:
      return true
  }
}
