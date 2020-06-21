import React  from "react";
import axios from 'axios'
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import CurrentVid from './components/CurrentVid'
import NextVid from './components/NextVid'
import Comments from './components/Comments'

import { funA, funB } from "./functions";



 
class App extends React.Component {
state ={
  content:[]
}




componentDidMount() {
  axios.get('/SideVideoSeed.json').then(
    res => this.setState({content: res.data})
  )
  funA();
funB();
}
render() {
    return (
      <div className="App">
        <NavBar handleSubmit={this.handleSubmit} />
        <CurrentVid/>
        <NextVid vids={this.state.content} />
        <Comments/>
      </div>

    );
  }

}

export default App;
