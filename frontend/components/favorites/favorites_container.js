//connect pres component
import values from 'lodash/values'
import { connect } from 'react-redux'
import Favorites from './favorites'

const mapStateToProps = (state) => {
  return {favorites: values(state.session.currentUser.favorites)}
}

export default connect(mapStateToProps)(Favorites)
