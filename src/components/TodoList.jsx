import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  if (todos.length === 0) {
    return <p style={{ textAlign: 'center', color: '#888' }}>Belum ada gawean nich!</p>;
  }
  
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index} 
          index={index}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;