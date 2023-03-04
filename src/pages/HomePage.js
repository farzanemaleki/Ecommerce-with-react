import React from 'react';
import Title from '../components/common-ui/Title';
import HighLight from '../components/home/HighLight';
import NewProducts from '../components/home/newProducts/NewProducts';
import Slider from '../components/home/Slider';

const HomePage = () => {
  return (
    <>
    <Slider />
    <HighLight />
    <Title>Our Products</Title>
    <NewProducts />

    </>
  )
}

export default HomePage;