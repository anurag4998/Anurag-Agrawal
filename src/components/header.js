import React from 'react';
import hero from '../../src/images/hero.jpg'
import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";

const Header = () => {
    return (
        <div className='header__container' id='header'>
            <div className='header__container__box'>

                <div className='header__container--text'>
                    <Fade>
                        <h1 className = 'heading'> Hey there! I'm <span className ='name'> Anurag Agrawal </span> </h1>
                    </Fade>
                    <Zoom delay = {500}>
                        <p className = 'subheading'>A Full Stack Developer and programmer from India</p>
                        <div className='links'>
                            <a className='links_1' target = "_blank" href='https://drive.google.com/file/d/1fxNhloHoebF60rSUzSjcQ_3cXnUpq0CG/view?usp=drive_link'>Resume</a>
                        </div>
                    </Zoom>
                </div>
                <Fade direction="right" className = "header__container--image" >
                        <img src={hero} alt="Hero" />
                </Fade>
               
            </div>
        </div>
    )
}

export default Header;

// <a href='https://www.freepik.com/vectors/work'>Work vector created by stories - www.freepik.com</a>