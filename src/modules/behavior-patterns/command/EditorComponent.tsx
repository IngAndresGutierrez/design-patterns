import React, { useState } from 'react';

import { Editor, AddTextCommand, Command } from './Command.tsx';

const EditorComponent = () => {
  const [editor] = useState(new Editor());
  const [commands, setCommands] = useState<Command[]>([]);

  const handleAddText = (text: string) => {
    const command = new AddTextCommand(text, editor);
    command.execute();
    setCommands((prevCommands) => [...prevCommands, command]);
  };

  const handleUndo = () => {
    const lastCommand = commands.pop();
    if (lastCommand) {
      lastCommand.undo();
      setCommands([...commands]);
    }
  };

  return (
    <div>
      <button onClick={() => handleAddText('Hello, World!')}>Add Text</button>
      <button onClick={handleUndo}>Undo</button>
    </div>
  );
};

export default EditorComponent;
