import { useState } from 'react';

function Form({ addTodo }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim() === '') return;
    addTodo(value);
    setValue('');
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input'
        placeholder='What is the task today?'
        value={value}
        onChange={handleChange}
      />
      <button className='todo-btn' type='submit'>
        Add Task
      </button>
    </form>
  );
}

export default Form;
