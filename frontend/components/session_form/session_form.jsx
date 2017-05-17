import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoAccount = this.demoAccount.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  demoAccount(e) {
    e.preventDefault()
    this.props.processForm({user: {email: "dallas@google.com", password: "jonisthebest"}})
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    console.log(user);
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Log In</Link>;
    }
  }

  renderErrors() {
    const errors = this.props.errors ? this.props.errors : [];
    return(
      <ul>
        {errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  writeTopAction() {
    if (this.props.formType === "login") {
      return "Log In"
    } else {
      return "Sign Up"
    }
  }

  render() {
    return (
      <div className="session_form_container">
        <form className="session_form_box" onSubmit={this.handleSubmit}>
          <h2>Welcome to UpShift</h2>
          <br/>
          <div className="top_session_form_text">Please {this.writeTopAction()}</div>
          <br/>
          {this.renderErrors()}
          <br/>
          <div className="session_form">
            <label><div className="form_label">Email:</div>
              <input type="text" value={this.state.email} onChange={this.update('email')}></input>
            </label>
            <br/>
            <label><div className="form_label">Password:</div>
              <input type="password" value={this.state.password} onChange={this.update('password')}></input>
            </label>
            <br/>
            <input className="session_form_button" type="submit" value="Submit"></input>
            <button className="session_form_button" onClick={this.demoAccount}>Demo Account</button>
            <br/>
            {this.navLink()} instead
          </div>
        </form>
      </div>
    )
  }
}

export default SessionForm;
