import React from 'react';
import './Headers.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../images/logo/Laptop Stock logo.png'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Headers = () => {
	const navigate = useNavigate();
	const [user, loading, error] = useAuthState(auth);

	return (
		<div>
			<Navbar fixed='top' collapseOnSelect expand="lg" className='headers-navbar' variant="light">
			<Container>
			<Navbar.Brand as={Link} to='/'><img className='headers-img' height={50} src={logo} alt="" /></Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className='ms-auto'>
				<Nav.Link as={Link} to='/home' className='fw-bold fs-6 mx-3 px-0 text-center'>Home</Nav.Link>
				<Nav.Link as={Link} to="/blogs" className='fw-bold fs-6 mx-3 px-0 text-center'>Blogs</Nav.Link>

				{
					user?
					<>
						<Nav.Link as={Link} to='/manageItems' className='fw-bold fs-6 mx-3 px-0 text-center'>Manage Items</Nav.Link>
						<Nav.Link as={Link} to='/addItem' className='fw-bold fs-6 mx-3 px-0 text-center'>Add Item</Nav.Link>
						<Nav.Link as={Link} to="/myItem" className='fw-bold fs-6 mx-3 px-0 text-center'>My Items</Nav.Link>
						<button onClick={ () => {
							signOut(auth);
						}} className='btn btn-signup mx-lg-3 mx-auto my-lg-0 my-2 py-1 px-3'>Log out</button>
					</>
					:
					<>
						<button onClick={() =>{
							navigate('/login')
						}} className='btn btn-login mx-lg-3 mx-auto my-lg-0 my-2 py-1 px-3'>Log in</button>
						<button onClick={ () => {
							navigate('/signup')
						}} className='btn btn-signup mx-lg-3 mx-auto my-lg-0 my-2 py-1 px-3'>Sign up</button>
					</>
				}
				</Nav>
			</Navbar.Collapse>
			</Container>
			</Navbar>
		</div>
	);
};

export default Headers;