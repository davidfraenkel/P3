import React, { useState } from 'react';

const DynamicInputFields = () => {
    const [inputFields, setInputFields] = useState([]);

    const addField = (type) => {
        // Check if a file input already exists
        const fileInputExists = inputFields.some((field) => field.type === 'file');

        // Only add a new file input if it doesn't exist
        if (!(type === 'file' && fileInputExists)) {
            const newField = {
                type: type,
                value: type === 'file' ? null : '',
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
        }));

        // Append JSON data
        formData.append('jsonData', JSON.stringify(jsonResult));

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
