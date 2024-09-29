import Memento from "./Memento.ts"

class Originator {
  private state: string = ""

  setState(state: string) {
    this.state = state
  }

  getState(): string {
    return this.state
  }

  saveStateToMemento(): Memento {
    return new Memento(this.state)
  }

  restoreStateFromMemento(memento: Memento) {
    this.state = memento.getState()
  }
}

export default Originator
