import React from 'react';
import { connect } from 'react-redux';

import Tutor from '../components/Tutor';
import { setTopNotes, setBottomNotes, setTimeSig, setKeySig } from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    topNotes: state.topNotes,
    bottomNotes: state.bottomNotes,
    timeSig: state.timeSig,
    keySig: state.keySig
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTopNotes: (notes) => {
      return dispatch(
        setTopNotes(notes)
      );
    },
    setBottomNotes: (notes) => {
      return dispatch(
        setBottomNotes(notes)
      );
    },
    setTimeSig: (timeSig) => {
      return dispatch(
        setTimeSig(timeSig)
      );
    },
    setKeySig: (keySig) => {
      return dispatch(
        setKeySig(keySig)
      );
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tutor);
