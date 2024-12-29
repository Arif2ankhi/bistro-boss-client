import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImage from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-10 my-20'>
            <SectionTitle
            subHeading="check it Out"
            heading="Featured Item"
            ></SectionTitle>
            <div className='md:flex justify-center items-center  bg-slate-500 bg-opacity-60 py-20 px-36 pt-12'>
                <div>
                    <img src={featuredImage} alt=""/>
                </div>
                <div className='md: ml-10 '>
                    <p> Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
