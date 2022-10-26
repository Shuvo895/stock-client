import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../images/banner/alexandre-van-thuan-mr9FouttLGY-unsplash.jpg';
import banner2 from '../../../images/banner/charles-forerunner-3fPXt37X6UQ-unsplash.jpg';
import banner3 from '../../../images/banner/mike-kononov-lFv0V3_2H6s-unsplash.jpg';

const Banner = () => {
	return (
		<Carousel fade style={{paddingTop:'70px'}}>
		<Carousel.Item>
			<div className='banner-img1'></div>
			<Carousel.Caption className='banner-info mx-auto'>
			<h4>Manage laptop on stock easily</h4>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<div className='banner-img2'></div>
			<Carousel.Caption className='banner-info mx-auto'>
			<h4>Big laptop stock in the world</h4>
			</Carousel.Caption>
		</Carousel.Item>
		</Carousel>
	);
};

export default Banner;