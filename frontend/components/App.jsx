import React from 'react'
import SessionFormContainer from './session_form/session_form_container'
import NavbarContainer from './navbar/navbar_container'
import CarIndexContainer from './cars/car_index_container'
import CarShowContainer from './cars/car_show_container'
import { Route, Link } from 'react-router-dom'
import { AuthRoute } from '../util/route_util';


const App = () => (
  <div className="container">
    <NavbarContainer />
    <Route exact path="/" component={ CarIndexContainer } />
    <Route exact path="/cars/:carId" component={CarShowContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
