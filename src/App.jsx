import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {
  const [todos, setTodos] = useState([])

  function toggleTodo (id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed}
        }
        return todo
      })
    })
  }

  function addTodo(title) {
    setTodos(currentTodos => { 
      return [...currentTodos, {id: crypto.randomUUID(), title, completed: false},] 
    })
  }

  function handleDelete (id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id != id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1>ToDo list</h1>
      <TodoList todos={todos} handleDelete={handleDelete} toggleTodo={toggleTodo} />
    </>
  )
}