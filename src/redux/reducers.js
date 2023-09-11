import { combineReducers } from "redux";

import { ADD_TASK, LINE_TASK, DELETE_TASK, EDIT_TASK } from "./actions";

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, { text: action.payload.text, checked: false, id: uuidv4() }];

    case LINE_TASK:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, checked: !task.checked } : task
      );

    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload.id);

    case EDIT_TASK:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, text: action.payload.text } : task
      );

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
 
});