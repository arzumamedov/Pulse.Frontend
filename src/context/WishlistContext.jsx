import React, { useState } from 'react'
import { createContext } from 'react'
import useLocalStorage from '../Hooks/useLocalStorage'
export const WishlistContext = createContext()

function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useLocalStorage("wishlist",[])
    function addWishlist(item) {
        const index = wishlist.findIndex((x) => x._id === item._id)
        if (index === -1) {
            setWishlist([...wishlist, item])
            return
        }
        setWishlist(wishlist.filter((x) => x._id !== item._id))
    }

    return (
        <>
            <WishlistContext.Provider value={{ wishlist, addWishlist }}>{children}</WishlistContext.Provider>
        </>
    )
}

export default WishlistProvider