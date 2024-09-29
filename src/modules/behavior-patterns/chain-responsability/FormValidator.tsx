interface Validator {
  setNext(validator: Validator): Validator
  validate(value: string): string | null
}

abstract class AbstractValidator implements Validator {
  private nextValidator: Validator | null = null

  setNext(validator: Validator): Validator {
    this.nextValidator = validator
    return validator
  }

  validate(value: string): string | null {
    if (this.nextValidator) {
      return this.nextValidator.validate(value)
    }
    return null
  }
}

class RequiredValidator extends AbstractValidator {
  validate(value: string): string | null {
    if (!value) {
      return "Field is required"
    }
    return super.validate(value)
  }
}

class EmailValidator extends AbstractValidator {
  validate(value: string): string | null {
    const emailRegex = /\S+@\S+\.\S+/
    if (!emailRegex.test(value)) {
      return "Invalid email format"
    }
    return super.validate(value)
  }
}

class LengthValidator extends AbstractValidator {
  constructor(private minLength: number) {
    super()
  }

  validate(value: string): string | null {
    if (value.length < this.minLength) {
      return `Field must be at least ${this.minLength} characters long`
    }
    return super.validate(value)
  }
}

export { RequiredValidator, EmailValidator, LengthValidator }
