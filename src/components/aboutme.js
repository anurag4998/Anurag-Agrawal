import React from 'react';


const Faq = () => {
    return (
        <div className='About' id = "About">
            <div className='About__container'>
                <div className='About__container__heading'>
                    <div className='About__container__heading__main'>
                        About Me
                    </div>
                </div>
                <div className =  'About__container__text__wrapper'>
                    <div className = 'about--text'>
                        <p>Hi, I am Anurag Agrawal, a full stack developer currently working with Dassault Systemes.
                           I'm a self motivated learner and I love challenges.
                           Seeing my ideas come to life excites me the most about development
                           and I am really keen on learning and discovering more.</p>

                        <p>
                        I am presently living in Bengaluru, India. I have graduated in engineering with specialization in the domain of electronics and telecommunication.
                        </p>
                        <p>If you wish to talk or collaborate or feel I am suitable for a certain position in your organisation, do hit me up, I have my socials down below. 👇</p>
                    </div>
                    <div className='about--image'>
                        <img className = 'personalpic' src = "/images/Anurag_Agrawal.jpg"></img>
                    </div>
                </div>
            </div>

           
        </div>


    )
}

export default Faq;