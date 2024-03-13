import React from 'react'
import './Landing.css'

import croissant1_icon from '../LandingPage//Assets/croissant1.png'
import croissant2_icon from '../LandingPage//Assets/croissant2.png'
import cookie_icon from '../LandingPage/Assets/cookie.png'
import donut_icon from '../LandingPage/Assets/donut.png'
import drink_icon from '../LandingPage/Assets/drink.png'
import toast_icon from '../LandingPage/Assets/toast.png'

const Landing = () => {
    return (
        <div className='LandingPage'>
            <div className='Desc'>
                <h1>Delicious treats straight from the oven, still warm and inviting</h1>
                <a>Learn more about our process &nbsp; <span>&#8600;</span> </a>
            </div>
            <ul className='images'>
                <li><img src={cookie_icon} id='cookie'/></li>
                <li><img src={croissant1_icon} id='croissant1'/></li>
                <li><img src={donut_icon} id='donut'/></li>
                <li><img src={drink_icon} id='drink'/></li>
                <li><img src={croissant2_icon} id='croissant2'/></li>
                <li><img src={toast_icon} id='toast'/></li>
            </ul>
            <ul className='symbols'>
                <li><div className='circle one'></div></li>
                <li><div className='circle two'></div></li>
                <li><div className='circle three'></div></li>
                <li><div className='circle four'></div></li>
            </ul>
        </div>
    )
}

export default Landing;
