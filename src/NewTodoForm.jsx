import { useState } from "react"

export function NewTodoForm({onSubmit}){
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
    
        onSubmit(newItem)

        setNewItem("")
    }

    return (
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
    )
}