import React from 'react';

const HomePage = () => {
    return (
        <div>
            <div>
                <h1>I'm the Best component</h1>
            </div>
            <button
                onClick={() => console.log('Hi there!')}
                className="btn btn-primary"
            >
                Press me!!
            </button>
        </div>
    );
};

export default {
    component: HomePage,
};
