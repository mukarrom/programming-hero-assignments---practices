import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Courses></Courses>
            <Contact></Contact>
        </div>
    );
};

export default Home;