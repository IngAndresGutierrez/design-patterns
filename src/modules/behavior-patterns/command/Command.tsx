export interface Command {
  execute(): void
  undo(): void
}

export class AddTextCommand implements Command {
  constructor(private text: string, private editor: Editor) {}

  execute() {
    this.editor.addText(this.text)
  }

  undo() {
    this.editor.removeText(this.text)
  }
}

export class Editor {
  private content: string = ""

  addText(text: string) {
    this.content += text
    console.log("Content:", this.content)
  }

  removeText(text: string) {
    this.content = this.content.replace(text, "")
    console.log("Content after undo:", this.content)
  }
}
