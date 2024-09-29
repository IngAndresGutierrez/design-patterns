import React, { useState } from "react"

import withLoading from "./withLoading.tsx"
import DataComponent from "./DataComponent.tsx"

const DecoratorMain = () => {
  const [isLoading, setIsLoading] = useState(true)
  const DataWithLoading = withLoading(DataComponent)

  setTimeout(() => {
    setIsLoading(false)
  }, 5000)

  return (
    <>
      <h1>Decorator</h1>
      <DataWithLoading isLoading={isLoading} data="Here is the data" />
    </>
  )
}

export default DecoratorMain
