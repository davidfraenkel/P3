import React, {useState, useEffect, useContext} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import '../CCView/styling/createUpdateTopic.css';
import AlertContext from "../smartComponents/alertContext";

export default function CreateUpdateTopic(props)  {
    const [topic, setTopic] = useState('')
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [,setAlert] = useContext(AlertContext);
    const navigate = useNavigate();
    const [fileName, setFileName] = useState('');
    const fileInputRef = React.createRef();

    const location = useLocation();
    const searchParams= new URLSearchParams(location.search);
    const topicId = searchParams.get('topicId');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3002/api/getTopic?topicId=${topicId}`, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log('Success:', data);
                setTopic(data);
                setName(data.name)
                setFileName(data.imagePath.split('/').pop());


            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to ensure the effect runs once on mount

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

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

        if (image) {
            formData.append('image', image);
        }

        const topicData = {
            name: name,
            imagePath: image ? fileName : topic.imagePath
        };

        formData.append('topic', JSON.stringify(topicData));
        let updateOrCreate = topicId ? "editTopic" : "createTopic";

        if (topicId) {
            formData.append('topicId', topicId);
        }

        try {
            const response = await fetch(`http://localhost:3002/api/${updateOrCreate}`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Topic created successfully');

                setAlert({
                    text: "Topic created successfully",
                    type: "success"
                });

                navigate("/ccoverview");
            } else {
                console.error('Failed to create topic');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="FormCreateUpdateTopicBackgroundOverlay">
            <div className="FormCreateUpdateTopicContainer">
                <h1 className="FormCreateUpdateTopicTitle">{topic ? `Update ${topic.name}` : 'Create new topic'}</h1>
                <form onSubmit={handleSubmit} className="FormCreateUpdateTopicForm">
                    <div className="FormCreateUpdateTopicInputContainer">
                        <input type="text" value={name} placeholder="Name of topic" onChange={handleNameChange} />
                    </div>
                    <div className="TopicCoverImageContainer">
                        <p>
                        <label htmlFor="TopicCoverImageField">Choose a cover image:</label>
                        </p>
                        <button type="button" onClick={triggerFileInput}>Upload Image</button>
                        <input type="file" accept="image/*" ref={fileInputRef} id="TopicCoverImageField" onChange={handleImageChange} style={{ display: 'none' }} />
                        {fileName && <span className="FileNameDisplay">{fileName}</span>}
                    </div>

                    <button type="submit" className="FormCreateUpdateTopicSubmitButton">Submit</button>
                </form>
            </div>
        </div>
    );
};