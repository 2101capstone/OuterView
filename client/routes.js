import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
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
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
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
        {/* Displays our Login component as a fallback */}
        <Route component={LandingPage} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
