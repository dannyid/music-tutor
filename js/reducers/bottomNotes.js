import { SET_BOTTOM_NOTES } from '../actions/actionTypes';

const bottomNotes = (
  state = [],
  action
) => {
  switch (action.type) {
    case SET_BOTTOM_NOTES:
      return action.notes;
    default:
      return state;
  }
};

export default bottomNotes;
