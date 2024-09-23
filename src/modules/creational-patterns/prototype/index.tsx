import React from "react"
import Form, { cloneForm } from "./FormPrototype.tsx"

const PrototypeMain = () => {
  const originalForm = { title: "Original Form", fields: ["Name", "Email"] }
  const clonedForm = cloneForm(originalForm, "Cloned Form")

  return (
    <div>
      <h1>Prototype</h1>
      <Form {...originalForm} />
      <Form {...clonedForm} />
    </div>
  )
}

export default PrototypeMain
