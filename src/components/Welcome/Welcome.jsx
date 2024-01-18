import React from 'react'
import './Welcome.scss'
function Welcome() {
  return (
    <>
      <div className='welcome'>
        <i class="fa-brands fa-scribd"></i>
        <div className='welcomeText'>
          <div className='lineLeft'>
          </div>
          <p>Welcome</p>

          <div className='lineRight'></div>
        </div>
        <div className='welcomeYear'>
          <div className='yearText'>
            <p className='p1'>2002</p>
            <p className='p2'>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
          </div>
          <div className='yearText'>
            <p className='p1'>2010</p>
            <p className='p2'>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
          </div>
          <div className='yearText'>
            <p className='p1'>2008</p>
            <p className='p2'>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
          </div>
        </div>
        <img src="https://preview.colorlib.com/theme/pulse/img/sign.png" alt="" />
      </div>
    </>
  )
}

export default Welcome