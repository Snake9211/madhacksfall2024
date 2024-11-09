import React, { useState } from 'react';

const Search: React.FC = () => {
    const [method, setMethod] = useState('email');
    const [contactInfo, setContactInfo] = useState('');
    const [messageContent, setMessageContent] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Submit form data
    };

    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>Welcome to Scam Checker</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="method">Method of Contact:</label>
                    <select
                        id="method"
                        value={method}
                        onChange={(e) => {
                            setMethod(e.target.value);
                            setContactInfo('');
                        }}
                    >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="contactInfo">
                        {method === 'email' ? 'Email Address:' : 'Phone Number:'}
                    </label>
                    <input
                        type={method === 'email' ? 'email' : 'tel'}
                        id="contactInfo"
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="messageContent">Message Content:</label>
                    <textarea
                        id="messageContent"
                        value={messageContent}
                        onChange={(e) => setMessageContent(e.target.value)}
                        rows={10}
                        cols={50}
                        required
                    />
                </div>
                <button type="submit">Check for Scam</button>
            </form>
        </div>
    );
};

export default Search;