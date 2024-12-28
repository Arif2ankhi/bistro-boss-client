import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImage from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item'>
            <SectionTitle
            subHeading="check it Out"
            heading="Featured Item"
            ></SectionTitle>
            <div className='md:flex justify-center items-center py-20 px-36 pt-12'>
                <div>
                    <img src={featuredImage} alt=""/>
                </div>
                <div className='md: ml-10 text-white pt-10my-20'>
                    <p> Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className='btn btn-outline'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;