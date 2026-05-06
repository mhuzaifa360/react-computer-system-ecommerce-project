import React from 'react'
import Slider from '../components/home/Slider.jsx'
import Handpicked from '../components/home/Handpicked.jsx'
import Categories from '../components/home/Categories.jsx'
import Banner from '../components/home/Banner.jsx'
import MacBanner from '../components/home/MacBanner.jsx'
import FlashSales from '../components/home/FlashSales.jsx'
import Quality from '../components/home/Quality.jsx'

function Home() {
  return (
    <div>
      <Slider />
      <Handpicked />
      <Categories />
      <Banner />
      <FlashSales/>
      <Quality/>
      <MacBanner />

    </div>
  )
}

export default Home
