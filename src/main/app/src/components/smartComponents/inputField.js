import React, { useState } from "react";
import '../styling/inputField.css';

export default function InputField(props) {
    const [value, setValue] = useState(props.value || '');

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        if (props.func) {
            props.func(event);
        }
    };

    return (
        <input
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={handleChange}
        />
    );
}
