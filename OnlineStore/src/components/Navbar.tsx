import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '/img/logo.png'; // Path to the logo

export default function Navbar() {
    return (
        <nav className="navbar navbar-light navbar-expand-lg bg-dark bg-faded osahan-menu">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="logo" />
                </a>
                <button
                    className="navbar-toggler navbar-toggler-white"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link shop" href="/">
                                <span className="mdi mdi-store"></span> Super Store
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/product-list" className="nav-link">Product List</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
