import React from 'react';

const Footer = () => {
    const today = new Date();

    return (
        <footer>
            <h3>Copyright &copy; {today.toLocaleDateString()}</h3>
        </footer>
    );
};

export default Footer;