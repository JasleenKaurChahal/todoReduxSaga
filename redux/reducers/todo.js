import * as Actions from '../ActionTypes';

const todos = (state = [], action) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          name: action.task,
          isCompleted: false,
        },
      ];
    case Actions.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? {...todo, isCompleted: !todo.isCompleted} : todo
      );
    case Actions.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case Actions.UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? {...todo, name: action.task} : todo
      );
    default:
      return state;
  }
};

export default todos;
