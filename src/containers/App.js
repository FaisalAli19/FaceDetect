import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Particles from 'react-particles-js';

import Home from '../components/Home';
import Navigation from '../components/Navigation/Navigation';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';
import AuthenticatedRoute from '../routes/AuthenticatedRoute';
import UnAuthenticatedRoute from '../routes/UnAuthenticatedRoute';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation />
      <AuthenticatedRoute exact path="/" component={Home} />
      <UnAuthenticatedRoute path="/signIn" component={SignIn} />
      <UnAuthenticatedRoute path="/register" component={Register} />
    </div>
  </BrowserRouter>
);

export default App;
