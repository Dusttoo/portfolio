import React from 'react';
import './Landing.css'


function Education(){


  return (
    <>
        
        <div className="education-container">
            <div className="education-info">
                <h3 className="education-title">App Academy</h3>
                <div className="education-tagline">
                    <div className="college"><h4>Full Stack Bootcamp</h4></div>
                    <h4>June 2021 - December 2021</h4>
                </div>
            </div>
            <div className="education-info">
                <h3 className="education-title">Colorado Technical University</h3>
                <div className="education-tagline">
                    <div className="college"><h4>Bachelor of Science</h4><h4>Computer Science</h4></div>
                    <h4>August 2020 - February 2023</h4>
                </div>
            </div>
        </div>
    </>
  );
}

export default Education;