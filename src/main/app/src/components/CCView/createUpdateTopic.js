
import React, { useState, useEffect } from 'react';
import {Link, useLocation} from "react-router-dom";
import InputField from '../smartComponents/inputField';
import '../CCView/styling/createUpdateTopic.css';

export default function CreateUpdateTopic(props)  {
    const [name, setName] = useState('');
    const [imagePath, setImagePath] = useState('');
    const [image, setImage] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };
    const handlePhoneNumberChange = (e) => {
        setImagePath(e.target.value);
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
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange} />
                <input type="text" value={imagePath} onChange={handlePhoneNumberChange} />
            </label>
            <br />
            <label>
                Image:
                <input type="file" accept="image/*" onChange={handleImageChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};