export function TodoItem({ id, completed, title, toggleTodo, handleDelete }) {
    return (
        <li key={id}>
            <label>
                <input
                    type="checkbox"
                    onChange={e => toggleTodo(id, e.target.checked)} 
                    checked={completed} 
                />
                {title} 
            </label>
            <button 
                onClick={() => handleDelete(id)} 
                className="btn btn-danger"
            >
            Delete
            </button>
        </li>
    )
}