import React from 'react';
import './Landing.css'


function JobHistory(){


  return (
    <>
        
        <div className="job-container">
            <div className="job-info">
                <h3 className="job-title">Technical Support Specialist</h3>
                <div className="job-tagline">
                    <h4>Intuit</h4>
                    <h4>July 2020 - June 2021</h4>
                </div>
                <ul className="job-description">
                    <li className="job-skill">Assisted customers in navigating desktop, mobile, and online software.</li> 
                    <li className="job-skill">Helped troubleshoot issues quickly and efficiently, with an average resolve rate of 367 seconds.</li>
                    <li className="job-skill">Increased customer rapport by assisting in a friendly and welcoming manner.</li> 
                    <li className="job-skill">Maintained a 100% documentation rate.</li>
                </ul>
            </div>

            <div className="job-info">
                <h3 className="job-title">Etsy shop owner</h3>
                <div className="job-tagline">
                    <h4>Self Employed	</h4>
                    <h4>January 2017 - Current</h4>
                </div>
                <ul className="job-description">
                    <li className="job-skill">Effectively marketed a business using SEO and advertising, bringing monthly views to upwards of 10,000 a month.</li>
                    <li className="job-skill">Boosted average monthly revenue to $4,000 after only 3 months in business and have continued to increase by roughly 2% each month</li>
                    <li className="job-skill">Created quality connections with customers in order to boost the rapport of my company.</li>
                </ul>
            </div>

            <div className="job-info">
                <h3 className="job-title">Food Service Manager</h3>
                <div className="job-tagline">
                    <h4>Multiple companies</h4>
                    <h4>August 2014 - May 2018 </h4>
                </div>
                <ul className="job-description">
                    <li className="job-skill">Accelerated revenue by effectively monitoring inventory, connecting with customers, and increasing morale within my team.</li>
                    <li className="job-skill">Influenced a change in the operation of company catering systems that increased revenue by 5% in the first month it was implemented.</li>
                    <li className="job-skill">Unified crew members to create a welcoming atmosphere in order to improve employee performance, and in turn, positively impacting customer satisfaction.</li>
                </ul>
            </div>
        </div>
    </>
  );
}

export default JobHistory;