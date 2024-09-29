import React from "react"

import withAuth from "./withAuth.tsx"
import Dashboard from "./Dashboard.tsx"

const ProxyMain = () => {
  const isAuthenticated = false

  const ProtectedDashboard = withAuth(Dashboard)

  return (
    <>
      <h1>Proxy</h1>
      <ProtectedDashboard isAuthenticated={isAuthenticated} />
    </>
  )
}

export default ProxyMain
