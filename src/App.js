import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./js/components/Login/login";
import LoginWithEmail from "./js/components/Login/loginWithEmail";

function App() {
  return (
    <>
    <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/emailLogged' component={LoginWithEmail} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
