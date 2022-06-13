import React from 'react'
import style from '../styles/routes.module.css'
import Link from 'next/link'
const RouteBox = ({ imgpath, alt, destination, time }) => {
    return (
        <div className={style.route_container}>
            <img src={imgpath} alt={alt} />
            <div>
                <h3>{destination}</h3>
                <h4>Time : {time}</h4>
                <Link href='/booking'>
                    <a className={`${style.book_btn_sm} btn`}>Book now</a>
                </Link>
            </div>
        </div>
    )
}

export default RouteBox