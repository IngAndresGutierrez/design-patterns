import React from "react"

import UserProfile from "./UserProfile.tsx"
import { AppProvider } from "./AppContext.tsx"

const SingletonMain = () => {
  return (
    <AppProvider>
      <h1>Singleton</h1>
      <UserProfile />
    </AppProvider>
  )
}

export default SingletonMain
