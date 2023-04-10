import React, { useState, useRef } from 'react';
import TodoList from './TodoList';

function App() {
  const [myTodos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if(name === '') return;// do nothing
    console.log(`You have added a new Todo: ${name}`);

    todoNameRef.current.value = null;
    // 每次點擊按鈕後自動清除輸入框內容
  }

  return (
    <>
      <TodoList todos={myTodos} />
      <input ref={todoNameRef} type="text" /><br />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear All</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
