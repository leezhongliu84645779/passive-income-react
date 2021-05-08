import React, {Component} from 'react';
import './navbar.css';

class NavBar extends Component {
	render() {
		return (<div class="nav-container">
	  				<div class="top-right-nav">
	  					<button type="button" autofocus>注册</button>
	  					<button type="button" autofocus>登陆</button>
					</div>
				</div>);
	}
}

export default NavBar;