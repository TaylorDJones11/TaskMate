import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';

function ToDoWrapper() {
  const [todos, setTodos] = useState([]);

  function addTodo({ todo }) {
    setTodos([
      ...todos,
      { id: nanoid(), task: todo, completed: false, isEditing: false },
    ]);
  }
  return (
    <div className='TodoWrapper'>
      <Form addTodo={addTodo} />
    </div>
  );
}
export default ToDoWrapper;
