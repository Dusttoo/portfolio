import React, { useState, useContext } from 'react';
import { useDispatch} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import './Project.css';

function Project({setShowModal, project }) {
  const close = () => {
    setShowModal(false)
  }


  return (
    <>
      <div className='project-modal-content'>
        <div className='close-container'>
          <FontAwesomeIcon icon={faX} className='close-icon' onClick={close}/>
        </div>
        <div className="modal-project">
          <div className='modal-project-image' style={{backgroundImage: `url(${project.image})`}} />
          <div className='modal-details'>
            <a href={project.link} target="_blank" rel="noreferrer" className='modal-project-link'>{project.name}</a>
            <p className="modal-project-description" >
              <ul className='points-list'>
                {project.points.map(point => (
                <li className='point'>{point}</li>
              ))}
              </ul>
            </p>
            <p className="modal-git-link"><a  href={project.github} target="_blank" rel="noreferrer">Github Repository</a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;