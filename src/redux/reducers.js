const initialState = {
  taskMainAll: [],
  value: '',
  selectItem: '',
  editTitle: '',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        taskMainAll: [...state.taskMainAll, action.payload],
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        taskMainAll: state.taskMainAll.map((task) =>
          task.id === action.payload
            ? { ...task, checked: !task.checked }
            : task
        ),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        taskMainAll: state.taskMainAll.filter((task) => task.id !== action.payload),
      };
    // case 'EDIT_TASK':
    //   return {
    //     ...state,
    //     taskMainAll: state.taskMainAll.map((task) =>
    //       task.id === action.payload.taskId
    //         ? { ...task, text: action.payload.newText }
    //         : task
    //     ),
    //   };
    case 'SAVE_NEW_TASK':
      return {
        ...state,
        taskMainAll: state.taskMainAll.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, text: action.payload.newText }
            : task
        ),
      };
      case 'SET_VALUE':
  return {
    ...state,
    value: action.payload,
  };
case 'SET_SELECTED_ITEM':
  return {
    ...state,
    selectedItem: action.payload,
  };
case 'SET_EDIT_TITLE':
  return {
    ...state,
    editTitle: action.payload,
  };
    default:
      return state;
  }
};

export default appReducer;

