//connect pres component

import { connect } from 'react-redux'
import Favorites from './favorites'

const mapStateToProps = (state) => {
  return {favorites: state.session.currentUser.favorites}
}

export default connect(mapStateToProps)(Favorites)
