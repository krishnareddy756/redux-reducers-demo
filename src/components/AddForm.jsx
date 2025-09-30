import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todoSlice"

export default function AddForm() {
    const [task, setTask] = useState("")
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (task.trim()) {
            dispatch(addTodo(task))
            setTask("")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter task"
            />
            <button type="submit">Add Task</button>
        </form>
    )
}