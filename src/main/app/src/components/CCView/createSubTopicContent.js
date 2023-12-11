import React, {useContext, useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import AlertContext from "../smartComponents/alertContext";
import "./styling/subtopicContent.css"

const DynamicInputFields = () => {
    const [inputFields, setInputFields] = useState([]);
    const [showFileInput, setShowFileInput] = useState({});
    const [,setAlert] = useContext(AlertContext);
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
            const newField = {
                type: type,
                value: type === 'file' ? [] : '',
                id: `${type}-${inputFields.length + 1}`,
            };
            setInputFields([...inputFields, newField]);
    };

    const handleFieldChange = (id, value) => {
        const updatedInputFields = inputFields.map((field) =>
            field.id === id ? { ...field, value } : field
        );
        setInputFields(updatedInputFields);
    };

    const removeField = (id) => {
        setInputFields(inputFields.filter(field => field.id !== id));
    };


    const handleFormSubmit = async () => {
        const formData = new FormData();

        const jsonResult = inputFields.map((field) => {
            if (field.type === 'file') {
                let fileName;
                if (field.value && field.value.length > 0) {
                    // New file has been uploaded
                    fileName = field.value[0].name;
                } else {
                    // No new file uploaded, use existing file name
                    fileName = field.existingFileName;
                }

                return {
                    order: field.id.split('-')[1],
                    type: field.type,
                    value: null, // File inputs do not carry over their value for security reasons
                    fileName: fileName, // This will be either the new file's name or the existing file's name
                };
            } else {
                // Handling non-file fields
                return {
                    order: field.id.split('-')[1],
                    type: field.type,
                    value: field.value,
                };
            }
        });


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

        try {
            const response = await fetch('http://localhost:3002/api/editSubTopicContent', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Form data sent successfully');
                setAlert({
                    text: "Sub topic content created successfully",
                    type: "success"
                });
                navigate("/overview/sub-overview/subtopic?subtopicId="+subtopicId);
            } else {
                console.error('Failed to send form data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const initializeInputFields = (contentData) => {
        const newInputFields = contentData.map((item, index) => {
            if (item.type === 'file') {
                return {
                    id: `file-${index}`,
                    type: item.type,
                    value: null, // for new file uploads
                    existingFileName: item.fileName, // store just the file name
                };
            } else {
                return {
                    id: `${item.type}-${index}`,
                    type: item.type,
                    value: item.value,
                };
            }
        });
        setInputFields(newInputFields);
    };

    const handleShowFileInput = (id) => {
        setShowFileInput(prevState => ({ ...prevState, [id]: true }));
    };

    return (
        <div className="SubTopicContentContainer">
            <form>
                {inputFields.map((field) => (
                    <div>
                    <span>{field.type} field:</span>
                    <div key={field.id} className="SubTopicContentInputContainer">
                        {field.type === 'text' && (
                                <input
                                    type="text"
                                    value={field.value}
                                    onChange={(e) => handleFieldChange(field.id, e.target.value)}
                                    placeholder={`Enter Text`}
                                />

                        )}
                        {field.type === 'headline' && (

                            <input
                                type="headline"
                                value={field.value}
                                onChange={(e) => handleFieldChange(field.id, e.target.value)}
                                placeholder={`Enter headline`}
                            />

                        )}
                        {field.type === 'file' && (
                            <div>
                                {field.existingFileName && !showFileInput[field.id] && (
                                    <div>
                                        <p>Current file: {field.existingFileName}</p>
                                        <button type="button" onClick={() => handleShowFileInput(field.id)}>
                                            Upload New File
                                        </button>
                                    </div>
                                )}

                                {(showFileInput[field.id] || !field.existingFileName) && (
                                    <input
                                        type="file"
                                        onChange={(e) => handleFieldChange(field.id, e.target.files)}
                                    />
                                )}
                            </div>
                        )}
                        {field.type === 'youtube' && (
                                <input
                                    type="text"
                                    value={field.value}
                                    onChange={(e) => handleFieldChange(field.id, e.target.value)}
                                    placeholder={`Enter YouTube Link`}
                                />
                        )}
                        <button type="button" onClick={() => removeField(field.id)}>
                            Delete
                        </button>
                    </div>
                    </div>
                ))}
                <div className="CreateSubTopicContentButtonContainer">
                    <button onClick={() => addField('headline')} type="button">
                        Add Headline Field
                    </button>
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
                </div>
            </form>
        </div>
    );
};

export default DynamicInputFields;
