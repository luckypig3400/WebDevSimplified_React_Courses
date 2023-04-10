import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [myTodos, setTodos] = useState(['Todo 1', 'Todo 2']);

  return (
    <>
      <TodoList todos={myTodos} />
      <input type="text" /><br />
      <button>Add Todo</button>
      <button>Clear All</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
