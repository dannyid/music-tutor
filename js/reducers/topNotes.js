import { SET_TOP_NOTES } from '../actions/actionTypes';

const topNotes = (
  state = [],
  action
) => {
  switch (action.type) {
    case SET_TOP_NOTES:
      return action.notes;
    default:
      return state;
  }
};

export default topNotes;
