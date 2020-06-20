import React from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import CurrentVid from './components/CurrentVid'
import { render } from '@testing-library/react'





class App extends React.Component {


  render() {
    return (
      <div className="App">
        <NavBar handleSubmit={this.handleSubmit} />
        <CurrentVid/>
      </div>

    );
  }

}


export default App;
