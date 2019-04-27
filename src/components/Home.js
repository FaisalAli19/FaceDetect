import React, { Component } from 'react';
import { connect } from 'react-redux';

import FaceRecognition from './FaceRecognition/FaceRecognition';
import ImageLinkForm from './ImageLinkForm/ImageLinkForm';
import Logo from './Logo/Logo';
import Rank from './Rank/Rank';

import { updateEntries } from '../store/actions/actions';
import url from '../api';

class Home extends Component {
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
    const { incrementEntries, id } = this.props;
    if (input) {
      this.setState(state => ({ imageUrl: state.input }));
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input,
        }),
      })
        .then(res => res.json())
        .then((response) => {
          this.displayFace(this.calculateFaceLocation(response));
          incrementEntries({ id });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    const { imageUrl, box } = this.state;
    return (
      <div>
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        <FaceRecognition imageUrl={imageUrl} box={box} />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ id: user.id });

const mapDispatchToProps = dispatch => ({
  incrementEntries: id => dispatch(updateEntries(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
