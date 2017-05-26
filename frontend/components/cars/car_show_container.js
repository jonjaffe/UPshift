import { connect } from 'react-redux';
import CarShow from './car_show'
import {getCar, postFavoriteCar, deleteFavoriteCar } from '../../actions/car_actions'


const mapStateToProps = (state, ownProps) => {
  return {car: state.cars[ownProps.match.params.carId] || state.cars[0],
  favorites: state.session.currentUser.favorites}
}

const mapDispatchToProps = (dispatch) => {
  return {getCar: (id) => dispatch(getCar(id)),
    postFavoriteCar: (id) => dispatch(postFavoriteCar(id)),
    deleteFavoriteCar: (id) => dispatch(deleteFavoriteCar(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarShow)
