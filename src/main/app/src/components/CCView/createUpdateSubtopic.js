import React, {useContext, useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import InputField from '../smartComponents/inputField';
import '../CCView/styling/createUpdateSubtopic.css';
import AlertContext from "../smartComponents/alertContext";

export default function CreateUpdateSubtopic(props)  {
    const [subTopic, setSubTopic] = useState('');
    const [name, setName] = useState('');
    const [imagePath, setImagePath] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');
    const [fileName, setFileName] = useState('');
    const [,setAlert] = useContext(AlertContext);
    const fileInputRef = React.createRef();
    const navigate = useNavigate();

    const location = useLocation();
    const searchParams= new URLSearchParams(location.search);
    const parentTopicId = searchParams.get('parentTopicId');
    const subTopicId = searchParams.get('subTopicId');

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(`http://localhost:3002/api/getSubTopic?subTopicId=${subTopicId}`, {
                        method: 'GET',
                    });

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    const data = await response.json();
                    console.log('Success:', data);
                    setSubTopic(data);
                    setName(data.name)
                    setDesc(data.summary);
                    setFileName(data.imagePath.split('/').pop());

                } catch (error) {
                    console.error('Error:', error);
                }
            };
            fetchData();
        }, []); // Empty dependency array to ensure the effect runs once on mount

    const handleTitleChange = (e) => {
        setName(e.target.value);
    };

    const handleDescChange= (e) => {
        setDesc(e.target.value);
    }

    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        const fileNameWithoutSpaces = selectedFile.name.replace(/\s/g, '_');

        // Create a new File object with the updated name
        const updatedFile = new File([selectedFile], fileNameWithoutSpaces, { type: selectedFile.type });

        // Use the updated file
        setImage(updatedFile);
        setFileName(selectedFile.name);
    };

    const triggerFileInput = () => {
        // Trigger the hidden file input
        fileInputRef.current.click();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);

        const subTopicData = {
            name: name,
            parentId: parentTopicId,
            summary: desc,
            imagePath:  image ? fileName : subTopic.imagePath,
            content: "",
        };

        formData.append('subTopic', JSON.stringify(subTopicData));

        let updateOrCreate = subTopicId ? "editSubTopic" : "createSubTopic";
        if (subTopicId) {
            formData.append('subTopicId', subTopicId);
        } else {

        }
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        try {
            const response = await fetch(`http://localhost:3002/api/${updateOrCreate}`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Subtopic created successfully');
                if(subTopicId) {
                    setAlert({
                        text: "Sub topic updated successfully",
                        type: "success"
                    });
                } else {
                    setAlert({
                        text: "Topic created successfully",
                        type: "success"
                    });
                }
                navigate(-1);
            } else {
                console.error('Failed to create subtopic');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className="FormCreateUpdateSubtopicBackgroundOverlay">
            <div className="FormCreateUpdateSubtopicContainer">
                <h1 className="FormCreateUpdateSubtopicTitle">{subTopic ? `Update ${subTopic.name}` : 'Create new topic'}</h1>
                <form onSubmit={handleSubmit} className="FormCreateUpdateSubtopicForm">
                    <div className="FormCreateUpdateSubtopicInputContainer">
                        <InputField
                            type={"text"}
                            name={"topic"}
                            placeholder={"Subtopic Name"}
                            value={name}
                            func={handleTitleChange}
                        />
                    </div>
                    <div className="TopicCoverImageContainer">
                        <p>
                            <label htmlFor="TopicCoverImageField">Choose a cover image:</label>
                        </p>
                        <button type="button" onClick={triggerFileInput}>Upload Image</button>
                        <input type="file" accept="image/*" ref={fileInputRef} id="TopicCoverImageField" onChange={handleImageChange} style={{ display: 'none' }} />
                        {fileName && <span className="FileNameDisplay">{fileName}</span>}
                    </div>

                    <div className="FormCreateUpdateSubtopicInputContainer">

                        <textarea name="summary" rows="4" cols="4" value={desc} onChange={handleDescChange}></textarea>
                    </div>

                    <button type="submit" className="FormCreateUpdateSubtopicSubmitButton">Submit</button>
                </form>
            </div>
        </div>
    );
};

