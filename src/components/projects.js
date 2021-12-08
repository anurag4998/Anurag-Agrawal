import React from 'react';
import details from '../projectholder'
import Fade from 'react-reveal/Fade';
import { Link} from "react-router-dom";

const Projects = () => {

    const left = {left : '33%', width: '10rem'}
    return(
        <div className = 'projects Container' id = "Projects">
            <div className='project__container__heading'>
                <div className='project__container__heading__main'>
                    Projects
                </div>
                <div className='project__container__heading__sub'>
                    My projects, major and minor, so far.
                </div>
            </div>

            <div className = 'list'>
                <div className = 'row'>
                     

                    {details.map(project => {
                            return(
                                <div key={project.title}className = 'col-12 col-md-6 col-xl-4 '>
                                    <Fade bottom>
                                            <div className = 'projectwrapper'>
                                                <div className = 'projectimagecontainer'>
                                                    <img className = 'project__image' src = {project.path} ></img>
                                                    <a href = {project.code} className = 'popupbuttons code' target = "_blank">Code</a>
                                                    <a href = {project.demo} target = "_blank" className = 'popupbuttons live'>Live</a>
                                                </div>
                                        
                                                <div className = 'projectdetailscontainer'>
                                                    <h2 className = 'project__title'>{project.title}</h2> 
                                                    <span className = 'stack'>{project.pill}</span>
                                                    <h2 className = 'project__description'>{project.description ? project.description : undefined}</h2>
                                                </div>
                                            </div>  
                                    </Fade>                             
                                </div>
                     )})}
                    <div className = 'col-12 col-md-6 col-xl-4 '>
                             <Fade bottom>
                                    <div className = 'projectwrapper videowrapper'>
                                        <div className = 'projectimagecontainer videocontainer'>
                                            <iframe className = 'project__image' src="https://drive.google.com/file/d/1MN_vtPYZLgQ-UIIQw-jmdch5K9WVyAsG/preview" width="640" height="480"></iframe>
                                            <Link to  = "/project/iot" className = 'popupbuttons live'>Read More</Link>
                                        </div>
                                 
                                        <div className = 'projectdetailscontainer'>
                                            <h2 className = 'project__title'>IOT Enabled Kitchen Trolley System</h2> 
                                            <h2 className = 'project__description'>Monitors the real time quantity of Ingredients and notifies user when quantity falls below threshold</h2>
                                        </div>
                                    </div>  
                            </Fade>  
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Projects

// <div className = 'col-12 col-md-6 col-xl-4 '>
//                         <Fade bottom>
//                             <div className = 'projectwrapper'>
//                                 <div className = 'projectimagecontainer'>
//                                     <img className = 'project__image' src = "/images/airline.png"></img>
//                                     <Link to = "/project/airline" style = {left} className = 'popupbuttons live'>Read More</Link>                                
//                                 </div>
                        
//                                 <div className = 'projectdetailscontainer'>
//                                     <h2 className = 'project__title'>ASAY Airlines</h2> 
//                                     <span className = 'stack'>Angular</span>
//                                     <h2 className = 'project__description'>Airline Reservation system built using ASP.NET MVC, frontend in angular</h2>
//                                 </div>
//                             </div>  
//                         </Fade> 
//                     </div>