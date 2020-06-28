import React from "react";
import { Route, Link, Switch, BrowserRouter as Router, BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import NavBar from './components/NavBar'
import CurrentVid from './components/CurrentVid'
import NextVid from './components/NextVid'
import CommentsForm from './components/CommentsForm'
import CommentsList from './components/CommentsList'
import VidDescription from './components/VidDescription'
import UploadForm from './components/UploadForm'
//let api_key = "5c4c8003-3483-45f0-bb8a-89ee259fc2ed";

let api_key = "2ee60303-67d6-46f9-850a-5b06636bb301";

class App extends React.Component {
  state = {
    content: [],
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


  }
  // axios.get('/SideVideoSeed.json').then(
  //   res => this.setState({ content: res.data })
  // )

  // axios.get("https://project-1-api.herokuapp.com/comments?api_key=" + api_key)
  //   .then(res => this.setState({ comments: res.data })
  //   )




  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Router>

            <Link to='/home'  >Two</Link>

            <Switch>
              <Route exact path="/upload" component={UploadForm}>
                <UploadForm />
              </Route>
              <Route path="/home">
                <CurrentVid />

                <div className="App__bottom">
                  <div className="App__bottom--left">
                    <VidDescription />
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

            </Switch>
          </Router>



        </BrowserRouter>





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
