import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';

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

  return (
    <div className='TodoWrapper'>
      <Form addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <>
            <li key={todo.id}>{todo.task}</li>
            <button>Edit</button>
            <button>Delete</button>
          </>
        ))}
      </ul>
    </div>
  );
}

export default ToDoWrapper;
