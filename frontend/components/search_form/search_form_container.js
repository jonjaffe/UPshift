import { connect } from 'react-redux'
import { getSearchCars } from '../../actions/car_actions'
import SearchForm from './search_form'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchCars: (searchObj) => dispatch(getSearchCars(searchObj))
  }
}

export default connect(null, mapDispatchToProps)(SearchForm)
