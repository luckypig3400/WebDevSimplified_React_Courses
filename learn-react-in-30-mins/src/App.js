import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
// https://stackoverflow.com/questions/62549457/error-err-package-path-not-exported-package-subpath-v4-is-not-defined-by

const LOCAL_STORAGE_KEY = 'todoApp.todosSavedItems';

function App() {
  const [myTodos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
    // 這個useEffect() function因為沒有監聽的變數
    // 因此只會在頁面載入時執行一次
  }, [])

  useEffect(() => {
    console.log("這個useEffect() function會在每次myTodos變數有更動時執行");

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(myTodos));
  }, [myTodos])

  function toggleTodo(id) {
    const newTodos = [...myTodos]
    // 在React中要操作變數(state)，都建議要先複製該變數，等更動好再用setState()回存

    const targetTodo = newTodos.find(todo => todo.id === id)
    targetTodo.complete = !targetTodo.complete
    setTodos(newTodos);
  }

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
      <TodoList todos={myTodos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" /><br />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear All</button>
      <div>{myTodos.filter(todo => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
