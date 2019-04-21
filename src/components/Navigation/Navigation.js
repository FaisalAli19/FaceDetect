import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser } from '../../store/actions/actions';

const Navigation = ({ Authenticated, logout }) => {
  if (Authenticated) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          type="button"
          className="f4 link dim black underline pa3 pointer"
          onClick={(e) => {
            e.preventDefault();
            logout();
          }}
          style={{ background: 'none', border: 'none' }}
        >
          Sign Out
        </button>
      </nav>
    );
  }
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Link to="/signIn" className="f4 link dim black underline pa3 pointer">
        Sign In
      </Link>
      <Link to="/register" className="f4 link dim black underline pa3 pointer">
        Register
      </Link>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({
  Authenticated: auth.Authenticated,
});

const mapDispatchToProps = {
  logout: logoutUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);
