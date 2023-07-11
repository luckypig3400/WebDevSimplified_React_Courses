import { useState } from 'react'
import { TodoList } from './TodoList'
import { TodoListClass } from "./TodoListClass"

function App() {
  const myCustomLabel = <label htmlFor="inputID">請輸入數字</label>

  return (
    <div className="large" id="largerDiv">
      {myCustomLabel}
      <input type="number" id="inputID" defaultValue={3} />

      <div>
        <h1>Todo List</h1>
        <TodoList />

        <TodoListClass />
      </div>
    </div>
  )
}

export default App