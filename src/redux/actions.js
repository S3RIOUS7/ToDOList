export const ADD_TASK = 'ADD_TAST';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const LINE_TASK = 'LINE_TASK';

export const addTask = (text) => ({
  type: ADD_TASK,
  payload: { text },
});

export const lineTask  = (id) => ({
  type: LINE_TASK,
  payload: { id },
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: { id },
});

export const editTask = (id, text) => ({
  type: EDIT_TASK,
  payload: { id, text },
});