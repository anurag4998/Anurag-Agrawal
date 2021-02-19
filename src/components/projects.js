import React, { useEffect , useState} from 'react';
import details from '../projectholder'
const Projects = () => {
    return(
        <div className = 'projects'>
            <div className='project__container__heading'>
                <div className='project__container__heading__main'>
                    Projects
                </div>
                <div className='project__container__heading__sub'>
                    All of my projects, major and minor, so far.
                </div>
            </div>
            <div className = 'list'>
                <div className = 'row'>
                    {details.map(project => {
                        return(
                            <div key={project.title}className = 'col-12 col-md-6 col-xl-4 '>
                                    <div className = 'projectwrapper'>
                                        <div className = 'projectimagecontainer'>
                                            <img className = 'project__image' src = {project.path} ></img>
                                            <a href = {project.code} className = 'popupbuttons code' target = "_blank">Code</a>
                                            <a href = {project.demo} target = "_blank" className = 'popupbuttons live'>Live</a>
                                        </div>
                                 
                                    <div className = 'projectdetailscontainer'>
                                        <h2 className = 'project__title'>{project.title}</h2> 
                                        <h2 className = 'project__description'>{project.description ? project.description : undefined}</h2>
                                    </div>
                            </div>                               
                        </div>
                        )})}
                </div>
            </div>
        </div>
    )
}

export default Projects

