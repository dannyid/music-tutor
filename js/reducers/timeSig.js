import { SET_TIME_SIG } from '../actions/actionTypes';

const timeSig = (
  state = '4/4',
  action
) => {
  switch (action.type) {
    case SET_TIME_SIG:
      return action.timeSig;
    default:
      return state;
  }
};

export default timeSig;
