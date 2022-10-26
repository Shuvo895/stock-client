import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Footer from '../../Shared/Footer/Footer';
import Headers from '../../Shared/Headers/Headers';
import Loading from '../../Shared/Loading/Loading';
import MyItem from '../MyItem/MyItem';
import './MyItems.css'

const MyItems = () => {
	const [items, setItems] = useState([]);
	const [refresh, setRefresh] = useState('');
	const [user, loading, error] = useAuthState(auth);

	useEffect(()=> {
		fetch(`https://morning-refuge-91739.herokuapp.com/myItem/${user?.email}`)
		.then(res => res.json())
		.then(data => setItems(data));
	},[refresh])

	const handleRefresh = () => {
		setRefresh(new Date().getTime());
	}
	return (
		<div>
			<Headers></Headers>
			<div style={{paddingTop:'5px'}} className='container my-5'>
				<h3 className='my-5 text-center	'>My Items</h3>
				{
					items.length===0?
					<div style={{height:'80vh'}} className='d-flex justify-content-center align-items-center'>
						<h5>No Items</h5>
					</div>
					:
					<div className='manage-items'>
						{
							items.map(item => <MyItem
								key={item._id}
								item={item}
								handleRefresh={handleRefresh}
							></MyItem>)
						}
					</div>
				}

			</div>
			<Footer></Footer>
		</div>
	);
};

export default MyItems;