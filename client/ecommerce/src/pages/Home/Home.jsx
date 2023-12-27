import React from 'react'
import Catagories from '../../components/Catagories/Catagories'
import Contact from '../../components/Contact/Contact'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import './Home.scss'

export default function Home() {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="featured" />
      <Catagories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  )
}
