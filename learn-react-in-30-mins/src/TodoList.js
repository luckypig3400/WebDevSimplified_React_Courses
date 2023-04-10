import React from 'react'
// 輸入rfc，VSCode安裝的React套件會自動產生空的react function component程式碼

export default function TodoList({ todos }) {
  return (
    <div>
      <h1>Todo List</h1>

      {todos.length}
    </div>
  )
}