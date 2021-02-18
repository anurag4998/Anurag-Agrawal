import React from 'react';
import hero from '../../src/images/hero.jpg'
// import 482 from '../images/illustration-hero.svg';
const Header = () => {
    return (
        <div className='header__container' id='header'>
            <div className='header__container__box'>

                <div className='header__container--text'>
                    <h1 className = 'heading'> Hey there! I'm <span className ='name'> Anurag Agrawal </span> </h1>
                    <p className = 'subheading'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    <div className='links'>
                        <a className='links_1' href='#extensions'>See my projects</a>
                        <a className='links_2' href='#extensions'>Get it on Firefox</a>
                    </div>
                </div>
                <div className='header__container--image'>
                    <img src = {hero}></img>
                </div>
            </div>
        </div>
    )
}

export default Header;

// <a href='https://www.freepik.com/vectors/work'>Work vector created by stories - www.freepik.com</a>