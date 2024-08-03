import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Item from './Item';

function ToDoWrapper() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    const newTodo = {
      id: nanoid(),
      task: todo,
      completed: false,
      isEditing: false,
    };
    setTodos([...todos, newTodo]);
    console.log([...todos, newTodo]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function editTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  return (
    <div className='TodoWrapper'>
      <h2>✨ Let's Get Things Done! ✨</h2>
      <Form addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Item
          task={todo}
          key={index}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default ToDoWrapper;
