import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal'; // Import the LoginModal component
import logo from '/img/logo.png'; // Path to the logo

export default function Navbar() {
    const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Track login status
    const [userData, setUserData] = useState<{ first_name: string } | null>(null); // Track user data with type

    // Function to open the login modal
    const handleLoginClick = () => {
        setShowLoginModal(true); // Open the Login Modal
    };


    // Function to close the login modal
    const closeModal = () => {
        setShowLoginModal(false); // Close the Login Modal
    };

    // Function to handle logout
    const handleLogout = () => {
        localStorage.removeItem('userData'); // Clear user data from localStorage
        setUserData(null); // Clear user data from state
        setIsLoggedIn(false); // Set login state to false
    };

    return (
        <>
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
                            {/* Conditional rendering of login/logout based on isLoggedIn */}
                            <li className="nav-item">
                                {isLoggedIn ? (
                                    <>
                                        <span className="nav-link text-light">
                                            Hello, {userData?.first_name || "User"}
                                        </span>
                                        <button
                                            className="btn btn-secondary nav-link"
                                            onClick={handleLogout} // Logout function
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        className="btn btn-secondary nav-link"
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevent page reload
                                            handleLoginClick(); // Show Login Modal
                                        }}
                                    >
                                        Login
                                    </button>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Render Login Modal */}
            {showLoginModal && (
                <LoginModal 
                    closeModal={closeModal} 
                    setIsLoggedIn={setIsLoggedIn} // Pass setIsLoggedIn to LoginModal
                />
            )}
        </>
    );
}
