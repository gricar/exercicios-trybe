import React from "react";

function TodoList ({ tasks }) {
  return (
    <div>
      <h1>To-Do:</h1>
      <ul>
        { tasks.map((todo, index) => <li key={index}>{todo}</li> ) }
      </ul>
    </div>
  );
}

export default TodoList;
