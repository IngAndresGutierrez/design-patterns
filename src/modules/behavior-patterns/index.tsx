import React from "react"

import CommandMain from "./command/index.tsx"
import MementoMain from "./memento/index.tsx"
import ObserverMain from "./observer/index.tsx"
import StrategyMain from "./strategy/index.tsx"
import MediatorMain from "./mediator/index.tsx"
import ChainResponsabilityMain from "./chain-responsability/index.tsx"

function BehaviorPatterns() {
  return (
    <div className="App">
      <ObserverMain />
      <StrategyMain />
      <CommandMain />
      <ChainResponsabilityMain />
      <MediatorMain />
      <MementoMain />
    </div>
  )
}

export default BehaviorPatterns
