import React, { Component, Fragment } from 'react';

import Logo from './Logo';
import Date from './Date';
import SignupForm from './SignupForm';
import Message from './Message';

class Homepage extends Component {
	state = {
		didSubmit: false
	}

	handleSubmit = (event, email) => {
   	event.preventDefault()
	  	this.setState({
	  		didSubmit: true
     	})
   }

   render() {
   	return (
			<Fragment>
				<div id="top-bar">
					<a href="https://shop.hodinkee.com" className="button"> &#60; H SHOP</a>
					<button className="button">SHARE &#10150;</button>
				</div>
		      <div id="center-group">
					<Logo />
					<Date />
					<SignupForm handleSubmit={ this.handleSubmit }/>
					{this.state.didSubmit ?
						<Message />
						:
						null
					}
		      </div>
			</Fragment>
    	);
  	}
}

export default Homepage
