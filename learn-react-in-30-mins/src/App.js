import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [myTodos, setTodos] = useState([{ id: 1, name: 'Todo 1', complete: true }, { id: 2, name: 'Todo 2', complete: false }]);

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
