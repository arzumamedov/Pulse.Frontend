import React, { useContext, useEffect, useState } from 'react'
import './OurServices.scss'
import { Link } from 'react-router-dom'
import { WishlistContext } from '../../context/WishlistContext'
function OurServices() {
    const [data, setData] = useState([])
    const [sort, setSort] = useState(null)
    const {addWishlist} = useContext(WishlistContext)


    useEffect(() => {
        fetch("http://localhost:2020/")
            .then((res) => res.json())
            .then((api) => setData(api))
    }, [])



    return (
        <>
            <div className="ourServices">
                <i class="fa-solid fa-utensils"></i>
                <div className='ourServicesText'>
                    <div className='lineLeft'>
                    </div>
                    <p>Our Menu</p>

                    <div className='lineRight'></div>
                </div>
                <ul>
                    <li>Breakfast</li>
                    <li>Brunch</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                    <li onClick={() => setSort({ property: "price", asc: true })}>A-z</li>
                    <li onClick={() => setSort({ property: "price", asc: false })}>Z-a</li>
                    <li onClick={() => setSort(null)}>Defult</li>
                </ul>
                <div className='menus'>
                    {[...data]

                        .sort((a, b) => {
                            if (!sort) {
                                return 0
                            }
                            else if (sort.asc) {
                                return (a[sort.property] > b[sort.property]) ? 1 : ((b[sort.property] > a[sort.property]) ? -1 : 0)
                            }
                            else if (sort.asc === false) {
                                return (a[sort.property] < b[sort.property]) ? 1 : ((b[sort.property] < a[sort.property]) ? -1 : 0)

                            }
                        })
                        .map((x) => (
                            <div className="card">
                                <div className='menuText'>
                                    <h4>{x.name}</h4>
                                    <p>{x.title}<span>${x.price}</span></p>
                                </div>
                                <div className='btns'>
                                    <button>Add</button>
                                    <i onClick={()=>addWishlist(x)} class="fa-regular fa-heart"></i>
                                    <Link to={'/detail/' + x._id}><button>Detail</button></Link>
                                </div>

                            </div>
                        ))}
                </div>
                <button>See More</button>
            </div>
        </>
    )
}

export default OurServices