import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function Item({ task, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className='Todo'>
      <input
        type='checkbox'
        checked={task.completed}
        onChange={toggleComplete}
      />
      <p className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>
      <div>
        {!task.isEditing && (
          <>
            <FontAwesomeIcon icon={faPenToSquare} onClick={editTodo} />
            <button
              onClick={deleteTodo}
              disabled={!task.completed}
              className='delete-btn'
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Item;
