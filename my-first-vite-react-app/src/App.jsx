import { useState } from 'react'
import { TodoList } from './TodoList'
import { Name } from './Name'

function App() {
  const myCustomLabel = <label htmlFor="inputID">請輸入數字</label>

  return (
    <div className="large" id="largerDiv">
      {myCustomLabel}
      <input type="number" id="inputID" defaultValue={3} />

      <Name />

      <div>
        <h1>Todo List</h1>
        <TodoList />
      </div>
    </div>
  )
}

export default App