import React, { ChangeEvent, FC, useState } from "react"

import Caretaker from "./CareTaker.ts"
import Originator from "./Originator.ts"

const MementoApp: FC = () => {
  const [text, setText] = useState("")
  const [originator] = useState(new Originator())
  const [caretaker] = useState(new Caretaker())
  const [canUndo, setCanUndo] = useState(false)
  const [canRedo, setCanRedo] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value
    setText(newText)
    originator.setState(newText)
    caretaker.add(originator.saveStateToMemento())
    setCanUndo(true)
    setCanRedo(false)
  }

  const handleUndo = () => {
    const memento = caretaker.undo()
    if (memento) {
      originator.restoreStateFromMemento(memento)
      setText(originator.getState())
      setCanRedo(true)
    } else {
      setCanUndo(false)
    }
  }

  const handleRedo = () => {
    const memento = caretaker.redo()
    if (memento) {
      originator.restoreStateFromMemento(memento)
      setText(originator.getState())
    } else {
      setCanRedo(false)
    }
  }

  return (
    <div>
      <h4>Memento Pattern - Undo/Redo Example</h4>
      <textarea
        rows={5}
        value={text}
        onChange={handleChange}
        placeholder="Type something here..."
      />
      <br />
      <button onClick={handleUndo} disabled={!canUndo}>
        Undo
      </button>
      <button onClick={handleRedo} disabled={!canRedo}>
        Redo
      </button>
    </div>
  )
}

export default MementoApp
