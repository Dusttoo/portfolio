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
                    <li className="job-skill">Assists customers in navigating our desktop, mobile, and online software.</li> 
                    <li className="job-skill">Troubleshoots issues quickly and efficiently.</li>
                    <li className="job-skill">Builds customer rapport by assisting in a friendly and welcoming manner.</li> 
                    <li className="job-skill">Effectively documents every case.</li>
                </ul>
            </div>

            <div className="job-info">
                <h3 className="job-title">Customer Service Representative</h3>
                <div className="job-tagline">
                    <h4>Arise</h4>
                    <h4>March 2019 - June 2021</h4>
                </div>
                <ul className="job-description">
                    <li className="job-skill">Handles inbound calls for roadside assistance and dispatches the necessary help.</li>
                    <li className="job-skill">Empathizes with customers under stress.</li>
                    <li className="job-skill">Confidentially handles client information.</li>
                    <li className="job-skill">Successfully multitasks and navigates software, while actively listening to the customer.</li>
                    <li className="job-skill">Maintains an attendance record of 98% or above.</li>
                </ul>
            </div>

            <div className="job-info">
                <h3 className="job-title">Cashier Customer Service</h3>
                <div className="job-tagline">
                    <h4>Target</h4>
                    <h4>May 2018 - December 2020</h4>
                </div>
                <ul className="job-description">
                    <li className="job-skill">Responsible for cashing out members and assisting to unload and upload groceries effectively and efficiently.</li>
                    <li className="job-skill">Ensure efficiency in client membership program through extensive marketing strategy development and monitoring.</li>
                    <li className="job-skill">Portray excellent communication skills to effectively connect and interact with guests, employees, and management.</li>
                    <li className="job-skill">Replenishing products on shelves during shift.</li>
                    <li className="job-skill">Ensuring guest satisfaction was at 100%.</li>
                </ul>
            </div>

            <div className="job-info">
                <h3 className="job-title">Shift Lead</h3>
                <div className="job-tagline">
                    <h4>Panda Express</h4>
                    <h4>March 2015 - May 2018</h4>
                </div>
                <ul className="job-description">
                    <li className="job-skill">Oversaw and coordinated food preparation for dine-in, to-go, drive-thru, and catering orders.</li>
                    <li className="job-skill">Preformed multiple operational functions including purchasing, inventory planning and control, food quality, and budget management.</li>
                    <li className="job-skill">Focused efforts on cost efficiencies, process improvements, productivity, and bottom-line profitability.</li>
                    <li className="job-skill">Established quality standards and performance metrics to maintain food safety regulations.</li>
                </ul>
            </div>
        </div>
    </>
  );
}

export default JobHistory;