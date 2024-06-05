export function TodoList() {
    return (
      <ul className="list">
        {todos.length === 0 && "No Todos Yet"}
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
    )
}