import React from "react"

import ChatMediator from "./ChatMediator.tsx"
import UserComponent from "./UserComponent.tsx"

const ChatApp = () => {
  const mediator = new ChatMediator()

  return (
    <div>
      <UserComponent name="Alice" mediator={mediator} />
      <UserComponent name="Bob" mediator={mediator} />
    </div>
  )
}

export default ChatApp
