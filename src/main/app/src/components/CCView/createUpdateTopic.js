
import React, { useState, useEffect } from 'react';
import {Link, useLocation} from "react-router-dom";
import InputField from '../smartComponents/inputField';
import '../CCView/styling/createUpdateTopic.css';

export default function CreateUpdateTopic(props)  {
    const [name, setName] = useState('');
    const [imagePath, setImagePath] = useState('');
    const [image, setImage] = useState(null);
    const location = useLocation();
    const searchParams= new URLSearchParams(location.search);
    const topicName = searchParams.get('topicName');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);

        const topicData = {
            name: name,
            imagePath: imagePath,
        };

        formData.append('topic', JSON.stringify(topicData));

        try {
            const response = await fetch('http://localhost:3002/api/createTopic', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Topic created successfully');
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
                <h1 className="FormCreateUpdateTopicTitle">{topicName ? `Update ${topicName}` : 'Create new topic'}</h1>
                <form onSubmit={handleSubmit} className="FormCreateUpdateTopicForm">
                    <div className="FormCreateUpdateTopicInputContainer">
                        <input type="text" value={name} onChange={handleNameChange} />
                    </div>
                    <input type="file" accept="image/*" onChange={handleImageChange} />

                    <button type="submit" className="FormCreateUpdateTopicSubmitButton">Submit</button>
                </form>
            </div>
        </div>
    );
};