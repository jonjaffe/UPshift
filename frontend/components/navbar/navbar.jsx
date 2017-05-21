import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.deleteAndRedirect = this.deleteAndRedirect.bind(this)
  }

  deleteAndRedirect() {
    this.props.deleteSession().then(() => this.props.history.push('/'))
  }

  render() {

    if (this.props.loggedIn) {
      return (
        <div className="navbar_all_elements">
          <div className="navbar_left">
            <header>
              <Link to="/"><h1><span className='up'>UP</span>shift</h1></Link>
            </header>
          </div>
          <div className="navbar_right">
            <span><Link to={`/favorites`}><img className="logged_in_heart" src="https://i.stack.imgur.com/iBCpb.png"/></Link></span>
            &nbsp;
            <span><button onClick={this.deleteAndRedirect}>Log Out</button></span>
          </div>
        </div>
      )
    } else {
      return (
        <div className="navbar_all_elements">
          <div className="navbar_left">
            <header>
              <Link to="/"><h1><span className='up'>UP</span>shift</h1></Link>
            </header>
          </div>
          <div className="navbar_right">
            Fake Heart
            &nbsp;
            <span><Link to="/signup">Sign Up</Link></span>
            &nbsp;
            <span><Link to="/login">Log In</Link></span>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(Navbar);
