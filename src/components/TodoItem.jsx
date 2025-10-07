function TodoItem({ todo, index, toggleTodo, deleteTodo}) {
    return (
        <li>
            <input type="checkbox" checked={todo.isCompleted} onChange = {() => toggleTodo(index)}/>
            <span onClick={() => toggleTodo(index)} className={todo.isCompleted ? "line-through" : ""}> {todo.text}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
    )
}

export default TodoItem