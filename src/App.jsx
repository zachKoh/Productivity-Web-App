import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    if (newItem != "") {
      setTodos(currentTodos => { 
        return [...currentTodos, {id: crypto.randomUUID(), title: newItem, completed: false},] 
      })
    }

    setNewItem("")
  }

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

  function handleDelete (id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id != id)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Todo</label>
          <input 
            onChange={e => setNewItem(e.target.value)} 
            value={newItem} 
            type="text" 
            id="item"
          />
        </div>
        <button className="btn">Add Todo</button>
      </form>
      <h1>ToDo list</h1>
      <ul className="list">
        {todos.length === 0 && "No ToDos Yet"}
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  onChange={e => toggleTodo(todo.id, e.target.checked)} 
                  checked={todo.completed} 
                />
                {todo.title} 
              </label>
              <button 
                onClick={() => handleDelete(todo.id)} 
                className="btn btn-danger"
              >
              Delete
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}