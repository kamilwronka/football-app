import React from 'react';

const Footer = () => {
    const date = new Date().toLocaleDateString('pl-pl');
    return(
        <div className="footer">
            <p className="text-white">Football-app-react <br/> version @0.1</p>
        </div>
    );
}

export default Footer;