import React, { useState } from 'react';
import JobHistory from './JobHistory';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Tetris from '../Tetris';
import './Landing.css'
import Footer from '../Footer';
import SubmitMessage from '../Contact/Contact';


function Landing(){
    const [job, setOpenJob] = useState(false)
    const [education, setOpenEducation] = useState(false)
    const [skills, setOpenSkills] = useState(false)
    const [projects, setOpenProjects] = useState(true)
    const [success, setSuccess] = useState(false)
    const openJob = () => {
        if(!job) {
        setOpenJob(true)
        setOpenEducation(false)
        setOpenSkills(false)
        setOpenProjects(false)
        } else {
            setOpenJob(false)
            setOpenProjects(true)

        }
    }

    const openEducation = () => {
        if(!education) {
        setOpenJob(false)
        setOpenEducation(true)
        setOpenSkills(false)
        setOpenProjects(false)
        } else {
            setOpenEducation(false)
            setOpenProjects(true)
        }
    }

    const openSkills = () => {
        if(!skills) {
        setOpenJob(false)
        setOpenEducation(false)
        setOpenSkills(true)
        setOpenProjects(false)
        } else {
            setOpenSkills(false)
            setOpenProjects(true)
        }
    }

    const closeAll = () => {
        setOpenJob(false)
        setOpenEducation(false)
        setOpenSkills(false)
        setOpenProjects(true)
    }

  return (
    <>
        <div className="landing-container">
            <div className="landing-content">
                <div className="img-container">
                    <img className="profile-img" src="https://i.imgur.com/8Ruradp.jpg" alt="dusty profile" />
                </div>
                <div className="header-text">
                    <h1 className="landing-title">Dusty Mumphrey</h1>
                    <p className="header-info">Full Stack Software Engineer</p>
                    <p className="tagline">Solution-oriented, software engineer. I have a passion for 
                    finding innovative solutions to complex problems and exercising my creativity. I am intuitive, 
                    adaptive, and enjoy working with a team. I am a natural leader whose positive attitude 
                    encourages a productive environment. I have a passion for working through difficult 
                    challenges and I rise above in the face of adversity. I look forward to being a part of a 
                    team where I can help influence a real change in the world that we live in. I have a working 
                    knowledge of JavaScript, Node, Express, React, CSS, Python, PostgreSQL, Flask and am constantly 
                    pushing myself to learn more.</p>
                    <a href='https://pdfhost.io/v/IMJBXF2vh_Mumphrey_Dusty_Resume' target="blank" className="tagline">Download Resume</a>
                </div>
                
            </div>
            <div className="resume-links">
                <h2 className="landing-cat" onClick={openJob}>Job History</h2>
                <h2 className="landing-cat" onClick={openEducation}>Education</h2>
                <h2 className="landing-cat" onClick={openSkills}>Skills</h2>
            </div>
            <div className="dropdown">
                {job && 
                <div className="open-cat"> 
                    <JobHistory /> 
                    <button className="close-cat" onClick={closeAll}>close</button>
                </div>}
                {education && 
                <div className="open-cat"> 
                    <Education /> 
                    <button className="close-cat" onClick={closeAll}>close</button>
                </div>}
                {skills && 
                <div className="open-cat"> 
                    <Skills /> 
                    <button className="close-cat" onClick={closeAll}>close</button>
                </div> }
            </div>
            {projects && <Projects /> }
            <div className='extra-content'>
                <div className="tetris-container">
                    <Tetris/>
                </div>
                <div className='contact-form-container'>
                    {success ? 
                    <h2 className='success'>Message sent succesfully</h2> :
                    <SubmitMessage setSuccess={setSuccess}/>
                    }
                    
                </div>
            </div>


            
        </div>
    </>
  );
}

document.addEventListener('onkeydown', Tetris);


export default Landing;