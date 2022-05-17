import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogginOTP from "./js/components/Login/logginOtp";
import Login from "./js/components/Login/login";
import LoginWithEmail from "./js/components/Login/loginWithEmail";

function App() {
  return (
    <>
    <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/emailLogged' component={LoginWithEmail} />
            <Route path='/otp' component={LogginOTP} />

          </Switch>
      </Router>
    </>
  );
}

export default App;
