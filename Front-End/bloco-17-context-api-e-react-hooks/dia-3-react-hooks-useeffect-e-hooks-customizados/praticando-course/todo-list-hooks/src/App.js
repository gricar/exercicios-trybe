import React, { useState } from 'react';
import useArray from './hooks/useArray';
import TodoList from './TodoList';

function App() {
  const [newInput, setNewInput] = useState('');
  const { todos, addTodos } = useArray();

  const handleInput = ({ target }) => {
    setNewInput(target.value);
  }

  const handleClick = () => {
    addTodos(newInput);
    setNewInput('');
  }

  return (
    <div>
      <label htmlFor="task-input">
        Add a task:
        <input
          id="task-input"
          placeholder="task..."
          name="newItem"
          value={ newInput }
          onChange={ handleInput }
        />
      </label>
      <button
        type="button"
        onClick={ () => handleClick() }
      >
        Add
      </button>
      <TodoList tasks={ todos } />
    </div>
  );
}

export default App;
