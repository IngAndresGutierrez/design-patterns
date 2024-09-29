import React, { useState } from "react"

import {
  EmailValidator,
  LengthValidator,
  RequiredValidator,
} from "./FormValidator.tsx"

const FormComponent = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Creamos la cadena de validadores
    const requiredValidator = new RequiredValidator()
    const emailValidator = new EmailValidator()
    const lengthValidator = new LengthValidator(5)

    requiredValidator.setNext(emailValidator).setNext(lengthValidator)

    // Validamos el campo
    const validationError = requiredValidator.validate(email)
    if (validationError) {
      setError(validationError)
    } else {
      setError(null)
      console.log("Form submitted successfully!")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  )
}

export default FormComponent
