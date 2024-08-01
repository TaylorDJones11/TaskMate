function Form() {
  return (
    <form>
      <input
        type='text'
        className='todo-input'
        placeholder='What is the task toaday?'
      />
      <button className='todo-btn'>Submit</button>
    </form>
  );
}
export default Form;
