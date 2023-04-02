import React from 'react';
import Feature from '../Feature/Feature';

const PriceCart = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 mr-3 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-4xl font-extrabold text-purple-700'>{price.price}</span>
                <span className='text-2xl text-white'>/mon</span>
            </h2>
            <h5 className='text-2xl font-bold text-center'>{price.name}</h5>
            <p className='font-bold underline text-white'>Features: </p>
            {
                price.features.map((feature, idx) => <Feature
                key={idx}
                feature={feature}
                ></Feature>)
            }
            <button className='w-full mt-auto hover:bg-green-700 bg-green-500 py-2 rounded-md text-white font-bold'>Buy Now</button>
        </div>
    );
};

export default PriceCart;