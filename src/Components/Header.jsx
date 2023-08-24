import React from 'react'
import AccountCircle from './AccountCircle'
import logo from '../Assets/logo.png'

const Header = () => {
    return (

        <div className='header'>
            <div className='logo'>
            <img src={logo} style={{ width: '60px' }} />
            </div>
            <div className='userIcon'>
                <AccountCircle />
            </div>
        </div>
    )
}

export default Header