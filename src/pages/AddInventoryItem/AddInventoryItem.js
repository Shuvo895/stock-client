import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer/Footer';
import Headers from '../Shared/Headers/Headers';
import Loading from '../Shared/Loading/Loading';
import './AddInventoryItem.css'

const AddInventoryItem = () => {
	const [user, loading, error] = useAuthState(auth);
	const [show, setShow] = useState(false);

	const handleAddItemSubmit = event => {
		event.preventDefault();
		setShow(true)
		const name = event.target.name.value;
		const price = event.target.price.value;
		const quantity = event.target.quantity.value;
		const image = event.target.image.value;
		const supplier = event.target.supplier.value;
		const description = event.target.description.value;
		// console.log(user?.email,name, price,quantity, image, supplier, description);
		const doc ={
			email: user.email,
			name,
			price,
			quantity,
			image,
			supplier,
			description
		};
		fetch('https://morning-refuge-91739.herokuapp.com/addItem', {
			method:'POST',
			headers:{
				'content-type':'application/json'
			},
			body: JSON.stringify(doc)
		})
		.then(res => res.json())
		.then(data => {
			setShow(false);
			toast.success('Successfully Item Added');
		});

		event.target.reset();
	}
	return (
		<div>
			<Headers></Headers>
			<div style={{paddingTop:'70px'}} className='container addInventoryItem mx-auto'>
				<h3 className='text-center'>Add Inventory Item</h3>
				{
					show?
					<div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
						<Loading></Loading>
					</div>
					:
					<form onSubmit={handleAddItemSubmit} className='additem-form'>
					<input type="text" name='name' placeholder='Name'  required/>
					<input type="number" name='price' placeholder='Price'  required/>
					<input type="number" name='quantity' placeholder='Quantity' required />
					<input type="text" name='image' placeholder='Image Link'  required/>
					<input type="text" name='supplier' placeholder='Supplier'  required/>
					<textarea name="description" id="" cols="30" rows="10" required></textarea>
					<button  type='submit' className='update-stock-btn' >Submit Item</button>
					</form>
				}

			</div>
			<Footer></Footer>
		</div>
	);
};

export default AddInventoryItem;