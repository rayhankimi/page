import React, { useState } from 'react';
import './styles/RequestForm.css';

const RequestForm: React.FC = () => {
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Membuat link mailto
        const mailtoLink = `mailto:r4yhankimi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(content)}`;

        // Redirect ke mailto link
        window.location.href = mailtoLink;
    };

    return (
        <div className="request-form-container">
            <h2 className="form-title">SEND ME EMAIL</h2>
            <form className="request-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        placeholder="Subject"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="content">Content *</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        placeholder="Your request content here"
                    />
                </div>

                <button type="submit" className="submit-button">SEND</button>
            </form>
        </div>
    );
};

export default RequestForm;
