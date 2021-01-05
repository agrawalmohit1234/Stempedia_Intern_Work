import { ADD_POST } from '../actions/types';

const postReducer = (state = "", action) => {
  switch (action.type) {
    case ADD_POST:
      console.log(action.payload)
      return action.payload;
    default:
      return state;
  }
}

export default postReducer;
