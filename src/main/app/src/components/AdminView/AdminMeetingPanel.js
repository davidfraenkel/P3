// App.js

import React from 'react';
import MeetingRequest from './meetingRequest';

const AdminMeetingPanel = () => {
    return (
        <div>
            <h1>Your Meeting Requests</h1>
            <MeetingRequest />
        </div>
    );
};

export default AdminMeetingPanel;
