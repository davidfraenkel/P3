import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './styling/bookMeeting.css';

export default function ContactForm() {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        message: '',
        date: null,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContactInfo((values) => ({ ...values, [name]: value }));
    };

    const handleCalendarChange = (e) => {
        setContactInfo((values) => ({ ...values, date: e.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Form Data:', contactInfo);

        // Add your fetch logic here if needed
    };

    return (
        <div className="ContactContainer">
            <h1 className="Title">Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="card flex justify-content-center">
                    <Calendar value={contactInfo.date} onChange={handleCalendarChange} />
                </div>
                <div className="ContactInput">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={contactInfo.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="ContactInput">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={contactInfo.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="ContactInput">
          <textarea
              className="textField"
              name="message"
              placeholder="Your Message"
              value={contactInfo.message}
              onChange={handleChange}
              required
          />
                </div>
                <div className="ContactInput ContactSubmit">
                    <input type="submit" value="Send Message" />
                </div>
            </form>
        </div>
    );
}
