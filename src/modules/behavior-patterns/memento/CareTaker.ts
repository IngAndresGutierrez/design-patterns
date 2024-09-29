import Memento from "./Memento.ts"

class Caretaker {
  private mementoList: Memento[] = []
  private currentIndex: number = -1

  add(memento: Memento) {
    this.mementoList = this.mementoList.slice(0, this.currentIndex + 1) // Limpiar el historial "futuro" cuando se agrega un nuevo estado
    this.mementoList.push(memento)
    this.currentIndex++
  }

  undo(): Memento | null {
    if (this.currentIndex <= 0) {
      return null
    }
    this.currentIndex--
    return this.mementoList[this.currentIndex]
  }

  redo(): Memento | null {
    if (this.currentIndex >= this.mementoList.length - 1) {
      return null
    }
    this.currentIndex++
    return this.mementoList[this.currentIndex]
  }
}

export default Caretaker
