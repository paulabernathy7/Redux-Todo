// actions created after reducer
// export ALL CAPPED VARS OF ACTIONS
//define actions

export const ADD_TODO = "ADD_TODO"; // action type

// function that gets passed into component is set to the payload
export const addNewTodo = newTodo => {
  // action creator and the actual action below
  return {
    type: ADD_TODO,
    payload: newTodo
  };
};

export const TOGGLE_TODO = "TOGGLE_TODO";
export const toggleTodo = todo => {
  return {
    type: TOGGLE_TODO,
    payload: todo
  };
};
