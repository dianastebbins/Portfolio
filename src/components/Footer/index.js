import React from "react";
import "./style.css";

export default function Footer(props) {
    return (
        <footer className="Footer">
            <div className="footerLinks">
                <a className="ftr-link" target="_blank" rel="noopener noreferrer" href="https://github.com/dianastebbins">
                    <i className="fab fa-github"></i> GitHub</a>
                <a className="ftr-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/diana-stebbins">
                    <i className="fab fa-linkedin-in"></i> LinkedIn</a>
                <a className="ftr-link" target="_blank" href="assets/Resume.pdf">
                    <i className="fas fa-file"></i> Resume</a>
                <button className="ftr-info"><i className="fas fa-phone-square"></i> 206-349-3212</button>
                <button className="ftr-info"><i className="fas fa-envelope-square"></i> dianastebbins97@gmail.com</button>
            </div>
        </footer>
    )
}