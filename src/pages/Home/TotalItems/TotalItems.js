import {React, useEffect, useState} from 'react';
import './TotalItems.css'

const TotalItems = () => {
	const [items, setItems] = useState([]);
	const [supplier, setSupplier] = useState(0);
	const [outOfStock, setOutOfStock] = useState([]);

	useEffect( () => {
		fetch('https://morning-refuge-91739.herokuapp.com/inventoryItem')
		.then(res => res.json())
		.then(data => setItems(data))

	},[]);
	useEffect( () => {
		let arr = [];
		for(let obj in items){
			arr.push((items[obj].supplier).toLowerCase());
		}
		console.log(arr);
		let filteredArr = arr.filter(function(item, index) {
			if (arr.indexOf(item) === index)
			  return item;
		  });
		console.log(filteredArr);
		setSupplier(filteredArr.length);
	}, [items]);
	useEffect( () => {
		fetch('https://morning-refuge-91739.herokuapp.com/inventoryItemOutOfStock')
		.then(res => res.json())
		.then(data => setOutOfStock(data));
	},[]);

	return (
		<div className='totalItems'>
			<div>
				<p className='m-0'>Total Item: {items.length}</p>
			</div>
			<div>
				<p className='m-0'>Total Supplier: {supplier}</p>
			</div>
			<div>
				<p className='m-0'>Total Out Of Stocks: {outOfStock.length}</p> 
			</div>
		</div>
	);
};

export default TotalItems;