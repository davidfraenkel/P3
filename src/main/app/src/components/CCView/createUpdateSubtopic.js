import React, { useState } from 'react';
import {Link, useLocation} from "react-router-dom";
import InputField from '../smartComponents/inputField';
import '../CCView/styling/createUpdateSubtopic.css';

export default function CreateUpdateSubtopic(props)  {
    const [subtopicTitle, setSubtopicTitle] = useState('');
    const [subtopicDesc, setSubtopicDesc] = useState('');
    const [file, setFile] = useState(null);
    const location = useLocation();
    const searchParams= new URLSearchParams(location.search);
    const subtopicName = searchParams.get('subtopicName');

    const handleTitleChange = (e) => {
        setSubtopicTitle(e.target.value);
    };

    const handleDescChange = (e) => {
        setSubtopicDesc(e.target.value);
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
        // Handle subtopic creation/update logic here, including file upload.
        console.log('Subtopic Title:', subtopicTitle);
        console.log('Selected File:', file);
        console.log('Subtopic Description:', subtopicDesc);
    };

    return (
        <div className="FormCreateUpdateSubtopicBackgroundOverlay">
            <div className="FormCreateUpdateSubtopicContainer">
                <h1 className="FormCreateUpdateSubtopicTitle">{subtopicName ? `Update ${subtopicName}` : 'Create new subtopic'}</h1>
                <form onSubmit={handleSubmit} className="FormCreateUpdateSubtopicForm">
                    <div className="FormCreateUpdateSubtopicInputContainer">
                        <InputField
                            type={"text"}
                            name={"topic"}
                            placeholder={"Subtopic Name"}
                            value={subtopicTitle}
                            func={handleTitleChange}
                        />
                    </div>
                    <div
                        className="FormCreateUpdateSubtopicDropArea"
                        onDrop={handleDrop}
                        onDragOver={preventDefault}
                        onDragEnter={preventDefault}
                    >
                        <label className="FormCreateUpdateSubtopicLabel">Drag and Drop Image Here:</label>
                        <input type="file" accept="image/*" onChange={handleFileChange} className="FormCreateUpdateSubtopicFileInput" />
                    </div>
                    {file && (
                        <p className="FormCreateUpdateSubtopicFileName">Selected File: {file.name}</p>
                    )}
                    <div className="FormCreateUpdateSubtopicInputContainer">
                        <InputField
                            type={"text"}
                            name={"description"}
                            placeholder={"Description"}
                            value={subtopicDesc}
                            func={handleDescChange}
                        />
                    </div>

                    <button type="submit" className="FormCreateUpdateSubtopicSubmitButton">Submit</button>
                </form>
            </div>
        </div>
    );
};

