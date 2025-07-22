import { X, Menu } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    const location = useLocation()
    const isActive = (path) => location.pathname === path

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Scholarships', path: '/scholarships' },
        { label: 'Partners', path: '/partners' },
        { label: 'Events', path: '/events' },
        { label: 'Contact', path: '/contact' }
    ]

    return (
        <div className="relative z-50">
            {/* Navbar */}
            <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center space-x-2">
                            <img
                                src="/img/vedubuildLogo.png"
                                alt="Vedubuild Logo"
                                className="h-12 w-auto object-contain"
                            />
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`text-base font-semibold transition-colors ${isActive(item.path)
                                        ? 'text-[#FF6B00]'
                                        : 'text-gray-700 hover:text-[#51A545]'
                                        }`}
                                >
                                    {item.label.toUpperCase()}
                                </Link>
                            ))}

                            <button
                                onClick={() => setIsLoginOpen(true)}
                                className="bg-[#FF6B00] hover:bg-[#e55c00] text-white px-4 py-2 rounded-md text-base font-semibold transition-colors"
                            >
                                LOGIN
                            </button>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="text-gray-800"
                            >
                                <Menu className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="md:hidden bg-white border-t px-4 pt-4 pb-6 shadow-sm">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setMobileOpen(false)}
                                className={`block py-2 text-base font-medium ${isActive(item.path)
                                    ? 'text-[#FF6B00]'
                                    : 'text-gray-700 hover:text-[#51A545]'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <button
                            onClick={() => {
                                setIsLoginOpen(true)
                                setMobileOpen(false)
                            }}
                            className="mt-4 w-full bg-[#FF6B00] hover:bg-[#e55c00] text-white px-4 py-2 rounded-md text-base font-semibold transition-colors"
                        >
                            LOGIN
                        </button>
                    </div>
                )}
            </nav>

            {/* Login Modal */}
            {isLoginOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-semibold text-[#3B3B3B]">
                                    Login to Vedubuild
                                </h3>
                                <button
                                    onClick={() => setIsLoginOpen(false)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="rounded" />
                                        <span className="text-sm text-gray-600">Remember me</span>
                                    </label>
                                    <a
                                        href="#"
                                        className="text-sm text-[#51A545] hover:underline"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#FF6B00] hover:bg-[#e55c00] text-white py-2 rounded-md font-medium transition-colors"
                                >
                                    Sign In
                                </button>
                                <div className="text-center">
                                    <span className="text-sm text-gray-600">
                                        Don't have an account?{' '}
                                        <a href="#" className="text-[#51A545] hover:underline">
                                            Sign Up
                                        </a>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
