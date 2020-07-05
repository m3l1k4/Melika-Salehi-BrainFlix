import React from "react";
import { Route, Link, Redirect, Switch, BrowserRouter as Router, BrowserRouter } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import UploadForm from './components/UploadForm'
import LandingPage from './LandingPage'

const api_key = "2ee60303-67d6-46f9-850a-5b06636bb301";







class App extends React.Component {
  render() {
    return (

      <Router>
      <div className="App">

        <NavBar />
            <Switch>
            <Route exact path="/upload" >
              <UploadForm  />
            </Route>
            {/* components have been moved to a saparate LandingPage.js file to allow {..prop} application to nested divs. 
            solves the this.props.match is undefined error */}
            <Route exact path="/"
              render={props => <LandingPage {...props} />}>
                <Redirect to="/1af0jruup5gu" />
              </Route>
            <Route path="/home" component={LandingPage}>
            <Redirect to="/1af0jruup5gu" />
            </Route>
            <Route path="/:id" component={LandingPage}></Route>
          </Switch>
      </div>
      </Router>
    );
  }

}

export default App;



