import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OutOfStock.css'

const OutOfStock = () => {
	const [outOfStockItems, setOutOfStockItems] = useState([]);
	const navigate = useNavigate();

	useEffect( () => {
		fetch('https://morning-refuge-91739.herokuapp.com/inventoryItemOutOfStock')
		.then(res => res.json())
		.then(data => setOutOfStockItems(data));
	}, []);
	return (
		<div className='container outofstock'>
			<h4 className='my-5 text-center'>Out Stock Items</h4>
			<div>
				{
					outOfStockItems.map(item => <div
						key={item._id}
						className='outoutofstock-items'
						onClick={() =>{
							navigate(`/inventory/${item._id}`);
						}}
						>
						<p className='m-0'>{item.name}</p>
					</div>)
				}
			</div>
		</div>
	);
};

export default OutOfStock;