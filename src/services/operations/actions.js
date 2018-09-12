import FieldService from '../api/FieldService';
import Operation, { OperationType, Assessment } from '../api/models/Operation';
import {
  SAVE_OPERATIONS_PLANNED,
  SAVE_OPERATIONS_DONE,
  REQUEST_OPERATIONS,
  RECEIVE_OPERATIONS
} from '../actions';
export const fetchOperations = () => async dispatch => {
  dispatch(requestOperations());
  const fieldService = new FieldService();

  const plannedOperations = await fieldService.getOperations();
  const doneOperations = await fieldService.getOperations_2();

  dispatch(savePlannedOperations(plannedOperations));
  dispatch(saveDoneOperations(doneOperations));

  dispatch(receiveOperation());
};

export const savePlannedOperations = (payload) => dispatch => {
  return dispatch({
    type: SAVE_OPERATIONS_PLANNED,
    payload: payload
  });
};
export const saveDoneOperations = (payload) => dispatch => {
  return dispatch({
    type: SAVE_OPERATIONS_DONE,
    payload: payload
  });
};
export const requestOperations = () => dispatch => {
  return dispatch({
      type: REQUEST_OPERATIONS,
    }
  );
};
export const receiveOperation = () => dispatch => {
  return dispatch({
      type: RECEIVE_OPERATIONS,
    }
  );
};