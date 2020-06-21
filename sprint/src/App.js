import React  from "react";
import axios from 'axios'
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import CurrentVid from './components/CurrentVid'
import NextVid from './components/NextVid'
import CommentsForm from './components/CommentsForm'
import CommentsList from './components/CommentsList'




 
class App extends React.Component {
state ={
  content:[],
  comments:[]

}



componentDidMount() {
  axios.get('/SideVideoSeed.json').then(
    res => this.setState({content: res.data})
  )

  axios.get('/CommentsSeed.json').then(
    res => this.setState({comments: res.data})
  )

}



render() {
    return (
      <div className="App">
        <NavBar />
        <CurrentVid/>
       <NextVid vids={this.state.content} />
        <CommentsForm/>
        <CommentsList comments={this.state.comments}/>
     
       

      </div>

    );
  }

}

export default App;
