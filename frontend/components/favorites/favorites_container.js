//connect pres component
import values from 'lodash/values'
import { connect } from 'react-redux'
import Favorites from './favorites'
import { postFavoriteCar, deleteFavoriteCar } from '../../actions/car_actions'

const mapStateToProps = (state) => {
  return {favorites: values(state.session.currentUser.favorites)}
}

const mapDispatchToProps = (dispatch) => {
  return {postFavoriteCar: (car_id) => dispatch(postFavoriteCar(car_id)),
  deleteFavoriteCar: (car_id) => dispatch(deleteFavoriteCar(car_id))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
