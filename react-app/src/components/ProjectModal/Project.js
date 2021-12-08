import React, { useState, useContext } from 'react';
import { useDispatch} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import './Project.css';

function Project({setShowModal}) {
  const dispatch = useDispatch();
  // const modalContext = useContext(ModalContext)
  const close = () => {
    setShowModal(false)
  }


  return (
    <>
      <div className='project-content'>
        <div className='close-container'>
          <FontAwesomeIcon icon={faX} className='close-icon' onClick={close}/>
        </div>
        <h1>Project details</h1>
      </div>
    </>
  );
}

export default Project;