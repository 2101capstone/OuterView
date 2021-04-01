import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {AuthProvider} from './contexts/AuthContext'

import {
  PrivateRoute,
  UpdateProfile,
  LogIn,
  SignUp,
  ProfilePage,
  ForgotPassword,
  WebcamModule,
  AllRecordings,
  LandingPage,
  LearnMore
} from './components'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/learnMore" component={LearnMore} />
        <AuthProvider>
          <Switch>
            <PrivateRoute path="/record" component={WebcamModule} />
            <PrivateRoute path="/recordings" component={AllRecordings} />
            <PrivateRoute path="/learnMore" component={LearnMore} />
          </Switch>
          <Route path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute path="/dashboard" component={ProfilePage} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
        </AuthProvider>
        <Route component={LandingPage} />
      </Switch>
    )
  }
}

export default Routes
