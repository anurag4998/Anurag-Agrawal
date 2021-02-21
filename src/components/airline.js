import React, { Fragment } from 'react';
import Navbar from './navbar'
import Footer from './/footer'


const Airline = () => {
    const left = {'background-color' : '#fefefe'}

    return(
        <Fragment>
            <Navbar style = {left}/>

            <article className = "infowrapper">

                <div className = "infowrapper__heading">
                    <h1>ASAY Airlines</h1>
                    <h3>An Airline Reservation System</h3>
                </div>  

                <div className = "infowrapper__description">
                    <h2>Introduction</h2>
                    <p>
                        The project requirement was to design a full fledged airline reservation System using MVC paradigm.
                        It had to be designed to provide functionalities such as :- <br></br> 
                        1) Searching for a flight on a particular date 
                        and filtering the results if available seats in a particular flight is less than number of seats user
                        wants to book.
                        <br></br>
                        2) Anyone can search flight, but only registered users will be able to book flights.
                        <br></br>
                        3) Calculating booking and cancellation amount dynamically.
                        <br></br>
                        4) Select seats in the flight.
                        <br></br>
                        5) User should be allowed to book tickets prior to at least 3 hours before departure time and a similar
                        constraint must be applied during the event of cancellation of a ticket.
                        <br></br>
                        6) Generate a Receipt for booked ticket.
                        <br></br>
                        7) An Admin module to perform CRUD operation on flight database.
                        
                    </p>
                    <h2>What was Used</h2>
                    <p>
                        The project was divided in two modules a user and an admin module.
                        Entity framework for .NET was the backend for the project, Entity framework eliminates the need for most of the data-access code that 
                        generally has to be written. MS-SQL Server, a SQL Database was used for the databse end of things and the View(frontend) was made using Angular.
                    </p>
                    <h2>View Code</h2>

                    <a href = "https://github.com/anurag4998/Airline" target = "_blank">Frontend</a>
                    <a href = "https://github.com/edsins/new_airline_api" target = "_blank">Backend</a>
                </div>

            </article>

            <Footer/>

        </Fragment>
    )
}

export default Airline