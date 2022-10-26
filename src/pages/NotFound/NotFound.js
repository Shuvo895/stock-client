import React from 'react';
import Headers from '../Shared/Headers/Headers';

const NotFound = () => {
	return (
		<div>
			<Headers></Headers>
			<div style={{height:'100vh'}}  className=' d-flex justify-content-center align-items-center'>
				<h4>404 page is not founded!</h4>
			</div>
		</div>
	);
};

export default NotFound;