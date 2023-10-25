import React from 'react';
import quote from '../../assets/icons/quote.svg';

const Testimonial  = () => {
    return (
        <section className='my-10'>
            <div className="flex justify-between">
                <div className="">
                    <h5 className='text-primary font-bold'>Testimonial</h5>
                    <h3 className='text-2xl'>What Our Patients Says</h3>
                </div>
                <div className="w-24 lg:w-48">
                    <img src={quote} alt="" />
                </div>
            </div>
            <div className="">
                
            </div>
        </section>
    );
};

export default Testimonial ;