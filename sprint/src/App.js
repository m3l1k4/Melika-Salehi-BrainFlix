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


handleSubmit = (event) =>{
  event.preventDefault();
  
  this.setState({comments: [...this.state.comments, {
    id: this.state.comments.length+1,
    name: event.target.name.value,
    comment: event.target.newComment.value,
    timestamp: Date()
  }]})
  let commentVal=event.target.newComment.value;
  let nameVal=event.target.name.value;
  postInfo(nameVal,commentVal);
  event.target.reset();
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
        <CommentsForm handleSubmit={this.handleSubmit}/>
        <CommentsList comments={this.state.comments}/>
     
       

      </div>

    );
  }

}

export default App;
export function postInfo(nameVal, commentVal){
  axios.post("https://project-1-api.herokuapp.com/comments?api_key=" + api_key,
      {
          name: nameVal,
          comment: commentVal
      })
      .then(response => {

      })
      .catch(error => {
          console.log(error);
      })

};
