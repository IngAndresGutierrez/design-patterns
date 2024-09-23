import React from "react"

import { useAppContext } from "./AppContext.tsx"

const UserProfile = () => {
  const { user, setUser } = useAppContext()
  return (
    <div>
      <h4>User Profile</h4>
      <p>{user ? `Welcome, ${user}` : "No user logged in"}</p>
      <button onClick={() => setUser("John Doe")}>Login as John Doe</button>
    </div>
  )
}
export default UserProfile
