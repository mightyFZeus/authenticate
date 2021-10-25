import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return setError("password does not match");
        }

        try {
            setError(" ");
            setLoading(true);
            await signup(email, password);
        } catch {
            setError("Failed to create an Account");
            setLoading(false);
        }
    };

    return (
        <form
            className="bg-white shadow-md max-w-md mx-auto rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
        >
            {error && <p>{error}</p>}
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="firstname"
                >
                    First Name
                </label>
                <input
                    className="shadow appearance-none focus:border-black border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstname"
                    type="text"
                    name="firstName"
                    placeholder="firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="lastName"
                >
                    Last Name
                </label>
                <input
                    className="shadow appearance-none border focus:border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                >
                    Email
                </label>
                <input
                    className="shadow appearance-none border  focus:border-blackrounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                />
            </div>
            <div className="mb-6">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                >
                    Password
                </label>
                <input
                    className="shadow appearance-none border focus:border-black rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-red-500 text-xs italic">
                    Please choose a password.
                </p>
            </div>
            <div className="mb-6">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="confirmpassword"
                >
                    Confirm Password
                </label>
                <input
                    className="shadow appearance-none border focus:border-black rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="confirmpassword"
                    type="password"
                    placeholder="******************"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <p className="text-red-500 text-xs italic">Confrim Password</p>
            </div>
            <div className="flex flex-col items-center justify-between">
                <button
                    type="submit"
                    disabled={loading}
                    className="px-2 py-3 w-full bg-blue-400 focus:border-black border-black text-white rounded-lg"
                >
                    Sign Up
                </button>
                <div className="flex gap-6">
                    <p>Have an account?</p>
                    <Link to="/login" className="text-blue-400">
                        login
                    </Link>
                </div>
            </div>
        </form>
    );
};

export default SignUp;
