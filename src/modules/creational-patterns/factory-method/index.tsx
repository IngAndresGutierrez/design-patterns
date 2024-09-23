import React from "react"

import { ButtonFactory } from "./ButtonFactory.tsx"

const FactoryMain = () => {
  return (
    <div>
      <h1>Factory Method</h1>
      <ButtonFactory type="primary" label="Primary Button" />
      <ButtonFactory type="secondary" label="Secondary Button" />
      <ButtonFactory type="disabled" label="Disabled Button" />
    </div>
  )
}

export default FactoryMain
