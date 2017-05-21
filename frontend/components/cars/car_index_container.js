import { connect } from 'react-redux'
import CarIndex from './car_index'
import {asArray} from '../../reducers/selectors'
import { getAllCars, getCar } from '../../actions/car_actions'

const mapStateToProps = (state) => {
  return {cars: asArray(state.cars)}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCars: () => dispatch(getAllCars()),
    getCar: (id) => dispatch(getCar(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarIndex)
