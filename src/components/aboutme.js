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
                        <p>Hi, I am Anurag Agrawal, a frontend developer and on my way to become to a full stack developer.
                        <br></br> Presently living in Chennai, India and I have my Bachelor's degree in Electronics and Telecommunication.</p>

                        <p>
                            I am a self motivated and an enthusiastic learner and I love challenges, be it technical or interpersonal.

                            Seeing my ideas come to life excites me the most about frontend development or rather development
                            in general and I am really keen on discovering and learning more.
                        </p>
                        <p>If you wish to talk or collaborate or hire me feel free to hit me up, I have my socials down below. 👇</p>
                    </div>
                    <div className='about--image'>
                        <img className = 'personalpic' src = "/images/Anurag_Agrawal.jpeg"></img>
                    </div>
                </div>
            </div>

           
        </div>


    )
}

export default Faq;