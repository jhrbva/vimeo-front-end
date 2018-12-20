import React, { Component } from 'react';
import Monsoon from './components/monsoon/monsoon';
import BodyContent from './components/bodyContent/bodyContent';
import Carousel from './components/carousel/carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Monsoon />
          <BodyContent />
          <Carousel />
        </header>
      </div>
    );
  }
}

export default App;
