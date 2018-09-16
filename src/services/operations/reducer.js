import {
  SAVE_OPERATIONS_PLANNED,
  SAVE_OPERATIONS_DONE,
  REQUEST_OPERATIONS,
  RECEIVE_OPERATIONS,
  SET_SORT_TYPE,
} from '../actions';

const initialState = {
  plannedOperations: [],
  doneOperations: [],
  sortBy: {
    type: 'date',
    isIncremental: false,
  },
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_OPERATIONS_PLANNED:
      return { ...state, plannedOperations: action.payload };
    case SAVE_OPERATIONS_DONE:
      return { ...state, doneOperations: action.payload };
    case REQUEST_OPERATIONS:
      return { ...state, isFetching: true };
    case RECEIVE_OPERATIONS:
      return { ...state, isFetching: false };
    case SET_SORT_TYPE:
      if (state.sortBy.type.toLowerCase() === action.payload.toLowerCase()) {
        return {
          ...state,
          sortBy: {
            ...state.sortBy,
            isIncremental: !state.sortBy.isIncremental,
          },
        };
      }
      return {
        ...state,
        sortBy: {
          type: action.payload,
          isIncremental: false,
        },
      };
    default:
      return state;
  }
};
