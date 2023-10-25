 import React, { useEffect, useState } from 'react';
import { addToDb, removeCart, deleteShoppingCart} from '../../utilities/storagedb';

 import './Cosmetics.css';
import { Total } from '../../utilities/calculate';


 const Cosmetics = () => {
     const [datas, setDatas]=useState([]);
     useEffect(()=>{
         fetch('data.json')
         .then(res=>res.json())
         .then(data=>setDatas(data))
     },[]);
  
const total = Total(datas);

     return (
         <div>
             <h2>Welcome to my cosmetic website</h2>
             <h4>Total Products Price: ${total}</h4>
             {
                 datas.map(data=>
                    <div key={data.id} className="datas">
                
                        <p>Product ID: {data.id}</p>
                        <p>Product Name: {data.name}</p>
                        <p>Price: ${data.price}</p>
                        <button onClick={()=>addToDb(data.name)}>Add to local storage</button>
                        <button onClick={()=>removeCart(data.name)}>Remove</button>
                        <button onClick={deleteShoppingCart}>Delete cart</button>
                    </div>
                 )
             }
         </div>
     );
 };
 
 export default Cosmetics;