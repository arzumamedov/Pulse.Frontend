import React from 'react'
import './OurMenu.scss'
function OurMenu() {
    return (
        <>
            <div className="ourMenu">
                <i class="fa-solid fa-utensils"></i>
                <div className='ourMenuText'>
                    <div className='lineLeft'>
                    </div>
                    <p>Our Services</p>

                    <div className='lineRight'></div>
                </div>
                <div className="cardsMenu">
                    <div className="card1">
                        <i class="fa-solid fa-mug-hot"></i>
                        <h5>Breakfast</h5>
                        <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.</p>
                    </div>
                    <div className="card1">
                        <i class="fa-solid fa-cake-candles"></i>                <h5>Brunch</h5>
                        <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.</p>
                    </div>
                    <div className="card1">
                        <i class="fa-solid fa-calendar-days"></i>               <h5>Lunch</h5>
                        <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.</p>
                    </div>
                    <div className="card1">
                        <i class="fa-solid fa-burger"></i>               <h5>Dinner</h5>
                        <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurMenu