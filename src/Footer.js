import React from 'react';
import './style.css';

const Footer = () => (
    <div className="footer">
        <div className="footer-copyright">
            <p>&copy; Проценко Д.В., Б9121-09.03.04(1), 2023-2024</p>
        </div>
        <div className="footer-contact">
            <p>
                <img src="images/email.svg" className="icon" alt="email icon" /> Контакты
            </p>
        </div>
    </div>
);

export default Footer;