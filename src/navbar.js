import React, {Component} from 'react';
import './navbar.css';

class NavBar extends Component {
	render() {
		return (<div class="nav-container">
	  				<div class="top-right-nav">
	  					<a href="#about">登陆</a>
	  					<a href="#about">注册</a>
					</div>
				</div>);
	}
}

export default NavBar;