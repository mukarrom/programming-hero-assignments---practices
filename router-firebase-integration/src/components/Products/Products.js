import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h2>Product page</h2>
            <p>{user ? user.displayName : "Please, Login"}</p>
        </div>
    );
};

export default Products;