import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

const DynamicInputFields = () => {
    const [inputFields, setInputFields] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams= new URLSearchParams(location.search);
    const subtopicId = searchParams.get('subtopicId');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3002/api/getSubTopic?subTopicId=${subtopicId}`, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log('Success:', JSON.parse(data.content));
                initializeInputFields(JSON.parse(data.content));

            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to ensure the effect runs once on mount

    const addField = (type) => {
        // Check if a file input already exists
        const fileInputs = inputFields.filter((field) => field.type === 'file');
        const fileInputCount = fileInputs.length;

        // Only add a new file input if there are no existing file inputs or if multiple file inputs are allowed
        const allowMultipleFiles = true; // Set this to false if you only want one file input
        if (allowMultipleFiles || fileInputCount === 0) {
            const newField = {
                type: type,
                value: type === 'file' ? [] : '',
                id: `${type}-${inputFields.length + 1}`,
            };
            setInputFields([...inputFields, newField]);
        }
    };

    const handleFieldChange = (id, value) => {
        const updatedInputFields = inputFields.map((field) =>
            field.id === id ? { ...field, value } : field
        );
        setInputFields(updatedInputFields);
    };

    const handleFormSubmit = async () => {
        const formData = new FormData();

        // Convert inputFields to JSON based on the order of input field creation
        const jsonResult = inputFields.map((field) => ({
            order: field.id.split('-')[1],
            type: field.type,
            value: field.type === 'file' ? null : field.value,
            fileName: field.type === 'file' && field.value.length > 0 ? field.value[0].name : null,
        }));

        console.log(jsonResult);

        // Append JSON data
        formData.append('jsonData', JSON.stringify(jsonResult));
        formData.append('subtopicId', subtopicId);
        // Append file data
        inputFields
            .filter((field) => field.type === 'file' && field.value)
            .forEach((fileField, index) => {
                Array.from(fileField.value).forEach((file, fileIndex) => {
                    formData.append(`fileData`, file);
                });
            });

        console.log('FormData entries:');
        for (let pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        try {
            const response = await fetch('http://localhost:3002/api/editSubTopic', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Form data sent successfully');
                // Add logic to handle a successful response from the server if needed
            } else {
                console.error('Failed to send form data');
                // Add logic to handle a failed response from the server if needed
            }
        } catch (error) {
            console.error('Error:', error);
            // Add logic to handle errors if needed
        }
    };

    const initializeInputFields = (contentData) => {
        const newInputFields = contentData.map((item, index) => {
            return {
                id: `input-${index}`,
                type: item.type,
                value: item.value,
            };
        });
        setInputFields(newInputFields);
    };

    return (
        <div>
            <form>
                {inputFields.map((field) => (
                    <div key={field.id}>
                        {field.type === 'text' && (
                            <input
                                type="text"
                                value={field.value}
                                onChange={(e) => handleFieldChange(field.id, e.target.value)}
                                placeholder={`Enter Text`}
                            />
                        )}
                        {field.type === 'file' && (
                            <input
                                type="file"
                                onChange={(e) => handleFieldChange(field.id, e.target.files)}
                            />
                        )}
                        {field.type === 'youtube' && (
                            <input
                                type="text"
                                value={field.value}
                                onChange={(e) => handleFieldChange(field.id, e.target.value)}
                                placeholder={`Enter YouTube Link`}
                            />
                        )}
                    </div>
                ))}
                <button onClick={() => addField('text')} type="button">
                    Add Text Field
                </button>
                <button onClick={() => addField('file')} type="button">
                    Add File Field
                </button>
                <button onClick={() => addField('youtube')} type="button">
                    Add YouTube Link Field
                </button>
                <button type="button" onClick={handleFormSubmit}>
                    Submit Form
                </button>
            </form>
        </div>
    );
};

export default DynamicInputFields;
