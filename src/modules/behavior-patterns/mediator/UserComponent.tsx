import React, { useState } from "react"
import ChatMediator from "./ChatMediator"

interface UserProps {
  mediator: ChatMediator
  name: string
}

const UserComponent: React.FC<UserProps> = ({ mediator, name }) => {
  const [messages, setMessages] = useState<string[]>([])

  const sendMessage = (message: string) => {
    mediator.sendMessage(`${name}: ${message}`, { receiveMessage })
  }

  const receiveMessage = (message: string) => {
    setMessages((prevMessages) => [...prevMessages, message])
  }

  return (
    <div>
      <h3>{name}'s Chat</h3>
      <input
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage((e.target as HTMLInputElement).value);
            (e.target as HTMLInputElement).value = ""
          }
        }}
      />
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserComponent
