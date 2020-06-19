import {takeEvery, put, all} from 'redux-saga/effects';
import * as Actions from '../ActionTypes';

export function* addToDoAsync(action) {
  console.log('in add');
  yield put({type: Actions.ADD_TODO_ASYNC, action}); //like dispatch another action
}

export function* deleteToDoAsync(action) {
  console.log('in delete');
  yield put({type: Actions.DELETE_TODO_ASYNC, action});
}

export function* toggleToDoAsync(action) {
  console.log('in toggle');
  yield put({type: Actions.TOGGLE_TODO_ASYNC, action});
}

export function* updateToDoAsync(action) {
  console.log('in update');
  yield put({type: Actions.UPDATE_TODO_ASYNC, action});
}

export function* watchTodo() {
  console.log('in watch todo');
  yield takeEvery(Actions.ADD_TODO, addToDoAsync); //to observe each and every action
}

export function* watchDeleteTodo() {
  yield takeEvery(Actions.DELETE_TODO, deleteToDoAsync);
}

export function* watchToggleTodo() {
  yield takeEvery(Actions.TOGGLE_TODO, toggleToDoAsync);
}

export function* watchUpdateTodo() {
  yield takeEvery(Actions.UPDATE_TODO, updateToDoAsync);
}

export default function* rootSaga() {
  yield all([
    watchTodo(),
    watchDeleteTodo(),
    watchToggleTodo(),
    watchUpdateTodo(),
  ]);
}
