import React from 'react';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Features from '../Features/Features';
import Products from '../../Items/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Features></Features>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;