import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistContext'
import { Link } from 'react-router-dom'
import './Wishlist.scss'
import { Helmet } from 'react-helmet'

function Wishlist() {
    const { wishlist, addWishlist } = useContext(WishlistContext)
    return (
        <>
            <Helmet><title>Wishlist</title></Helmet>

            <div className='menus'>
                {wishlist.map((item) => (
                    <div className="cardd">
                        <div className='menuText'>
                            <h4>{item.name}</h4>
                            <p>{item.title}<span>${item.price}</span></p>
                        </div>
                        <div className='btns'>
                            <button>Add</button>
                            <i onClick={() => addWishlist(item)} class="fa-regular fa-heart"></i>
                            <Link to={'/detail/' + item._id}><button>Detail</button></Link>
                        </div>

                    </div>
                ))}
            </div>

        </>
    )
}

export default Wishlist