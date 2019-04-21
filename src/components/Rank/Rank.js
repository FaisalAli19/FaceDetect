import React from 'react';
import { connect } from 'react-redux';

const Rank = ({ name, entries }) => (
  <div>
    <div className="white f4">{`${name}, your total entries are`}</div>
    <div className="white f3">{`${entries}`}</div>
  </div>
);

const mapStateToProps = ({ user }) => ({
  name: user.name,
  entries: user.entries,
});

export default connect(
  mapStateToProps,
  null,
)(Rank);
