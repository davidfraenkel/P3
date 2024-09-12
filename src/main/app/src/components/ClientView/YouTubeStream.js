import React from 'react';

const YouTubeStream = ({ channel }) => {
    return (
        <iframe
            width="1200"
            height="600"
            src={`https://youtube.com/embed/live_stream?channel=${channel}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
};

export default YouTubeStream;