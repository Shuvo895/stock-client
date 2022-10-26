import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useInventoryItemById from '../../../hook/useInventoryItemById';
import Headers from '../../Shared/Headers/Headers';
import Loading from '../../Shared/Loading/Loading';
import InventoryItemDetail from '../InventoryItemDetail/InventoryItemDetail';
import './InventoryItemDetails.css'

const InventoryItemDetails = () => {
	const {inventoryItemId} = useParams();
	const [item, setItem] = useState({});
	const [refresh, setRefresh] = useState('');
	
	useEffect(()=> {
		fetch(`https://morning-refuge-91739.herokuapp.com/inventoryItem/${inventoryItemId}`)
		.then(res => res.json())
		.then(data => setItem(data));
	},[refresh]);

	const handleRefresh = () => {
		setRefresh(new Date().getTime());
	}

	return (
		<div>
			<Headers></Headers>
			{
				Object.keys(item).length === 0 ?
				
				<div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
					<Loading></Loading>
				</div>
				:

				<InventoryItemDetail key={item?._id} item={item} handleRefresh={handleRefresh}></InventoryItemDetail>
			}
		</div>
	);
};

export default InventoryItemDetails;