import * as Actions from '../ActionTypes';

export const addTodo = (task, id) => ({
  type: Actions.ADD_TODO,
  id: id,
  task,
});

export const toggleTodo = (id) => ({
  type: Actions.TOGGLE_TODO,
  id,
});

export const deleteTodo = (id) => ({
  type: Actions.DELETE_TODO,
  id,
});

export const updateTodo = (id, task) => ({
  type: Actions.UPDATE_TODO,
  id,
  task,
});
