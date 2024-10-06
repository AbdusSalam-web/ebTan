import React from 'react'
import Banner from '../components/Banner';
import WhyUs from '../components/WhyUs';
import HandWash from '../components/HandWash';
import Products from '../components/common/Products';
import Review from '../components/Review';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <>
      <Banner />
      <WhyUs />
      <HandWash />
      <Products />
      <Review />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Home