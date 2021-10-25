import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const Navbar = () => {
    const { currentUser, logout } = useAuth();
    const [error, setError] = useState(" ");
    const history = useHistory();

    const handleLogout = async () => {
        setError(" ");

        try {
            await logout();
            history.push("/");
        } catch {
            setError("Failed to Logout");
        }
    };
    return (
        <nav className="bg-transparent bg-gray-300 flex justify-between lg:p-10 px-4 py-8">
            <Link to="/">
                <p className="lg:text-2xl text-lg">Authenticate</p>
            </Link>
            <div className="flex gap-6">
                {!currentUser ? (
                    <div>
                        <Link to="/signup">
                            {" "}
                            <p>Sign up</p>
                        </Link>
                        <Link to="/login">
                            {" "}
                            <p>Login</p>
                        </Link>
                    </div>
                ) : (
                    <Link to="">
                        {" "}
                        <p> {currentUser.email.substring(0, 11)}...</p>
                        <p className="text-right" onClick={handleLogout}>
                            Logout
                        </p>
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
