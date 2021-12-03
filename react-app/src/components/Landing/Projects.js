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
                    <p className="project-description" >
                      <ul>
                        <li>Designed a search feature to allow users to quickly and effectively locate businesses.</li>
                        <li>Utilized Google API to implement custom maps and markers allowing for a more realistic approach to my app of a fictional world.</li>
                        <li>Implemented a custom rating system to create a more dynamic and intuitive feel and allow for a more immersive user experience.</li>
                      </ul>
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
                <div className="project">
                    <img className="project-image" src="https://github.com/nevinchow/SpotifyProject/raw/SiteScreenshots/react-app/src/images/site-screenshots/Playlist-View.png" alt="kelp" />
                    <a href="https://musichub-aa.herokuapp.com/main" target="_blank" rel="noreferrer" className='project-link'>MusicHub - Spotify clone</a>
                    <p className="project-description">
                      <ul>
                      <li>Constructed an algorithm to display unique album covers in a collage based on songs in a user’s playlist.</li>
                      <li>Utilized React Audio Player to create an interface for users to play music from their queue continuously while navigating the website.</li>
                      <li>Designed original UI using HTML and CSS to create a user-friendly experience when creating playlists.</li>
                      </ul>
                    </p>
                    <p><a className="git-link" href="https://github.com/nevinchow/MusicHub" target="_blank" rel="noreferrer">Github Repository</a></p>

                </div>
                <div className="project">
                    <img className="project-image" src="https://camo.githubusercontent.com/842f8fdde5f60bcff4c11be7772ed9f2d3bdc842ab5c583fcb81e1705b6af8f0/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4a364932534f3543554c394e656562374f452f67697068792e676966" alt="kelp" />
                    <a href="https://paw-meet.herokuapp.com/" target="_blank" rel="noreferrer" className='project-link'>Paw Meet</a>
                    <p className="project-description">
                      <ul>
                      <li>Incorporated thousands of lines of seed data to display accurate and ample dog breed information for users to discover. </li>
                      <li>Implemented a custom scoring algorithm that compared breed traits to a user quiz to find the best dog breed match in order to improve the interactivity of my application.</li>
                      <li>Implemented image uploading to create a more intuitive interface for uploading images.</li>
                      </ul>
                    </p>
                    <p><a className="git-link" href="https://github.com/Dusttoo/PawMeet" target="_blank" rel="noreferrer">Github Repository</a></p>

                </div>
              </div>
        </div>
    </>
  );
}

export default Projects;