import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import './App.css'; // Import file CSS

function App() {
  const [todos, setTodos] = useState([
    { text: 'Belajar React Hooks', isCompleted: true },
    { text: 'Membuat Aplikasi Todo', isCompleted: false },
    { text: 'Deploy ke Netlify', isCompleted: false },
  ]);
  const [filter, setFilter] = useState('All'); 

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };


  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  
  const getFilteredTodos = () => {
    switch (filter) {
      case 'Completed':
        return todos.filter(todo => todo.isCompleted);
      case 'Active':
        return todos.filter(todo => !todo.isCompleted);
      default: 
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="todo-app">
      <h1>Aplikasi Todolist</h1>
      <TodoForm addTodo={addTodo} />
      <TodoFilter currentFilter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;