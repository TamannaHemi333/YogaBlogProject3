import React, { useState } from 'react';
import "./CTouch.css";

const CTouch = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to backend)
        console.log('Form submitted:', { name, email, phoneNumber, subject, message });
        // Clear form fields after submission
        setName('');
        setEmail('');
        setPhoneNumber('');
        setSubject('');
        setMessage('');
    };

    return (
        <div className="contact-us">
            <div>
                <img src="https://preview.gentechtreedesign.com/yog/wp-content/uploads/2021/04/2-9-1.jpg" height="200" width="300" alt="Contact Us" />
            </div>
            <div>
                <div>
                    <p>// CONTACT US</p>
                    <h1>Get In Touch</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Enter Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Enter Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Enter Phone Number:</label>
                        <input
                            type="tel"  // Changed type to "tel" for phone number input
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject">Enter Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Send Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CTouch;
