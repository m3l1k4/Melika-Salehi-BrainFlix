import React from "react";
import { Route, Link, Switch, BrowserRouter as Router, BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import NavBar from './components/NavBar'
import UploadForm from './components/UploadForm'
import LandingPage from './LandingPage'
//let api_key = "5c4c8003-3483-45f0-bb8a-89ee259fc2ed";

const api_key = "2ee60303-67d6-46f9-850a-5b06636bb301";

class App extends React.Component {



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




  render() {
    return (
      <div className="App">
     
          <NavBar />
          <Router>

            <Link to='/home'  >Two</Link>

            <Switch>
              <Route exact path="/upload" component={UploadForm}>
                <UploadForm />
              </Route>
              <Route  exact path="/" 
              render={props => <LandingPage {...props}/>}></Route>
              <Route  path="/home" component={LandingPage}></Route>
              <Route  path="/:id" component={LandingPage}></Route>
       

            </Switch>
          </Router>



       





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


