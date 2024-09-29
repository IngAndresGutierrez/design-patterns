import React, { useState } from "react"

import {
  EmailAuthStrategy,
  GoogleAuthStrategy,
  FacebookAuthStrategy,
} from "./AuthStrategies.tsx"

const AuthForm = () => {
  const [authStrategy, setAuthStrategy] = useState(new EmailAuthStrategy())

  const handleLogin = () => {
    authStrategy.login()
  }

  return (
    <div>
      <h4>Authentication Form</h4>
      <select
        onChange={(e) => {
          switch (e.target.value) {
            case "email":
              setAuthStrategy(new EmailAuthStrategy())
              break
            case "google":
              setAuthStrategy(new GoogleAuthStrategy())
              break
            case "facebook":
              setAuthStrategy(new FacebookAuthStrategy())
              break
            default:
              break
          }
        }}
      >
        <option value="email">Email</option>
        <option value="google">Google</option>
        <option value="facebook">Facebook</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default AuthForm
