import { connect } from 'react-redux';
import CarShow from './car_show'
import {getCar} from '../../actions/car_actions'


const mapStateToProps = (state, ownProps) => {
  return {car: state.cars[ownProps.match.params.carId] || state.cars[0]}
}

const mapDispatchToProps = (dispatch) => {
  return {getCar: (id) => dispatch(getCar(id))};
}

export default connect(mapStateToProps, mapDispatchToProps)(CarShow)
