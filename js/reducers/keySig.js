import { SET_KEY_SIG } from '../actions/actionTypes';

const keySig = (
  state = 'C',
  action
) => {
  switch (action.type) {
    case SET_KEY_SIG:
      return action.keySig;
    default:
      return state;
  }
};

export default keySig;
