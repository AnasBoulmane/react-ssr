import React from 'react';

const Home = () => {
    return (
        <div>
            <div>
                <h1>I'm the Best component</h1>
            </div>
            <button onClick={() => console.log('Hi there!')}>Press me!</button>
        </div>
    );
};

export default Home;
