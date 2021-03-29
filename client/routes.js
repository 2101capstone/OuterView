import React, {Component} from 'react'
import {Container} from 'react-bootstrap'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {AuthProvider} from './contexts/AuthContext'
import PropTypes from 'prop-types'

import {
  PrivateRoute,
  LogIn,
  SignUp,
  ProfilePage,
  ForgotPassword,
  WebcamModule
} from './components'
import {me} from './store'
import Cloud from './components/Cloud'
import LandingPage from './components/LandingPage'
import SavedRecordings from './components/SavedRecordings'
import SingleRecording from './components/SingleRecording'

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
        <Route path="/landingpage" component={LandingPage} />
        <Route path="/cloud" component={Cloud} />
        <Route path="/record" component={WebcamModule} />
        <AuthProvider>
          <Container
            className="d-flex align-items-center justify-content-center"
            style={{minHeight: '100vh'}}
          >
            <div className="w-100" style={{maxWidth: '400px'}}>
              <Switch>
                <Route path="/login" component={LogIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </div>
          </Container>
          <PrivateRoute path="/dashboard" component={ProfilePage} />
          <Route path="/recordings" component={SavedRecordings} />
          <Route path="/singleRecording" component={SingleRecording} />
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
