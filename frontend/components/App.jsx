import React from 'react'
import SessionFormContainer from './session_form/session_form_container'
import { Route, Link } from 'react-router-dom'
import { deleteSession } from '../actions/session_actions'
import { AuthRoute } from '../util/route_util';


const App = () => (
  <div>
    <header>
      <Link to="/"><h1>UpShift</h1></Link>
    </header>
    <Link to="/signup">Sign Up</Link>
    <Link to="/login">Log In</Link>
    <button onClick={deleteSession}>Log Out</button>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
