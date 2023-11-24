import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import Dropdown from 'react-dropdown-select';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


import './styling/bookMeeting.css';


export default function BookMeeting() {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        message: '',
        date: null,
        selectedTime: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContactInfo((values) => ({ ...values, [name]: value }));
    };

    const handleCalendarChange = (e) => {
        setContactInfo((values) => ({ ...values, date: e.value }));
    };

    const timeOptions = ['10:00', '11:30', '13:00', '14:30'];

    const handleTimeChange = (selectedOption) => {
        setContactInfo((values) => ({ ...values, selectedTime: selectedOption[0] }));
    };

    // JSON info:
    // {
    //     "name": "John Doe",
    //     "email": "john.doe@gmail",
    //     "message": "Hello, I would like to book a meeting with you.",
    //     "date": "2021-05-25T22:00:00.000Z",
    //     "selectedTime": "10:00"
    // }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data:', contactInfo);

        fetch('http://localhost:3002/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactInfo),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    };

    return (
        <div className="ContactContainer">
            <h1 className="Title">Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="calender-time-box">
                    <div className="CalenderContainer">
                        <Calendar
                            value={contactInfo.date}
                            onChange={handleCalendarChange}
                            showIcon
                            placeholder="Select date for meeting"
                            required
                        />
                    </div>
                    <div className="dropdownTime">
                        <Dropdown
                            options={timeOptions.map((time) => ({ label: time, value: time }))}
                            //value={contactInfo.value}
                            onChange={handleTimeChange}
                            placeholder="Select time"
                            required
                        />
                    </div>
                </div>
                <div className="ContactInput">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={contactInfo.name}
                        onChange={handleChange}
                        //required
                    />
                </div>
                <div className="ContactInput">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={contactInfo.email}
                        onChange={handleChange}
                        //required
                    />
                </div>
                <div className="ContactInput">
          <textarea
              className="textField"
              name="message"
              placeholder="Your Message"
              value={contactInfo.message}
              onChange={handleChange}
              //required
          />
                </div>
                <div className="ContactInput ContactSubmit">
                    <input type="submit" value="Send Message" />
                </div>
            </form>
        </div>
    );
}
