import React, { Component } from 'react';
import '../styles/index.css';

export default class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    }
    this.handlePasswordChange   = this.handlePasswordChange.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  handlePasswordChange(e) {
    this.props.onPasswordChange(e.target.value);
  }

  handleVisibilityChange() {
    this.setState({ visibility: !this.state.visibility});
  }

  render() {
    return (
      <div className='input-group'>
        <label>{this.props.label}</label>
        <div className='visibility-toggle'>
          <input type={(this.state.visibility) ? 'text' : 'password'} 
                 name={this.props.name} 
                 onChange={this.handlePasswordChange} />
          <i className="toggle-btn material-icons" onClick={this.handleVisibilityChange}>
            {(this.state.visibility) ? 'visibility' : 'visibility_off'}
          </i>
        </div>
      </div>
    );
  } 
}