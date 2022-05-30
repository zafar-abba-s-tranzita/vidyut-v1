import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogginOTP from "./js/components/Login/logginOtp";
import Login from "./js/components/Login/login";
import LoginWithEmail from "./js/components/Login/loginWithEmail";
import LogginWithPhone from "./js/components/Login/phoneLogged";
import OnboardingUI from "./js/components/onboarding";
import AppBody from './js/containers/App/AppBody'
import AppBar from './js/components/AppBar/AppBar'
import VehicleNumber from "./js/containers/App/vehicleNumber/vehicleNumber";
import Dashboard from "./js/containers/App/Dashboard/Dashboard";

function App() {
  return (
    <>
    <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/emailLogged' component={LoginWithEmail} />
            <Route path='/phoneLogged' component={LogginWithPhone} />
            <Route path='/otp' component={LogginOTP} />
            <Route path='/onboarding' component={OnboardingUI} />
            <Route path='/app' component={VehicleNumber} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
