import topNotes from './topNotes';
import bottomNotes from './bottomNotes';
import timeSig from './timeSig';
import keySig from './keySig';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  topNotes,
  bottomNotes,
  timeSig,
  keySig
});

export default rootReducer;
