import React from 'react';

const Home = () => {
    const event = (e) => {
        console.log(e);
    }

    const clicked = (name, age) => {
        console.log(name + '\'s age is ' + age)
    }

    const changeColor = () => {

    }

    return (
        <main className="">
            <p onMouseOver={changeColor}>Home page</p>
            <button onClick={() => clicked('Theo', 15)}>Who is this?</button><br />
            <button onClick={(e) => event(e)}>Event</button>
        </main>
    );
};

export default Home;