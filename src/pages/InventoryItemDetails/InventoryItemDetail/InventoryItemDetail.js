import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import './InventoryItemDetail.css'

const InventoryItemDetail = ({item, handleRefresh}) => {
	const {_id, name, description, image, price, quantity, supplier} = item;
	// const quantityShow = parseInt(quantity);
	const [quantityShow, setQuantityShow] = useState(parseInt(quantity));
	const [showLoading, setShowLoading] = useState(false);
	const navigate = useNavigate();
	
	const handleDelivered = () => {
		setShowLoading(true);
		let quantityInt = parseInt(quantity);
		if(quantityInt >= 1){
			quantityInt--;
			setQuantityShow(quantityInt);
			const doc = {
				quantity: ''+quantityInt
			}
			fetch(`https://morning-refuge-91739.herokuapp.com/updateQuantity/${_id}`, {
				method:'PUT',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(doc)
			})
			.then(res => res.json())
			.then(data => {
				handleRefresh();
				setShowLoading(false);
			})
		}
		
	}
	const handleRestock = event => {
		setShowLoading(true);
		event.preventDefault();
		let quantityInt = parseInt(quantity);
		let restockInput = parseInt(event.target.restock.value);
		if(restockInput>0){
			quantityInt += restockInput;
			setQuantityShow(quantityInt);
			const doc = {
				quantity: ''+quantityInt
			}
				fetch(`https://morning-refuge-91739.herokuapp.com/updateQuantity/${_id}`, {
					method:'PUT',
					headers: {
						'content-type': 'application/json'
					},
					body: JSON.stringify(doc)
				})
				.then(res => res.json())
				.then(data => {
					handleRefresh();
					setShowLoading(false);
				})
		} else{
			toast.warn('Please restock positive amount of item!')
			setShowLoading(false);
		}
		event.target.reset();
		
	}
	return (
		<div style={{marginTop:'120px'}} className='container InventoryItemDetail mx-auto d-flex flex-column justify-content-center align-items-center'>
			<img height={300} className='restock-img' src={image} alt="" />
			<h4 className='text-center'>{name}</h4>
			<p className='my-2 text-center'><span className='fw-bold'>Product ID:</span> {_id}</p>
			<p className='my-2 text-center'><span className='fw-bold'>Supplier:</span> {supplier}</p>
			<h5 className='my-2 text-center'>Price: ${price}</h5>
			<h5 className='d-flex text-center my-2'>Qunatity: <span className='ms-2'>{showLoading? <Loading></Loading>: `${quantityShow}`}</span></h5>
			{
				quantity === '0' ?
				<button className='btn btn-warning my-2 fw-bold' disabled>Out Of Stock</button>
				:
				<button onClick={handleDelivered} className='update-stock-btn my-2'>Delivered</button>
			}
			<form className='restock-form' onSubmit={handleRestock}>
				<input className='restock-input' name='restock' type="number" placeholder='restock the item'/>
				<button type='submit' className='btn btn-dark'>Restock</button>
			</form>
			<p style={{textAlign:'justify'}}><span className='fw-bold'>Details:</span> {description}</p>

			<button onClick={() => {
				navigate('/manageItems');
			}} className='update-stock-btn'>Manage Inventories</button>
		</div>
	);
};

export default InventoryItemDetail;