import React, { useState } from 'react';
import {Link, useLocation} from "react-router-dom";
import InputField from '../smartComponents/inputField';
import '../CCView/styling/createUpdateTopic.css';

export default function CreateUpdateTopic(props)  {
    const [topicTitle, setTopicTitle] = useState('');
    const [file, setFile] = useState(null);
    const location = useLocation();
    const searchParams= new URLSearchParams(location.search);
    const topicName = searchParams.get('topicName');

    const handleTitleChange = (e) => {
        setTopicTitle(e.target.value);
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const selectedFile = e.dataTransfer.files[0];
        setFile(selectedFile);
    };

    const preventDefault = (e) => {
        e.preventDefault();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle topic creation/update logic here, including file upload.
        console.log('Topic Title:', topicTitle);
        console.log('Selected File:', file);
    };

    return (
        <div className="FormCreateUpdateTopicBackgroundOverlay">
            <div className="FormCreateUpdateTopicContainer">
                <h1 className="FormCreateUpdateTopicTitle">{topicName ? `Update ${topicName}` : 'Create new topic'}</h1>
                <form onSubmit={handleSubmit} className="FormCreateUpdateTopicForm">
                    <div className="FormCreateUpdateTopicInputContainer">
                        <InputField
                            type={"text"}
                            name={"topic"}
                            placeholder={"Topic Name"}
                            value={topicTitle}
                            func={handleTitleChange}
                        />
                    </div>
                    <div
                        className="FormCreateUpdateTopicDropArea"
                        onDrop={handleDrop}
                        onDragOver={preventDefault}
                        onDragEnter={preventDefault}
                    >
                        <label className="FormCreateUpdateTopicLabel">Drag and Drop Image Here:</label>
                        <input type="file" accept="image/*" onChange={handleFileChange} className="FormCreateUpdateTopicFileInput" />
                    </div>
                    {file && (
                        <p className="FormCreateUpdateTopicFileName">Selected File: {file.name}</p>
                    )}

                    <button type="submit" className="FormCreateUpdateTopicSubmitButton">Submit</button>
                </form>
            </div>
        </div>
    );
};

