import actionConstants from "./actionConstants";

const initState = {
  counterValue: 0,
  todos: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionConstants.COUNTER_INCREMENT: {
      return {
        ...state,
        counterValue: state.counterValue + Number(action.payload)
      };
    }
    case actionConstants.COUNTER_DECREMENT: {
      return {
        ...state,
        counterValue: state.counterValue + action.payload
      };
    }

    case actionConstants.ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    }
    default:
      return state;
  }
};

export default reducer;
