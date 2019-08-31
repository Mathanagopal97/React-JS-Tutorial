import React, { Component } from 'react';

export default class MultipleForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(evt){
    evt.preventDefault();
    alert(`Username: ${this.state.userName}\nPassword: ${this.state.password}\nEmail: ${this.state.password}`);
  }
  render() {
    return (
      <div>
      <h1>Multiple Forms</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text'
            name='userName'
            value={this.state.username} 
            onChange={this.handleChange}
            placeholder='username'/>
            <input type='email'
            name='email'
            value={this.state.email} 
            placeholder='email'
            onChange={this.handleChange}/>
            <input type='password'
            name='password'
            value={this.state.password} 
            placeholder='password'
            onChange={this.handleChange}/>
            <button>Sumbit</button>

        </form>
      </div>
    );
  }
}