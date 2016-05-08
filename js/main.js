// Stylesheets
import '../sass/styles.sass';

// React/Redux/Router
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, Redirect, IndexRedirect, IndexRoute, browserHistory } from 'react-router';
import rootReducer from './reducers/rootReducer';

// Components
import AppContainer from './containers/AppContainer';
import TutorContainer from './containers/TutorContainer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={TutorContainer}  />
      </Route>
      <Redirect from="*" to="/" />
    </Router>
  </Provider>,
  document.getElementById('react-app')
);

