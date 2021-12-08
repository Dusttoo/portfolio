import React from 'react';
import ProjectModal from '../ProjectModal';
import './Landing.css'


function Projects(){

  const projects = [
    {
    id: 1,
    name: 'Kelp: Yelp Clone',
    link: 'https://kelp-reviews.herokuapp.com/',
    points: ['Designed a search feature to allow users to quickly and effectively locate businesses.',
    'Utilized Google API to implement custom maps and markers allowing for a more realistic approach to my app of a fictional world.',
    'Implemented a custom rating system to create a more dynamic and intuitive feel and allow for a more immersive user experience.'
  ],
    github: 'https://github.com/Dusttoo/kelp',
    image: 'https://i.imgur.com/Kvk8INA.gif'
  }, {
    id: 2,
    name:'Teacher Portfolio',
    link: 'https://michelle-mumphrey.herokuapp.com/',
    points: ['A portfolio used to display information about a teacher. Created using an express.js backend and React with Redux on the front end.'],
    github: 'https://github.com/Dusttoo',
    image: 'https://media.giphy.com/media/jle7a0QRHbDejehEvc/giphy.gif'
  }, {
    id: 3,
    name: 'Paw Meet',
    link: 'https://paw-meet.herokuapp.com/',
    points: ['Incorporated thousands of lines of seed data to display accurate and ample dog breed information for users to discover.',
    'Implemented a custom scoring algorithm that compared breed traits to a user quiz to find the best dog breed match in order to improve the interactivity of my application.',
    'Implemented image uploading to create a more intuitive interface for uploading images.'],
    github: 'https://github.com/Dusttoo/PawMeet',
    image: 'https://camo.githubusercontent.com/842f8fdde5f60bcff4c11be7772ed9f2d3bdc842ab5c583fcb81e1705b6af8f0/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4a364932534f3543554c394e656562374f452f67697068792e676966',
  }, {
    id: 4,
    name: 'MusicHub - Spotify clone',
    link: 'https://musichub-aa.herokuapp.com/main',
    points: ['Constructed an algorithm to display unique album covers in a collage based on songs in a user’s playlist.',
    'Utilized React Audio Player to create an interface for users to play music from their queue continuously while navigating the website.',
    'Designed original UI using HTML and CSS to create a user-friendly experience when creating playlists.',
  ],
    github: 'https://github.com/nevinchow/MusicHub',
    image: 'https://media.giphy.com/media/LWW1gQfoN5rbPw3cQc/giphy.gif',
  }
  ]
  

  return (
    <>
        <div className="portfolio-images">
            <h2 className="project-title">Projects</h2>
              <div className="portfolio-row">
                {projects.map(project => (
                  <div className="project">
                    <img className="project-image" src={project.image} alt="kelp" />
                    <a href={project.link} target="_blank" rel="noreferrer" className='project-link'>{project.name}</a>
                    <ProjectModal project={project}/>
                  </div>
                ))}
                
                
                
              </div>
        </div>
    </>
  );
}

export default Projects;