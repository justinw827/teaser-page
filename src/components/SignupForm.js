import React, { Component } from 'react';

class SignupForm extends Component {
  state = {
    input: ""
  }

  // Helper function to handle search input state
  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <form id="signup-form" onSubmit={(event) => this.props.handleSubmit(event, this.state.input)}>
      	<input
	         value={this.state.input}
	         onChange={this.handleChange}
	         placeholder='Your email address'
	         id="signup-input"
       	/>
			<button id="signup-button">NOTIFY ME</button>
      </form>
    )
  }
}

export default SignupForm
