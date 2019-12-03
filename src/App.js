import React, {Component} from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

import 'tachyons';
import './App.css';

//Particles config
const particlesOptions = {
  particles: {
    number: {
      value: 130
    },
    move: {
      enable: true,
      speed: 10
    },
    interactivity: {
      detect_on: "canvas",
      enable: true
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
}

//Clarifai API

const app = new Clarifai.App({
  apiKey: 'd4822666540d4b57a86dadba57aeccd6'
 });

class App extends Component {
  constructor(){
    super()
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
    function(response) {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
    },
    function(err) {
      console.log(err)
    }
  );
  }

  render(){
    return (
      <div className="App">
        <Particles className='particles'
            params={particlesOptions}
        />
        <Navigation></Navigation>
        <Logo></Logo>
        <Rank></Rank>
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}>
        </ImageLinkForm>
        <FaceRecognition imageUrl={this.state.imageUrl}></FaceRecognition>
      </div>
    );
  }
}

export default App;
