import React from 'react';

const Footer = () => {
    return(
        <div className = 'footer'>
            <div className ='container'>
                <h2 className = 'footer__heading'>Let's Connect </h2>
                <div className ='social-links'>
                    <a href = "https://github.com/anurag4998" target="_blank"><i className="devicon-github-original"></i></a>
                    <a href = "https://twitter.com/Anurag4998" target="_blank"> <i className="devicon-twitter-original"></i></a>
                    <a href = "https://www.linkedin.com/in/anurag-agrawal-674406164/" target="_blank"><i className="devicon-linkedin-plain"></i></a>
                </div>
                <hr/>
                <p className="footer__text">© 2021 - Made with Love</p>
            </div>
        </div>
    )
}

export default Footer