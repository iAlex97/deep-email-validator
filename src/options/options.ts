const defaultOptions: ValidatorOptionsFinal = {
  email: 'name@example.org',
  sender: 'name@example.org',
  validateRegex: true,
  validateMx: true,
  validateTypo: true,
  validateDisposable: true,
  validateSMTP: true,
}

type Options = {
  sender: string
  host?: string
  validateRegex: boolean
  validateMx: boolean
  validateTypo: boolean
  validateDisposable: boolean
  validateSMTP: boolean
}

export type ValidatorOptions = Partial<Options> & { email: string }
type ValidatorOptionsFinal = Options & { email: string }

export function getOptions(
  emailOrOptions: string | ValidatorOptions
): ValidatorOptionsFinal {
  let options: ValidatorOptionsFinal = defaultOptions

  if (typeof emailOrOptions === 'string') {
    options = { ...options, email: emailOrOptions }
  } else {
    options = { ...options, ...emailOrOptions }
  }
  return options
}
