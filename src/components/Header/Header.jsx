import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
    <div className="background-logo">
        <a href='/' className='logo'></a>
    </div>
    <div className='container'>
        <a className="logo_company">
            <img src='#' className='icon'/>
            <h2 className='hobby'>Hobby</h2>
        </a>
        <div className="nav">
            <Link to='/' className='Link'>Home</Link>
            <Link to='/about' className='Link'>AboutUs</Link>
            <Link to='/service' className='Link'>Service</Link>
            <Link to='/contact' className='Link'>Contact</Link>
            {/* <Link to='/login' className='login'>Login</Link> */}
        </div>
    </div>
</div>

  )
}

export default Header