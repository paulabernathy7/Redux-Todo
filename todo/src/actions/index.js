// actions created after reducer
// export ALL CAPPED VARS OF ACTIONS
//define actions

export const ADD_TODO = "ADD_TODO"; // action type

// function that gets passed into component
export const addNewTodo = newTodo => {
  // action creator and the actual action below
  return {
    type: ADD_TODO,
    payload: newTodo
  };
};
