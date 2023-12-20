import { v4 as uuidv4 } from 'uuid';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id: uuidv4(), text: action.payload.text, completed: false },
      ];

    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.payload.id);

    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );

    case 'UPDATE_TODO':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );

    case 'DUPLICATE_TODO':
      const duplicatedTodo = state.find((todo) => todo.id === action.payload.id);
      return duplicatedTodo
        ? [...state, { ...duplicatedTodo, id: uuidv4() }]
        : state;

    // Add other cases as needed...

    default:
      return state;
  }
};

export default todoReducer;
