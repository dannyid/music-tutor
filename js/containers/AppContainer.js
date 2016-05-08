import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

const AppContainer = React.createClass({
  render() {
    return (
      <div id='app-container'>
        {this.props.children}
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    // notifications: state.notifications
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // setViewingAsUser: (profile) => {
    //   return dispatch(
    //     setViewingAsUser(profile)
    //   );
    // }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
