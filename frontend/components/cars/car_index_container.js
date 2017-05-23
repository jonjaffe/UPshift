import { connect } from 'react-redux'
import CarIndex from './car_index'
import {asArray} from '../../reducers/selectors'
import { getAllCars, getCar, postFavoriteCar, deleteFavoriteCar } from '../../actions/car_actions'

const mapStateToProps = (state) => {
  return {cars: asArray(state.cars),
  favorites: asArray(state.session.currentUser.favorites)}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCars: () => dispatch(getAllCars()),
    getCar: (id) => dispatch(getCar(id)),
    postFavoriteCar: (car_id) => dispatch(postFavoriteCar(car_id)),
    deleteFavoriteCar: (car_id) => dispatch(deleteFavoriteCar(car_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarIndex)
