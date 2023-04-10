import React, { useState, useRef } from 'react';
import TodoList from './TodoList';
import uuidv4 from 'uuid/v4';

function App() {
  const [myTodos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return;// do nothing

    // console.log(`You have added a new Todo: ${name}`);
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })

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
