import React from 'react'
import './Header.css'

import logo_icon from './Assets/THE DESSERT LOGO-NEW-1 1.png'
import search_icon from './Assets/Search.png'
import hamburger_icon from './Assets/bx-menu 1.png'
import cart_icon from './Assets/bxs-cart 2.png'

const Header = () => {
    return (
        <>
            <div className='navbar'>
                <div className='nav-logo'>
                    <img src={logo_icon} />
                </div>
                <div className='nav-options'>
                    <ul>
                        <li><a>% Offers</a></li>
                        <li><label htmlFor="product">Products</label><select name='product' id='product'></select></li>
                        <li>Find Us</li>
                        <li><img src={search_icon} />Search</li>
                    </ul>
                </div>
                <div className='nav-profile'>
                    <div className='cart profile'>
                        <img src={cart_icon} />
                        <span>1</span>
                    </div>
                    <div className='hamburger profile'>
                        <span>Hi, Rohan</span>
                        <img src={hamburger_icon} />
                    </div>
                </div>
            </div>
            <hr></hr>
        </>
    )
}

export default Header;