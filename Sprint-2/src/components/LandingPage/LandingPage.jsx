import React from "react";
import { Route, Link, Switch, BrowserRouter as Router, BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import CurrentVid from '../CurrentVid'
import NextVid from '../NextVid'
import CommentsForm from '../CommentsForm'
import CommentsList from '../CommentsList'
import VidDescription from '../VidDescription'
import UploadForm from '../UploadForm'

const api_key = "2ee60303-67d6-46f9-850a-5b06636bb301";

class App extends React.Component {
  state = {
    content: [],
    currentvid: [],
    comments: []


  }


  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      comments: [...this.state.comments, {
        id: this.state.comments.length + 1,
        name: "Mohan Muruge",
        comment: event.target.newComment.value,
        timestamp: Date()
      }]
    })
    let commentVal = event.target.newComment.value;
    postInfo("Mohan Muruge", commentVal);
    event.target.reset();
  }

  componentDidMount() {

    axios.get("https://project-2-api.herokuapp.com/videos?api_key=" + api_key)
      .then(res => this.setState({ content: res.data })
      )


    axios.get(`https://project-2-api.herokuapp.com/videos/1aivjruutn6a/?api_key=` + api_key)
      .then(res => this.setState({ currentvid: res.data })
      )
  }


 

  componentDidUpdate(previous) {
let prev=this.state.currentvid.id;
let next =this.props.match.params.id;
console.log(prev)
console.log(next)
console.log("update")
  let index=this.state.currentvid.findIndex(checkIndex);

if ( prev !== next ){

         axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}/?api_key=` + api_key)
     .then(res => this.setState({ currentvid: res.data })
   
      )    
}
  }


  render() {
   
    return (
      <div className="App">
      
              <Route path="/:id" >

             
                  <CurrentVid  vid={this.state.currentvid} />
                  <div className="App__bottom">
                    <div className="App__bottom--left">
                      <VidDescription info={this.state.currentvid} />
                      <CommentsForm handleSubmit={this.handleSubmit} />
                      <div className="App__bottom--left__comments">
                        <CommentsList comments={this.state.comments} />
                      </div>

                    </div>

                    <div className="App__bottom--right">
                      <h2 className="App__bottom--right__header">NEXT VIDEO</h2>
                      <NextVid vids={this.state.content} />
                    
                    </div>
                  </div>
               
                  </Route>
         
      </div>

    );
  }

}

export default App;
export function postInfo(nameVal, commentVal) {
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


export function checkIndex(iid){

    return this.state.currentvid.id ===this.props.id;

}

