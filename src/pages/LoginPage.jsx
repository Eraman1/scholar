import { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/authApi';


export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await loginUser({ email, password });

            if (res.data.success) {
                toast.success("Login successful");
                localStorage.setItem("isLoggedIn", "true");
                navigate("/dashboard");
            } else {
                throw new Error(res.data.message || "Login failed");
            }

        } catch (err) {
            setError(err.response?.data?.message || err.message || "Login error");
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login to Your Account</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                        <p className="text-red-500 text-sm text-center">{error}</p>
                    )}

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm">
                            <input
                                type="checkbox"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                                className="mr-2"
                            />
                            Remember me
                        </label>
                        <a href="#" className="text-sm text-[#51A545] hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#FF6B00] hover:bg-[#e55c00] text-white py-2 rounded-md font-semibold transition-colors"
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </button>

                    <p className="text-center text-sm text-gray-600">
                        Don’t have an account?{' '}
                        <a href="#" className="text-[#51A545] hover:underline">
                            Sign Up
                        </a>
                    </p>
                </form>
            </div>
        </div>
    )
}
