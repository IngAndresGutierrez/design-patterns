import React from "react"

import BuilderMain from "./builder/index.tsx"
import SingletonMain from "./singleton/index.tsx"
import PrototypeMain from "./prototype/index.tsx"
import FactoryMain from "./factory-method/index.tsx"

function CreationalPatterns() {
  return (
    <div className="App">
      <FactoryMain />
      <SingletonMain />
      <BuilderMain />
      <PrototypeMain />
    </div>
  )
}

export default CreationalPatterns
