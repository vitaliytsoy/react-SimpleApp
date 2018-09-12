import {
  SAVE_OPERATIONS_PLANNED,
  SAVE_OPERATIONS_DONE,
  REQUEST_OPERATIONS,
  RECEIVE_OPERATIONS
} from '../actions';

const initialState = {
  plannedOperations: [],
  doneOperations: [],
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type){
    case SAVE_OPERATIONS_PLANNED:
      return {...state, plannedOperations: action.payload, };
    case SAVE_OPERATIONS_DONE:
      return {...state, doneOperations: action.payload, };
    case REQUEST_OPERATIONS:
      return {...state, isFetching: true };
    case RECEIVE_OPERATIONS:
      return {...state, isFetching: false };
    default:
      return state;
  }
}