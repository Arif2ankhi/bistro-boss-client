import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular  = menu.filter(item =>item.category ==='popular')

return(

       <section className='mb-12'>
        <SectionTitle
            heading= "From our Menu"
            subHeading="Popular Items"
        ></SectionTitle>
        <div className='grid md:grid-cols-2 gap-10'>
            {
                popular.map(item=> <MenuItem
                key={item._id}
                item={item}
                ></MenuItem > )
            }
        </div>
        <div className='text-center'>
        <button className='btn btn-outline border-0 border-b-4 mt-4 text-center'>View Full Menu</button>
        </div>
       </section>
    );
};

export default PopularMenu;