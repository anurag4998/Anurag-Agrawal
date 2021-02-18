import React, { useState } from 'react';
import hamburger from '../images/icon-hamburger.svg';
const Navbar = () => {
    const [toggle, setToggle] = useState(1);
    const handleClick = (event) => {
        event.preventDefault()
        if (!toggle)
            setToggle(!toggle)
        else
            setToggle(0)
    }
    return (

        <div className='navbar'>
            <div className='navbar_container'>

                <div className='navbar--left'>
                    <img alt='logo'></img>
                </div>
                <div className='navbar--right'>

                    <ul className={toggle ? 'navbar--right__links' : 'navbar--right__links--display'}>
                        <li><a> About Me</a> </li>
                        <li><a> Projects</a></li>
                        <li><a>CONTACT</a></li>

                    </ul>

                    <a href='#ham' onClick={handleClick} className='hamburger'><img src={hamburger} alt='menu' id='ham'></img></a>

                </div>
            </div> 

        </div>

    )
}


export default Navbar