import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <nav>
        <div className="navLeft">
          <p>Pulse<span>.</span></p>
        </div>
        <div className="navCenter">
          <ul>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/add'}><li>Add</li></Link>
            <Link to={'/wishlist'}><li>Wishlist</li></Link>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="navRight">
          <p>Reservations</p>
          <i class="fa-solid fa-phone"></i>
          <span>652-345 3222 11</span>
        </div>
      </nav>
    </>
  )
}

export default Navbar