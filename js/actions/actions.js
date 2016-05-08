import {
  SET_TOP_NOTES,
  SET_BOTTOM_NOTES,
  SET_TIME_SIG,
  SET_KEY_SIG
} from './actionTypes';

export const setTopNotes = (notes) => {
  return {
    type: SET_TOP_NOTES,
    notes
  };
};

export const setBottomNotes = (notes) => {
  return {
    type: SET_BOTTOM_NOTES,
    notes
  };
};

export const setTimeSig = (timeSig) => {
  return {
    type: SET_TIME_SIG,
    timeSig
  };
};

export const setKeySig = (keySig) => {
  return {
    type: SET_KEY_SIG,
    keySig
  };
};