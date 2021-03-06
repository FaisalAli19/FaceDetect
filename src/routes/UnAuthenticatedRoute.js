import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const UnAuthenticatedRoute = ({ component: Component, Authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (!Authenticated ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    ))
    }
  />
);

const mapStateToProps = ({ auth }) => ({
  Authenticated: auth.Authenticated,
});

export default connect(mapStateToProps)(UnAuthenticatedRoute);
