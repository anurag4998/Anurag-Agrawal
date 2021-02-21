import React, { Fragment } from 'react';
import Navbar from './navbar'
import Footer from './/footer'


const Iot = () => {
    return(
        <Fragment>
            <Navbar/>

            <article className = "infowrapper">
                    <div className = "infowrapper__heading">
                            <h1>IOT Enabled Kitchen
                            Trolley System</h1>
                    </div>  
                    <div className = "infowrapper__description">
                        <h2>Introduction</h2>
                        <p>The Working force multitasks by taking care of their professional duties as well as household chores. An intelligent trolley system is proposed to assist them. 
                           The IOT enabled kitchen trolley system is an attachment to
                        the already existing kitchen infrastructure.The proposed system can
                        monitor kitchen groceries and ease their management. Seamless integration with
                        current framework of grocery ordering apps is the functional value addition to the
                        proposed system.</p>

                        <h2>What was Used</h2>
                        <p>
                            The project involved designing a weigh pad, which was an essentially a load cell, with help of a micro
                            controller the realtime values were uploaded to the database, which was then fetched by the mobile 
                            app to indicate the quantity to the user. A notification was sent to the user when the quantity of 
                            dropped below a set threshold.
                            <br></br>
                            On integration with grocery ordering app APIs a system can be designed which will update the cart of the user
                            as soon as the quantity falls below a set threshold.
                        </p>
                    </div>    
            </article>

            <Footer/>
        </Fragment>
    )
}

export default Iot