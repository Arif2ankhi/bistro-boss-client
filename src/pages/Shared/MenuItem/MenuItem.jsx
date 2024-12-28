import React from 'react';
import { inGamut } from '../../../../node_modules/culori/src/clamp';

const MenuItem = ({item}) => {
    const  {name, image, price, recipe} = item;
    return (
        <div className='flex space-x-2'>
        <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]"src={image} alt= "" />

        <div className=''>
            <h2 className='uppercase'>{name}----</h2>
            
            <p>Recipe: {recipe}</p>
        </div>
        <p className='text-yellow-500'>Price: ${price}</p>
            
        </div>
    );
};

export default MenuItem;