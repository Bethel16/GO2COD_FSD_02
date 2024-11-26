import React, { useState } from "react";
import axios from "axios";

interface LoginModalProps {
    closeModal: () => void; // Function to close the modal
    setIsLoggedIn: (status: boolean) => void; // Function to update login state in the parent
}

// Function to extract CSRF token from cookies
const getCsrfToken = () => {
    const match = document.cookie.match(new RegExp('(^| )csrftoken=([^;]+)'));
    return match ? match[2] : null; // Return CSRF token if found
};

const LoginModal: React.FC<LoginModalProps> = ({ closeModal, setIsLoggedIn }) => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState<string>("");
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            const csrfToken = getCsrfToken();  // Get CSRF token from cookies
            if (!csrfToken) {
                setErrorMessage("CSRF token not found.");
                return;
            }
    
            const response = await axios.post(
                "http://localhost:8000/api/login/",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRFToken": csrfToken,  // Send CSRF token in the request header
                    },
                    withCredentials: true, // This allows sending cookies with requests
                }
            );
    
            console.log("User logged in successfully", response.data);
    
            // Save the token and user data to localStorage
            const { token, user } = response.data; // Assuming your API returns a `user` object
            localStorage.setItem("token", token);
            localStorage.setItem("userData", JSON.stringify(user)); // Store user data
            setIsLoggedIn(true); // Update login status
            closeModal(); // Close the modal
        } catch (error) {
            console.error("Login failed:", error);
            setErrorMessage("Invalid credentials. Please try again.");
        }
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="login-modal">
                            <div className="row">
                                <div className="col-lg-6 pad-right-0">
                                    <div className="login-modal-left"></div>
                                </div>
                                <div className="col-lg-6 pad-left-0">
                                    <button
                                        type="button"
                                        className="close close-top-right"
                                        onClick={closeModal} // Close modal on click
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">
                                            <i className="mdi mdi-close"></i>
                                        </span>
                                    </button>
                                    <form onSubmit={handleLogin}>
                                        <div className="login-modal-right">
                                            <h5 className="heading-design-h5">
                                                Login to your account
                                            </h5>
                                            <fieldset className="form-group">
                                                <label>Enter Email/Mobile number</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="+91 123 456 7890"
                                                    required
                                                />
                                            </fieldset>
                                            <fieldset className="form-group">
                                                <label>Enter Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    placeholder="********"
                                                    required
                                                />
                                            </fieldset>
                                            {errorMessage && (
                                                <p className="text-danger">{errorMessage}</p>
                                            )}
                                            <fieldset className="form-group">
                                                <button
                                                    type="submit"
                                                    className="btn btn-lg btn-secondary btn-block"
                                                >
                                                    Enter to your account
                                                </button>
                                            </fieldset>
                                            <div className="login-with-sites text-center">
                                                <p>or Login with your social profile:</p>
                                                <button className="btn-facebook login-icons btn-lg">
                                                    <i className="mdi mdi-facebook"></i> Facebook
                                                </button>
                                                <button className="btn-google login-icons btn-lg">
                                                    <i className="mdi mdi-google"></i> Google
                                                </button>
                                                <button className="btn-twitter login-icons btn-lg">
                                                    <i className="mdi mdi-twitter"></i> Twitter
                                                </button>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="customCheck1"
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor="customCheck1"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
