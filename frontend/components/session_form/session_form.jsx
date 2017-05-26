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
    this.handleDemo = this.handleDemo.bind(this);
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

  handleDemo(e) {
    e.preventDefault();
    let email = "dallas@google.com";
    let password = "jonisthebest";

    for (let i = 0; i < email.length; i++) {
      setTimeout(() => this.setState({email: email.slice(0, i + 1)}), (i * 100));
    }

    for (let j = 0; j < password.length; j++) {
      setTimeout(() => this.setState({password: password.slice(0, j + 1)}), ((j + 17) * 100));
    }

    setTimeout(() => this.props.processForm({user: {email: "dallas@google.com", password: "jonisthebest"}}), 3000);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <div className="instead"><p>Not registered? </p><div className="instead_text"><Link onClick={this.props.clearErrors} to="/signup">Sign Up</Link></div></div>;
    } else {
      return <div className="instead"><p>Already registered? </p><div className="instead_text"><Link onClick={this.props.clearErrors} to="/login">Log In</Link></div></div>;
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.formType !== newProps.formType) {
      this.props.clearErrors()
    }
  }

  renderErrors() {
    const errors = this.props.errors
    return(
      <ul>
        {errors.map((error, i) => (
          <li key={`error-${i}`} className="session-form-errors">
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
    const demoButton = this.props.formType === "login" ? <button className="demo_button" onClick={this.demoAccount}>Demo Account</button> : undefined//this props form type ? demo button : undefined
    return (
      <div className="session_form_container">
        <form className="session_form_box" onSubmit={this.handleSubmit}>
          <div className="top_session_form_text">{this.writeTopAction()}</div>
          <br/>

          {this.renderErrors()}
          <br/>
          <div className="session_form">
              <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email"></input>
            <br/>
              <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password"></input>
            <br/>
            <input className="session_form_button session_form_button2" type="submit" value="Submit"></input>
            <br/>
          </div>
        </form>
        <div className="demo_and_instead">
          {demoButton}
          {this.navLink()}
        </div>
      </div>
    )
  }
}



export default SessionForm;
