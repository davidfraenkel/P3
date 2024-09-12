import React from 'react';

const YouTubeChat = ({ videoId, domain }) => {
    return (
        <iframe
            referrerPolicy="origin"
            src={`https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${domain}`}
            frameBorder="0"
            style={{ width: '450px', height: '600px' }}
        ></iframe>
    );
};

export default YouTubeChat;