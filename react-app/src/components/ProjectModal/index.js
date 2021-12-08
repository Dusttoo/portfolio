import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Project from './Project';
import './Project.css';


function ProjectModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="project" onClick={() => setShowModal(true)}>Learn More</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Project setShowModal={setShowModal}/> 
        </Modal>
      )}
    </>
  );
}

export default ProjectModal;