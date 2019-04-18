import React, { Component } from "react";
import Particles from "react-particles-js";
import "./App.css";

import Facerecognition from "../components/Facerecognition/Facerecognition";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import Logo from "../components/Logo/Logo";
import Navigation from "../components/Navigation/Navigation";
import Rank from "../components/Rank/Rank";

const particlesOptions = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        <Facerecognition />
      </div>
    );
  }
}

export default App;
