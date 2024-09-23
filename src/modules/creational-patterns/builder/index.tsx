import React, { useState } from "react"

import FormBuilder from "./FormBuilder.tsx"

const FormComponent = ({ title, buttonText, withFooter }: any) => {
  return (
    <div>
      {title && <h4>{title}</h4>}
      <button>{buttonText || "Submit"}</button>
      {withFooter && <footer>Footer Content</footer>}
    </div>
  )
}

const App = () => {
  const [formConfig, setFormConfig] = useState<any>(null)

  const handleBuildForm = () => {
    const form = FormBuilder()
      .setTitle("User Form")
      .setButtonText("Save")
      .enableFooter()
      .build()

    setFormConfig(form) // Aquí es donde actualizamos el estado con la configuración del formulario
  }

  return (
    <div>
      <h1>Builder</h1>
      <button onClick={handleBuildForm}>Build Form</button>
      {formConfig && <FormComponent {...formConfig} />}
    </div>
  )
}

export default App
