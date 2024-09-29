import React from "react"

import ThemeButton from "./ThemeButton.tsx"
import { ThemeProvider } from "./ThemeContext.tsx"

const ObserverMain = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Observer</h1>
        <ThemeButton />
      </div>
    </ThemeProvider>
  )
}

export default ObserverMain
