export const simpleAction = (payload) => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: payload,
  });
};
export const secondAction = () => dispatch => {
  dispatch({
     type: 'SECOND_ACTION',
   });
};