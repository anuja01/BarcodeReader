import { combineReducers } from "redux";
import { COUNTER_CHANGE } from "../actionTypes";

const initialState = {
  count: 0
};

function countReducer(state = initialState, action) { //Reducer will return state and action to store
  switch (action.type) {
    case COUNTER_CHANGE:
      return {
        ...state,
        count: action.payload
      }; //Spread operator for merge - copare count inside state and assign new value
    default:
      return state;
  }
}


export default combineReducers({ countReducer });