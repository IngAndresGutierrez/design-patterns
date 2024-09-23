import React from "react"

import UserAdapter from "./UserAdapter.tsx"
import UserComponent from "./UserComponent.tsx"

const AdapaterMain = () => {
  const apiResponse = {
    full_name: "John Doe",
    contact_email: "john@example.com",
  }

  const adaptedData = UserAdapter(apiResponse)

  return (
    <>
      <h1>Adapter</h1>
      <UserComponent {...adaptedData} />
    </>
  )
}

export default AdapaterMain
