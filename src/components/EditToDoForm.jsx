import { useState } from 'react';

function EditToDoForm({ editTodo, task }) {
  const [value, setValue] = useState(task.task);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim() === '') return;
    editTodo(value, task.id);
    setValue('');
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input'
        placeholder='Update Task'
        value={value}
        onChange={handleChange}
      />
      <button className='todo-btn' type='submit'>
        Save
      </button>
    </form>
  );
}
export default EditToDoForm;
