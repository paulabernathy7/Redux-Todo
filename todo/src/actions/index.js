// actions created after reducer
// export ALL CAPPED VARS OF ACTIONS
//define actions

export const ADD_TODO = "ADD_TODO";

// function that gets passed into component
export const addNewTodo = newTodo => {
  return {
    type: ADD_TODO,
    payload: newTodo
  };
};
