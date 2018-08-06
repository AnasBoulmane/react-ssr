import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <img
                src="https://cfl.dropboxstatic.com/static/images/publicfoldersunset.svg"
                alt=""
            />
            <h1 className="text-center" style={{ color: '#677088' }}>
                Oops Page not Found!
            </h1>
        </div>
    );
};

export default {
    component: NotFoundPage,
};
