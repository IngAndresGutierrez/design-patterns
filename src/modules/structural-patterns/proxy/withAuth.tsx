import React from "react"

const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P & { isAuthenticated: boolean }) => {
    if (!props.isAuthenticated) {
      return <div>Please log in to view this content.</div>
    }
    return <Component {...props} />
  }
}

export default withAuth
