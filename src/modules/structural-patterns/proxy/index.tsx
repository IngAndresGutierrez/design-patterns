import React from "react"

import withAuth from "./withAuth.tsx"

const Dashboard = () => {
  return <div>Welcome to your dashboard!</div>
}

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
