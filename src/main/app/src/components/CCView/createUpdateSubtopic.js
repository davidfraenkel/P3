import React, { useState } from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import InputField from '../smartComponents/inputField';
import '../CCView/styling/createUpdateSubtopic.css';

export default function CreateUpdateSubtopic(props)  {
    const [name, setName] = useState('');
    const [imagePath, setImagePath] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const location = useLocation();
    const searchParams= new URLSearchParams(location.search);
    const parentTopicId = searchParams.get('parentTopicId');

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
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);

        const subTopicData = {
            name: name,
            parentId: parentTopicId,
            content: desc,
            imagePath: imagePath,
        };

        formData.append('subTopic', JSON.stringify(subTopicData));

        try {
            const response = await fetch('http://localhost:3002/api/createSubTopic', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Subtopic created successfully');
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
                <h1 className="FormCreateUpdateSubtopicTitle">Create new subtopic {parentTopicId}</h1>
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
                    <input type="file" accept="image/*" onChange={handleImageChange} />

                    <div className="FormCreateUpdateSubtopicInputContainer">
                        <InputField
                            type={"text"}
                            name={"description"}
                            placeholder={"Description"}
                            value={desc}
                            func={handleDescChange}
                        />
                    </div>

                    <button type="submit" className="FormCreateUpdateSubtopicSubmitButton">Submit</button>
                </form>
            </div>
        </div>
    );
};

