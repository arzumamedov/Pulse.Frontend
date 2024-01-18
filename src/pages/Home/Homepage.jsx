import React from 'react'
import Welcome from '../../components/Welcome/Welcome'
import OurServices from '../../components/OurServices/OurServices'
import Slider from '../../components/Slider/Slider'
import { Helmet } from 'react-helmet'
import OurMenu from '../../components/OurMenu/OurMenu'

function Homepage() {
  return (
    <>
    <Helmet><title>Home</title></Helmet>
      <Slider/>
      <Welcome/>
      <OurMenu/>
      <OurServices/>
    </>
  )
}

export default Homepage