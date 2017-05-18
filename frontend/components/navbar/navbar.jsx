import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.deleteAndRedirect = this.deleteAndRedirect.bind(this)
  }

  deleteAndRedirect() {
    this.props.deleteSession().then(() => history.push('/'))
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div className="navbar_all_elements">
          <div className="navbar_left">
            <header>
              <Link to="/"><h1>UpShift</h1></Link>
            </header>
          </div>
          <div className="navbar_right">
            <span><Link to={`/favorites/${this.props.currentUser.id}`}><img className="logged_in_heart" src="https://i.stack.imgur.com/iBCpb.png"/></Link></span>
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
              <Link to="/"><h1>UpShift</h1></Link>
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
