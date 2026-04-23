import React from 'react'
import Slider from '../components/home/Slider.jsx'
import Handpicked from '../components/home/Handpicked.jsx'
import Categories from '../components/home/Categories.jsx'
import Banner from '../components/home/Banner.jsx'

function Home() {
  return (
    <div>
      <Slider />
      <Handpicked />
      <Categories />
      <Banner />
    </div>
  )
}

export default Home
