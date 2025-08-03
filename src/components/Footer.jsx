import { LucideGraduationCap, Facebook, Twitter, Linkedin, Mail, X } from 'lucide-react'
import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-lime-700 text-white pt-16 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-5 gap-10">
                    {/* Logo + Description */}
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <LucideGraduationCap className="h-8 w-8 text-[#FF6B00]" />
                            <span className="text-2xl font-bold text-white">Vedubuild</span>
                        </div>
                        <p className="text-gray-100 mb-4">
                            Empowering India’s youth through skill development, computer training, and innovation support programs.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="hover:text-[#FF6B00] transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="hover:text-[#FF6B00] transition-colors">
                                <X size={20} />
                            </a>
                            <a href="#" className="hover:text-[#FF6B00] transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="hover:text-[#FF6B00] transition-colors">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2 text-gray-100">
                            <li><a href="#home" className="hover:text-amber-600 transition">Home</a></li>
                            <li><a href="#about" className="hover:text-amber-600 transition">About</a></li>
                            <li><a href="#scholarships" className="hover:text-amber-600 transition">Scholarships</a></li>
                            <li><a href="#events" className="hover:text-amber-600 transition">Events</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
                        <ul className="space-y-2 text-gray-100">
                            <li><a href="#" className="hover:text-amber-600 transition">FAQ</a></li>
                            <li><a href="#contact" className="hover:text-amber-600 transition">Contact Us</a></li>
                            <li><a href="#" className="hover:text-amber-600 transition">Application Help</a></li>
                            <li><a href="#" className="hover:text-amber-600 transition">Resources</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
                        <ul className="space-y-2 text-gray-100">
                            <li><a href="#" className="hover:text-amber-600 transition">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-amber-600 transition">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-amber-600 transition">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-200 text-sm">
                    <p>&copy; 2024 Vedubuild. All rights reserved. Designed by <a href="https://www.aadishrisoftech.com" className="text-white font-semibold hover:text-amber-600 transition">Aadishri Softech Pvt Ltd</a>.</p>
                </div>
            </div>
        </footer>
    )
}
