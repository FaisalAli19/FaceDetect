import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUser } from '../../store/actions/actions';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    const { register } = this.props;
    if (!!name && !!email && !!password) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(email);
      if (isValidEmail) {
        register({
          name,
          email,
          password,
        });
      }
    }
  };

  render() {
    return (
      <article className="br2 ba dark-grey b--black-10 mv4 w-100-ns w-50-m w-30-l mv6 shadow-1 center">
        <main className="pa4 black-80">
          <form className="measure center" onSubmit={this.handleFormSubmit}>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onInput={e => this.setState({ name: e.target.value })}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onInput={e => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onInput={e => this.setState({ password: e.target.value })}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
            <div className="lh-copy mt3">
              <Link to="/signIn" className="f5 link dim black db">
                Already have an account?
              </Link>
            </div>
          </form>
        </main>
      </article>
    );
  }
}

const mapStateToProps = ({ auth }) => auth;

const mapDispatchToProps = dispatch => ({
  register: data => dispatch(registerUser(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
