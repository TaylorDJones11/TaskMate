import { useState } from 'react';

function Form() {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(value);
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input'
        placeholder='What is the task toaday?'
        onChange={handleChange}
      />
      <button className='todo-btn'>Add Task</button>
    </form>
  );
}
export default Form;
