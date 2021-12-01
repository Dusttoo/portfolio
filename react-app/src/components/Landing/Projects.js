import React from 'react';
import './Landing.css'


function Projects(){


  return (
    <>
        <div className="portfolio-images">
            <h2 className="project-title">Projects</h2>
              <div className="portfolio-row">
                <div className="project">
                    <img className="project-image" src="https://i.imgur.com/Kvk8INA.gif" alt="kelp" />
                    <a href="https://kelp-reviews.herokuapp.com/" target="_blank" rel="noreferrer" className='project-link'>Kelp: Yelp Clone</a>
                    <p className="project-description">A Yelp clone created using an express.js backend
                        and React with Redux on the front end.
                    </p>
                    <p><a className="git-link" href="https://github.com/Dusttoo/kelp" target="_blank" rel="noreferrer">Github Repository</a></p>
                </div>
                <div className="project">
                    <img className="project-image" src="https://media.giphy.com/media/jle7a0QRHbDejehEvc/giphy.gif" alt="kelp" />
                    <a href="https://michelle-mumphrey.herokuapp.com/" target="_blank" rel="noreferrer" className='project-link'>Teacher Portfolio</a>
                    <p className="project-description">A portfolio used to display information about a teacher. Created using an express.js backend
                        and React with Redux on the front end.
                    </p>
                </div>
              </div>
        </div>
    </>
  );
}

export default Projects;