import { useSelector, useDispatch } from "react-redux"
import { deleteTodo } from "../features/todo/todoSlice"
import AddForm from "./AddForm";

export default function Todo() {
    const dispatch = useDispatch()
    const todos = useSelector((state) => {
        console.log('Full state:', state) // Debug: see entire state
        return state.todo?.todos || []
    })
    
    console.log('Todos from selector:', todos) // Debug: see todos array
    
    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }
    
    return (
        <div>
            <h2>Todo</h2>
            <AddForm />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '5px 0' }}>
                        <span>{todo.task}</span>
                        <button 
                            onClick={() => handleDelete(todo.id)}
                            style={{ 
                                backgroundColor: '#ff4444', 
                                color: 'white', 
                                border: 'none', 
                                padding: '5px 10px', 
                                borderRadius: '3px',
                                cursor: 'pointer'
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))} 
            </ul>
            <p>Total todos: {todos.length}</p>
        </div>
    )
}