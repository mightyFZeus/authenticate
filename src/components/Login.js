import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError(" ");
            setLoading(true);
            await login(email, password);
            history.push("/");
        } catch {
            setError("Failed to  login");
            setLoading(false);
        }
    };

    return (
        <form
            className="bg-white shadow-md max-w-md mx-auto rounded px-8 pt-6 mt-10 pb-8 mb-4"
            onSubmit={handleSubmit}
        >
            {error && <p>{error}</p>}

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

            <div className="flex flex-col items-center justify-between">
                <button
                    type="submit"
                    disabled={loading}
                    className="px-2 py-3 w-full bg-blue-400 focus:border-black border-black text-white rounded-lg"
                >
                    Login
                </button>
                <Link to="/forgot-password">
                    <p>Forgot password?</p>
                </Link>
                <div className="flex gap-6">
                    <p>Need an account?</p>
                    <Link to="/signup" className="text-blue-400">
                        Sign up
                    </Link>
                </div>
            </div>
        </form>
    );
};

export default SignUp;
