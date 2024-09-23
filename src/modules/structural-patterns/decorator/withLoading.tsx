import React from "react"

const withLoading = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P & { isLoading: boolean }) => {
    if (props.isLoading) {
      return <div>Loading...</div>
    }
    return <Component {...props} />
  }
}

export default withLoading
