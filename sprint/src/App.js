import React  from "react";
import axios from 'axios'
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import CurrentVid from './components/CurrentVid'
import NextVid from './components/NextVid'
import CommentsForm from './components/CommentsForm'
import CommentsList from './components/CommentsList'


let api_key = "5c4c8003-3483-45f0-bb8a-89ee259fc2ed";

 
class App extends React.Component {
state ={
  content:[],
  comments:[]

}



componentDidMount() {
  axios.get('/SideVideoSeed.json').then(
    res => this.setState({content: res.data})
  )

  axios.get("https://project-1-api.herokuapp.com/comments?api_key=" + api_key)
  .then( res => this.setState({comments: res.data})
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
