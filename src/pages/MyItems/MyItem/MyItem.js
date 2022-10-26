import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MyItem.css'

const MyItem = ({item, handleRefresh}) => {
	const navigate = useNavigate();


	const handleDelete = () => {
		const confirm = window.confirm(`Are you sure to delete Product Id: ${item._id} ?`);
		if(confirm){
			fetch(`https://morning-refuge-91739.herokuapp.com/deleteInventoryItem/${item._id}`,{
				method: 'DELETE',
			})
			.then(res => res.json())
			.then(data => handleRefresh());
		}
	}
	return (
		<div className='manage-item'>
			<div className='manage-item-part1'>
				<img src={item.image} height={80} alt="" />
				<h5 className='mt-2'>{item.name}</h5>
				<p className='mb-1'>Product Id: {item._id}</p>
				<p className='mb-1'>Supplier: {item.supplier}</p>
				<p className='mb-1'>Price: {item.price}</p>
				<p className='mb-1'>Quantity: {item.quantity}</p>
			</div>
			<div className='manage-item-part2'>
				<button onClick={() => {
					navigate(`/inventory/${item._id}`)
				}} className='update-stock-btn mx-2 update-btn'>Update Stock</button>
				<button onClick={handleDelete} className='update-stock-btn bg-danger mx-2 '>Delete</button>
			</div>	
		</div>
	);
};

export default MyItem;