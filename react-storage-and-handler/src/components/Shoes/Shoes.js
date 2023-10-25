import React from 'react';
import {add} from '../../utilities/calculate';

const Shoes = () => {
    const first = 10;
    const second = 12;
    const total = add(first, second)

    return (
        <div>
            <h2>Welcom to Shoes Store</h2>
            <p>total: {total}</p>
        </div>
    );
};

export default Shoes;