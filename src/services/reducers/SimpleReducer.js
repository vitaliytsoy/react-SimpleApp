const initialState = {
  result: '',
  fakeVar: 2,
};

export default (state = initialState, action) => {
  switch (action.type){
    case 'SIMPLE_ACTION':
      return {...state, result: action.payload, };
    case 'SECOND_ACTION':
      return {...state, fakeVar: state.fakeVar + 1 };
    default:
      return state;
  }
}