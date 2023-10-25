import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption = [
        {id:1, name: 'Free', price: 0, benefits: [
            'lifetime free', 
            'unlimited deals', 
            'localized deals', 
            'fantastic deals', 
            'crazy deals'
        ]},
        {id:2, name: 'Reguler', price: 9.99, benefits: [
            'everything on free', 
            'unlimited deals', 
            'localized deals', 
            'fantastic deals', 
            'crazy deals'
        ]},
        {id:3, name: 'Premium', price: 19.9, benefits: [
            'everything on Regular', 
            'unlimited deals', 
            'localized deals', 
            'fantastic deals', 
            'crazy deals'
        ]},
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best deal of the town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sit doloremque facilis quaerat repudiandae deserunt minus, numquam natus nostrum qui.</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOption.map(option=> <PricingOption 
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;