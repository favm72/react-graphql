import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Navbar, NavbarBrand } from 'reactstrap';
import { useAuth0 } from "@auth0/auth0-react";

const Header = (props) => {
	const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0()	

	let info
	if (isLoading)
		info = <div>Loading...</div>
	else if (isAuthenticated)
		info = <div>
			{user.email}&nbsp;&nbsp;
			<Button onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>
		</div>
	else
		info = <Button onClick={() => loginWithRedirect()}>Login</Button>
	return (
		<Fragment>			
			<Navbar dark fixed="top">
				<div className="mybar">
					<NavbarBrand>OOWLISH</NavbarBrand>
					<NavLink to="/home">HOME</NavLink>
					<NavLink to="/dashboard">DASHBOARD</NavLink>						
				</div>
				<div className="end">
					{info}
				</div>
			</Navbar>
		</Fragment>
	);
}

export default Header
