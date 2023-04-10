import React from 'react'
// 輸入rfc，VSCode安裝的React套件會自動產生空的react function component程式碼
import Todo from './Todo';

export default function TodoList({ todos, toggleTodo }) {
  return (
    todos.map(todo => {
      return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
    })
  )
}