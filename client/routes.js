import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {AuthProvider} from './contexts/AuthContext'
import PropTypes from 'prop-types'
import {
  PrivateRoute,
  LogIn,
  SignUp,
  ProfilePage,
  UserHome,
  PoC,
  FirebaseTest,
  SpeechToText,
  ForgotPassword,
  WebcamModule
} from './components'
import {me} from './store'
import Cloud from './components/Cloud'
import LandingPage from './components/LandingPage'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <AuthProvider>
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/speech" component={SpeechToText} />
          <PrivateRoute path="/dashboard" component={ProfilePage} />
          <Route path="/camera" component={PoC} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/landingpage" component={LandingPage} />
          <Route path="/cloud" component={Cloud} />
          <Route path="/upload" component={FirebaseTest} />
          <Route path="/newCamera" component={WebcamModule} />
        </AuthProvider>
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/userhome" component={UserHome} />
          </Switch>
        )}
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
