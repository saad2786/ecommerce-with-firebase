import React, { useState } from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import './Slider.scss'

const Data = [
  'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
]

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  function nextSlide() {
    setCurrentSlide((current) => {
      return current === 2 ? 0 : current + 1
    })
  }
  function previousSlide() {
    setCurrentSlide((current) => {
      return current === 0 ? 2 : current - 1
    })
  }
  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={Data[0]} alt="" />
        <img src={Data[1]} alt="" />
        <img src={Data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={previousSlide}>
          <ArrowBackOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardOutlinedIcon />
        </div>
      </div>
    </div>
  )
}
