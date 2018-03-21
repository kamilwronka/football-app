import React from 'react';

const Footer = () => {
    const date = new Date().toLocaleDateString('pl-pl');
    return(
        <div className="footer">
            <p className="text-white">Football-app-react <br/> version @0.1</p>
            <a className="my-2 text-center" href="https://github.com/kamilwronka/football-app">Github repo</a>
        </div>
    );
}

export default Footer;