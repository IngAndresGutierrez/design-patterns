import React from "react"

import ProxyMain from "./proxy/index.tsx"
import FacadeMain from "./facade/index.tsx"
import AdapaterMain from "./adapter/index.tsx"
import CompositeMain from "./composite/index.tsx"
import DecoratorMain from "./decorator/index.tsx"

function StructuralPatterns() {
  return (
    <div className="App">
      <AdapaterMain />
      <CompositeMain />
      <DecoratorMain />
      <FacadeMain />
      <ProxyMain />
    </div>
  )
}

export default StructuralPatterns
