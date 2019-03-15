import React, { Component } from 'react';
import '../styles/index.css';

import PasswordInput from './PasswordInput';
import TextInput     from './TextInput'; 

/* FormType is used as an enum for the Form's type
<Form
  type={FormType.REGISTER} 
  onClick={this.handleRegisterFormClick} 
  onFront={this.state.registerFormInFront}
/>
*/
const FormType = {
  LOGIN: 0,
  REGISTER: 1
};


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      error: false
    };

    this.handleFormClick             = this.handleFormClick.bind(this);
    this.handleUsernameChange        = this.handleUsernameChange.bind(this);
    this.handlePasswordChange        = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.validateInputs              = this.validateInputs.bind(this);
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

  handleConfirmPasswordChange(password) {
    this.setState({ confirmPassword: password });
  }

  validateInputs(e) {
    // checks for empty fields and 
    // password disagreement in the case of a register form
    
    e.preventDefault();
    if (!this.state.username || !this.state.password) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }

    if (this.props.type === FormType.REGISTER) {
      const passwordDisagreement = this.state.password === this.state.confirmPassword;
      if (passwordDisagreement) this.setState({ error: true });
    }
  }

  render() {
    switch (this.props.type) {
      case FormType.LOGIN: 
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
      case (FormType.REGISTER):
        return (
          <form className={(this.props.onFront) ? 'on-front' : 'on-back'} onClick={this.handleFormClick}>
            <div className='form-title'>CREATE ACOUNT</div>
            <div className='group-container'>
              <TextInput     label='USERNAME'          name='username'         onUsernameChange={this.handleUsernameChange}/>
              <PasswordInput label='PASSWORD'          name='password'         onPasswordChange={this.handlePasswordChange}/>
              <PasswordInput label='RE-ENTER PASSWORD' name='confirm-password' onPasswordChange={this.handleConfirmPasswordChange}/>
              <div className={(this.state.error) ? 'error-msg' : 'hidden'}>Oops. There was an error. Try again.</div>
            </div>
            <button onClick={this.validateInputs}>REGISTER</button>
          </form>
        );
      default:
        return (
          <form className={(this.props.onFront) ? 'on-front' : 'on-back'} onClick={this.handleFormClick}>
            <div className='form-title'>EMPTY</div>
          </form>
        );
    }
  }
}

export { Form, FormType };