import React, { useEffect, useState } from 'react';
import PriceCart from '../PriceCart/PriceCart';

const PriceList = () => {
    const [prices,setPrices] = useState([])
    useEffect( () =>{
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setPrices(data));
    },[])
    return (
        <div>
            <h2 className='text-5xl text-center text-purple-950 bg-purple-300 font-bold p-4'>Awesome Price</h2>
            <div className='grid md:grid-cols-3 gap-3 mt-4 ml-6'>
            {
                prices.map(price => <PriceCart
                key={price.id}
                price={price}
                ></PriceCart>)
            }
            </div>
        </div>
    );
};

export default PriceList;