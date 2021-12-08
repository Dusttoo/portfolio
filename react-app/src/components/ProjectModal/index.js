import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Project from './Project';
import './Project.css';


function ProjectModal({project}) {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState(false)
  const showText = () => {
    setText(true)
  }

  const hideText = () => {
    setText(false)
  }

  return (
    <>
      <button className="project-button" 
      onClick={() => setShowModal(true)} 
      onMouseEnter={showText}
      onMouseLeave={hideText}>{text && <p className='learn'>Learn More</p>}</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false) }>
          <Project setShowModal={setShowModal} project={project}/> 
        </Modal>
      )}
    </>
  );
}

export default ProjectModal;