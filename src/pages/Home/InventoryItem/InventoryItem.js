import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryItem.css'

const InventoryItem = ({item}) => {
	const navigate= useNavigate();

	return (
		<div className='inventory_item container'>
			<div className='inventory_item_part1'>
				<img height={150} src={item.image} alt="" />
			</div>
			<div className='inventory_item_part2'>
				<h4>{item.name}</h4>
				<p className='mb-1'>Price: ${item.price}</p>
				<p className='mb-1'>Quantity: {item.quantity}</p>
				<p className='mb-1'>Supplier: {item.supplier}</p>
				<button onClick={() => {
					navigate(`/inventory/${item._id}`);
				}} className='update-stock-btn d-block ms-auto'>Update Stock</button>
			</div>
		</div>
	);
};

export default InventoryItem;