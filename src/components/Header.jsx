import React from 'react'
import './Header.css'
import Logo from '../images/logo.png'

const Header = () => {
    return (
        <div className='navbar'>
        <div style={{cursor:'pointer', display:'flex'}}>
        <img className='img' src={Logo}  alt='logo' />
        <p className='text' >My Notes</p>
        </div>
        <input type='text' placeholder='search' className='search' />
        </div>
    )
}

export default Header
