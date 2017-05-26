import { connect } from 'react-redux';

import { deleteSession } from '../../actions/session_actions';
import { getAllCars } from '../../actions/car_actions';
import Navbar from './navbar';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser.email),
    errors: state.session.errors
  }
};

const mapDispatchToProps = (dispatch) => {
  return {deleteSession: () => dispatch(deleteSession()),
    getAllCars: () => dispatch(getAllCars())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
