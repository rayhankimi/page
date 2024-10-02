import React from 'react';
import './styles/Footer.css'; // Import the CSS file
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon from react-icons

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Rayhan Kimi Nabiel Athallah.</p>
            <p>Made using React with ☕ and 🤔 💭</p>

            {/* Add GitHub logo and link */}
            <a
                href="https://github.com/rayhankimi/page"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
            >
                <FaGithub size={24} />
            </a>
        </footer>
    );
};

export default Footer;
