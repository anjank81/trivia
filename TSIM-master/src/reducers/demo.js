
import { actionType } from "../actions/demo";

const initialState = {
  auth: false
};

export function demo(state = initialState, action) {
  switch (action.type) {
    case actionType.registerSuccess:
      return {
        ...state,
        auth: action.bool
      };


    default:
      return state;
  }
}