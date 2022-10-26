import React from 'react';
import './Footer.css'

const Footer = () => {
	return (
		<div className='footer'>
			<h6 className='m-0 text-center'>Laptop Stock © Copyright {new Date().getFullYear()}</h6>
		</div>
	);
};

export default Footer;