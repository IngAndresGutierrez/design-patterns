interface UserComponent {
  receiveMessage(message: string): void
}

class ChatMediator {
  private users: UserComponent[] = []

  addUser(user: UserComponent) {
    this.users.push(user)
  }

  sendMessage(message: string, sender: UserComponent) {
    this.users.forEach((user) => {
      if (user !== sender) {
        user.receiveMessage(message)
      }
    })
  }
}

export default ChatMediator
