import React from 'react';
import logo from "../logo.svg";

const Header = () => {
    const author = "Theodor";

    const head = {
        backgroundColor: 'red',
        padding: '1em',
        color: 'darkblue'
    };

    return (
        <header className="" style={head}>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to say 'Hello World' for {author}.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    );
};

export default Header;