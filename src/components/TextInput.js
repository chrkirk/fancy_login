import React, { Component } from 'react';
import '../styles/index.css';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onUsernameChange(e.target.value);
  }

  render() {
    return (
      <div className='input-group'>
        <label>{this.props.label}</label>
        <input type='text' 
               name={this.props.name} 
               onChange={this.handleChange}/>
      </div>
    );
  }
}