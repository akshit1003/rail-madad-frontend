import React from 'react';
// import FeedbackImg from './assets/rectangle-1270-4.svg';
// import QueryImg from './assets/rectangle-1270-5.svg';
// import SupportImg from './assets/rectangle-1270-6.svg';

function Services() {
    return (
        <div className="services">
            <div className="service-card">
                {/* <img src={FeedbackImg} alt="Feedback" /> */}
                <h3>Feedback</h3>
                <p>Provision for feedback on complaint resolution</p>
                <div className="read-more">
                    <span>Explore page</span>
                    {/* <img src="./assets/arrow-right-4.svg" alt="arrow-right" /> */}
                </div>
            </div>
            <div className="service-card">
                {/* <img src={QueryImg} alt="Query Status" /> */}
                <h3>Know your query status</h3>
                <p>Real-time tracking of complaint status</p>
                <div className="read-more">
                    <span>Explore page</span>
                    {/* <img src="./assets/arrow-right-5.svg" alt="arrow-right" /> */}
                </div>
            </div>
            <div className="service-card">
                {/* <img src={SupportImg} alt="Customer Support" /> */}
                <h3>Customer support</h3>
                <p>Chatbot for easy customer support</p>
                <div className="read-more">
                    <span>Explore page</span>
                    {/* <img src="./assets/arrow-right-6.svg" alt="arrow-right" /> */}
                </div>
            </div>
        </div>
    );
}

export default Services;
