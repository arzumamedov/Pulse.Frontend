import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Details.scss"
import { Helmet } from 'react-helmet'

function Detail() {
    const [detail, setDetail] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch("http://localhost:2020/" + id)
            .then((res) => res.json())
            .then((api) => setDetail(api))
    }, [])

    return (
        <>
    <Helmet><title>Detail</title></Helmet>

            <ul className='elements'>
                <li>Name:{detail.name}</li>
                <li>Title:{detail.title}</li>
                <li>Price:{detail.price}$</li>
            </ul>
        </>
    )
}

export default Detail