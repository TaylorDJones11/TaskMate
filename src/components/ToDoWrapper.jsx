import { useReducer } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import Item from './Item';
import EditToDoForm from './EditToDoForm';

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        { id: nanoid(), task: action.task, completed: false, isEditing: false },
        ...state,
      ];
    case 'TOGGLE_COMPLETE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    case 'EDIT_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isEditing: !todo.isEditing } : todo
      );
    case 'SAVE_TODO':
      return state.map((todo) =>
        todo.id === action.id
          ? { ...todo, task: action.task, isEditing: false }
          : todo
      );
    default:
      return state;
  }
}

function ToDoWrapper() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className='TodoWrapper'>
      <h2>✨ Let's Get Things Done! ✨</h2>
      <Form addTodo={(task) => dispatch({ type: 'ADD_TODO', task })} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditToDoForm
            editTodo={(task) =>
              dispatch({ type: 'SAVE_TODO', task, id: todo.id })
            }
            task={todo}
            key={todo.id}
          />
        ) : (
          <Item
            task={todo}
            key={todo.id}
            toggleComplete={() =>
              dispatch({ type: 'TOGGLE_COMPLETE', id: todo.id })
            }
            deleteTodo={() => dispatch({ type: 'DELETE_TODO', id: todo.id })}
            editTodo={() => dispatch({ type: 'EDIT_TODO', id: todo.id })}
          />
        )
      )}
    </div>
  );
}

export default ToDoWrapper;
