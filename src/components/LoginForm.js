import React, { Component } from 'react';
import '../styles/index.css';

import PasswordInput from './PasswordInput';
import TextInput     from './TextInput'; 

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: false
    };

    this.handleFormClick      = this.handleFormClick.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.validateInputs       = this.validateInputs.bind(this);
  }

  handleFormClick(e) {
    this.props.onClick(e);
  }

  handleUsernameChange(username) {
    this.setState({ username: username });
  }

  handlePasswordChange(password) {
    this.setState({ password: password });
  }

  validateInputs(e) {
    // if there are empty fields set error to true
    // so that an error message is displayed

    e.preventDefault();
    if (!this.state.username || !this.state.password) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
  }

  render() {
    return (
      <form className={(this.props.onFront) ? 'on-front' : 'on-back'} onClick={this.handleFormClick}>
        <div className='form-title'>SIGN IN</div>
        <div className='group-container'>
          <TextInput     label='USERNAME' name='username' onUsernameChange={this.handleUsernameChange}/>
          <PasswordInput label='PASSWORD' name='password' onPasswordChange={this.handlePasswordChange}/>
          <div className={(this.state.error) ? 'error-msg' : 'hidden'}>Oops. There was an error. Try again.</div>
        </div>
        <button onClick={this.validateInputs}>SIGN IN</button>
      </form>
    );
  }
}