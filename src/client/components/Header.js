import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
    const authButton = auth ? (
        <a href="/api/logout" className="btn btn-outline-primary">
            Logout
        </a>
    ) : (
        <a href="/api/auth/google" className="btn btn-outline-primary">
            Login
        </a>
    );

    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal">
                <Link to="/">React SSR</Link>
            </h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <Link to="/users" className="p-2 text-dark">
                    Users
                </Link>
                <Link to="/admins" className="p-2 text-dark">
                    Admins
                </Link>
                {authButton}
            </nav>
        </div>
    );
};

function mapStateToProps({ auth }) {
    return {
        auth,
    };
}

export default connect(mapStateToProps)(Header);
