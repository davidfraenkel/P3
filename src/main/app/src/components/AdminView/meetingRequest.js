// MeetingRequest.js

import React, { useState, useEffect } from 'react';
import './styling/AdminMeetingPanel.css';

const MeetingRequest = () => {
    const [meetingData, setMeetingData] = useState([]);

    useEffect(() => {
        // Simulating fetching data from an API endpoint
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3002/api/getAllMeetings');
                const data = await response.json();
                console.log(data);
                setMeetingData(data);
            } catch (error) {
                console.error('Error fetching meeting data:', error);
            }
        };

        fetchData().then(r => console.log('fetched data'));
    }, []);

    return (
        <div>
            {meetingData.map((meeting, index) => (
                <div className="meeting-request" key={index}>
                    <h2>{meeting.name}</h2>
                    <p>{meeting.email}</p>
                    <p>Date: {meeting.date}</p>
                    <p>Time: {meeting.selectedTime}</p>
                    <p>Message: {meeting.message}</p>
                    <p>Status: {meeting.status}</p>
                    <button className="ButtonAccept">Accept</button>
                    <button className="ButtonDecline">Decline</button>
                </div>
            ))}
        </div>
    );
};

export default MeetingRequest;
