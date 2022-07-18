import React from 'react'
import {NavLink} from 'react-router-dom'
import './HeaderLinks.scss'

const HeaderLinks = () => {
    return (
        <>
            <ul>
                <li><NavLink exact activeClassName="active" to='/'>Home</NavLink></li>
                <li><NavLink activeClassName="active" to='/about'>About</NavLink></li>
                <li><NavLink activeClassName="active" to='/referrals'>Referrals</NavLink></li>
                <li><NavLink activeClassName="active" to='/contact'>Contact</NavLink></li>
            </ul> 
        </>
    )
}

export default HeaderLinks