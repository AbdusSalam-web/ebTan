import React from 'react'
import Banner from '../components/Banner';
import WhyUs from '../components/WhyUs';
import HandWash from '../components/HandWash';
import Products from '../components/common/Products';
import Review from '../components/common/Review';
const Home = () => {
  return (
    <>
      <Banner />
      <WhyUs />
      <HandWash />
      <Products />
      <Review />
    </>
  );
}

export default Home