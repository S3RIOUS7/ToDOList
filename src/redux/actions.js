


export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: task,
  };
};

export const toggleTask = (taskId) => {
  return {
    type: 'TOGGLE_TASK',
    payload: taskId,
  };
};

export const delTask = (taskId) => {
  return {
    type: 'DELETE_TASK',
    payload: taskId,
  };
};

export const editTask = (taskId, newText) => {
  return {
    type: 'EDIT_TASK',
    payload: { taskId, newText },
  };
};

export const saveNewTask = (taskId, newText) => {
  return {
    type: 'SAVE_NEW_TASK',
    payload: { taskId, newText },
  };
};