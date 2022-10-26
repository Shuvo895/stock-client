import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Headers from '../../Shared/Headers/Headers';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import OutOfStock from '../OutOfStock/OutOfStock';
import TotalItems from '../TotalItems/TotalItems';
import './Home.css'

const Home = () => {
	return (
		<div>
			<Headers></Headers>
			<Banner></Banner>
			<InventoryItems></InventoryItems>
			<TotalItems></TotalItems>
			<OutOfStock></OutOfStock>
			<Footer></Footer>
		</div>
	);
};

export default Home;