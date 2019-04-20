import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Logo from '../components/Logo/Logo';
import Navigation from '../components/Navigation/Navigation';
import Rank from '../components/Rank/Rank';
// import Register from '../components/Register/Register';
// import SignIn from '../components/SignIn/SignIn';

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

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_FACEDETECT_API,
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      imageUrl: '',
      box: [],
    };
  }

  calculateFaceLocation = (data) => {
    const faceDatas = data.outputs[0].data.regions.map(({ id, region_info: regionInfo }) => ({
      id,
      ...regionInfo.bounding_box,
    }));
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    return faceDatas.map(faceData => ({
      id: faceData.id,
      leftCol: faceData.left_col * width,
      topRow: faceData.top_row * height,
      rightCol: width - faceData.right_col * width,
      bottomRow: height - faceData.bottom_row * height,
    }));
  };

  displayFace = (box) => {
    this.setState(() => ({ box }));
  };

  onInputChange = (e) => {
    const input = e.target.value.trim();
    if (input) {
      this.setState(() => ({ input }));
    }
  };

  onSubmit = () => {
    const { input } = this.state;
    if (input) {
      this.setState(state => ({ imageUrl: state.input }));
      app.models
        .predict(Clarifai.FACE_DETECT_MODEL, input)
        .then(response => this.displayFace(this.calculateFaceLocation(response)))
        .catch(err => console.log(err));
    }
  };

  render() {
    const { imageUrl, box } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation isSignedIn />
        {/* <SignIn /> */}
        {/* <Register /> */}
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        <FaceRecognition imageUrl={imageUrl} box={box} />
      </div>
    );
  }
}

export default App;
