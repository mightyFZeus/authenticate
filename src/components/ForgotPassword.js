import React, { useState } from "react";
import { useAuth } from "./context/AuthContext";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const { resetpassword } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setMessage("");
            setError(" ");
            setLoading(true);

            await resetpassword(email);
            setMessage("Check your inbox for futher instructions");
        } catch {
            setError("Failed to  Reset password");
            setLoading(false);
        }
    };
    return (
        <form
            className="bg-white shadow-md max-w-md mx-auto rounded px-8 pt-6 mt-10 pb-8 mb-4"
            onSubmit={handleSubmit}
        >
            {message && <p>{message}</p>}
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
            <button
                type="submit"
                className="w-full bg-blue-400 p-3 rounded-lg text-white"
            >
                Reset Password
            </button>
        </form>
    );
};

export default ForgotPassword;
