import React from "react"

interface UserProps {
  name: string
  email: string
}

const UserComponent = ({ name, email }: UserProps) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>{email}</p>
    </div>
  )
}

export default UserComponent
