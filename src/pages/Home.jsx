import { useState } from "react"
import {
    GraduationCap,
    Users,
    Calendar,
    Mail,
    Phone,
    MapPin,
    Award,
    BookOpen,
    Target,
    Heart,
    Star,
    ChevronRight,
    X,
    Clock,
    GraduationCapIcon,
    ChevronRightCircle,
    AwardIcon,
    Users2,
    BookOpenCheck,
    TargetIcon,
    StarIcon,
    ChevronRightIcon,
    Calendar1,
    Clock1,
    MapPinCheck,
    MailCheck,
    PhoneIncoming,
    LucideGraduationCap,
} from "lucide-react"

export default function ScholarshipWebsite() {
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")

    const scholarships = [
        {
            title: "Merit Excellence Scholarship",
            amount: "$5,000",
            deadline: "March 15, 2024",
            description: "For students with outstanding academic achievements",
            requirements: ["GPA 3.8+", "Community Service", "Essay Required"],
            category: "Academic",
        },
        {
            title: "STEM Innovation Grant",
            amount: "$7,500",
            deadline: "April 20, 2024",
            description: "Supporting future scientists and engineers",
            requirements: ["STEM Major", "Research Project", "Recommendation Letters"],
            category: "STEM",
        },
        {
            title: "Community Leadership Award",
            amount: "$3,000",
            deadline: "May 10, 2024",
            description: "Recognizing student leaders making a difference",
            requirements: ["Leadership Experience", "Community Impact", "Interview"],
            category: "Leadership",
        },
        {
            title: "First Generation College Grant",
            amount: "$4,000",
            deadline: "June 1, 2024",
            description: "Supporting first-generation college students",
            requirements: ["First Generation", "Financial Need", "Personal Statement"],
            category: "Need-Based",
        },
    ]

    const partners = [
        "Tech Innovations Corp",
        "Education Foundation",
        "Future Leaders Inc",
        "STEM Alliance",
        "Community Bank",
        "Global Education Trust"
    ]

    const events = [
        {
            title: "Scholarship Application Workshop",
            date: "February 15, 2024",
            time: "2:00 PM - 4:00 PM",
            location: "Main Campus Auditorium",
            description: "Learn how to write compelling scholarship applications",
        },
        {
            title: "Financial Aid Information Session",
            date: "February 28, 2024",
            time: "6:00 PM - 7:30 PM",
            location: "Virtual Event",
            description: "Understanding financial aid options and requirements",
        },
        {
            title: "Scholarship Awards Ceremony",
            date: "May 20, 2024",
            time: "7:00 PM - 9:00 PM",
            location: "Grand Ballroom",
            description: "Celebrating our scholarship recipients",
        },
    ]

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId)
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <GraduationCapIcon className="h-8 w-8 text-blue-600" />
                            <span className="text-xl font-bold text-gray-900">EduGrant</span>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <button
                                onClick={() => scrollToSection("home")}
                                className={`text-sm font-medium transition-colors ${activeSection === "home" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
                            >
                                HOME
                            </button>
                            <button
                                onClick={() => scrollToSection("about")}
                                className={`text-sm font-medium transition-colors ${activeSection === "about" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
                            >
                                ABOUT
                            </button>
                            <button
                                onClick={() => scrollToSection("scholarships")}
                                className={`text-sm font-medium transition-colors ${activeSection === "scholarships" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
                            >
                                SCHOLARSHIPS
                            </button>
                            <button
                                onClick={() => scrollToSection("partners")}
                                className={`text-sm font-medium transition-colors ${activeSection === "partners" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
                            >
                                PARTNERS
                            </button>
                            <button
                                onClick={() => scrollToSection("events")}
                                className={`text-sm font-medium transition-colors ${activeSection === "events" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
                            >
                                EVENTS
                            </button>
                            <button
                                onClick={() => scrollToSection("contact")}
                                className={`text-sm font-medium transition-colors ${activeSection === "contact" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
                            >
                                CONTACT
                            </button>
                            <button
                                onClick={() => setIsLoginOpen(true)}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                LOGIN
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center py-20">
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                            Unlock Your
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                {" "}
                                Future
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Discover thousands of scholarship opportunities designed to help you achieve your educational dreams. Your
                            journey to success starts here.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors flex items-center justify-center"
                                onClick={() => scrollToSection("scholarships")}
                            >
                                Explore Scholarships
                                <ChevronRightCircle className="ml-2 h-5 w-5" />
                            </button>
                            <button
                                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-md text-lg font-medium transition-colors"
                                onClick={() => scrollToSection("about")}
                            >
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        <div className="text-center p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-lg">
                            <AwardIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">$2.5M+</h3>
                            <p className="text-gray-600">Awarded in Scholarships</p>
                        </div>
                        <div className="text-center p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-lg">
                            <Users2 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">5,000+</h3>
                            <p className="text-gray-600">Students Helped</p>
                        </div>
                        <div className="text-center p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-lg">
                            <BookOpenCheck className="h-12 w-12 text-green-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">200+</h3>
                            <p className="text-gray-600">Active Scholarships</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">About EduGrant</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We're dedicated to making higher education accessible to everyone through comprehensive scholarship
                            opportunities and support.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                At EduGrant, we believe that financial barriers should never prevent talented students from pursuing
                                their educational goals. Our platform connects students with scholarship opportunities that match their
                                unique backgrounds, achievements, and aspirations.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <TargetIcon className="h-6 w-6 text-blue-600 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Accessibility</h4>
                                        <p className="text-gray-600">Making education accessible to students from all backgrounds</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Heart className="h-6 w-6 text-red-600 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Support</h4>
                                        <p className="text-gray-600">Providing comprehensive support throughout the application process</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <StarIcon className="h-6 w-6 text-yellow-600 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Excellence</h4>
                                        <p className="text-gray-600">Recognizing and rewarding academic and personal excellence</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-xl flex items-center justify-center">
                                <div className="text-center p-8">
                                    <GraduationCapIcon className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                                    <p className="text-gray-600 text-lg">Students studying together</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scholarships Section */}
            <section id="scholarships" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Scholarships</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover scholarship opportunities tailored to your academic achievements, career goals, and personal
                            background.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {scholarships.map((scholarship, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                                            {scholarship.category}
                                        </span>
                                        <span className="text-2xl font-bold text-green-600">{scholarship.amount}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{scholarship.title}</h3>
                                    <p className="text-gray-600 mb-4">{scholarship.description}</p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                                            <ul className="space-y-1">
                                                {scholarship.requirements.map((req, reqIndex) => (
                                                    <li key={reqIndex} className="text-sm text-gray-600 flex items-center">
                                                        <ChevronRightCircle className="h-4 w-4 text-blue-600 mr-2" />
                                                        {req}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="flex justify-between items-center pt-4 border-t">
                                            <span className="text-sm text-gray-500">Deadline: {scholarship.deadline}</span>
                                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-md text-lg font-medium transition-colors flex items-center mx-auto">
                            View All Scholarships
                            <ChevronRightIcon className="ml-2 h-5 w-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section id="partners" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We collaborate with leading organizations to provide diverse scholarship opportunities for students.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                        {partners.map((partner, index) => (
                            <div key={index} className="text-center">
                                <div className="h-16 w-24 mx-auto mb-2 bg-gray-200 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                                    <span className="text-xs text-gray-600 text-center px-2">{partner.slice(0, 8)}...</span>
                                </div>
                                <p className="text-sm text-gray-600">{partner}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section id="events" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Join our workshops, information sessions, and networking events to maximize your scholarship success.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {events.map((event, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="p-6">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                                            <p className="text-gray-600 mb-4">{event.description}</p>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                                <div className="flex items-center">
                                                    <Calendar1 className="h-4 w-4 mr-2" />
                                                    {event.date}
                                                </div>
                                                <div className="flex items-center">
                                                    <Clock1 className="h-4 w-4 mr-2" />
                                                    {event.time}
                                                </div>
                                                <div className="flex items-center">
                                                    <MapPinCheck className="h-4 w-4 mr-2" />
                                                    {event.location}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 md:mt-0 md:ml-6">
                                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Have questions about scholarships or need assistance with your application? We're here to help!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <MailCheck className="h-6 w-6 text-blue-600" />
                                    <span className="text-gray-600">info@edugrant.org</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <PhoneIncoming className="h-6 w-6 text-blue-600" />
                                    <span className="text-gray-600">+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <MapPinCheck className="h-6 w-6 text-blue-600" />
                                    <span className="text-gray-600">123 Education Ave, Learning City, LC 12345</span>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Office Hours</h4>
                                <div className="space-y-2 text-gray-600">
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md border">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Send us a Message</h3>
                                <p className="text-gray-600 mb-4">Fill out the form below and we'll get back to you within 24 hours.</p>

                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                            <input type="text" placeholder="John" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                            <input type="text" placeholder="Doe" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input type="email" placeholder="john@example.com" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                        <input type="text" placeholder="Scholarship inquiry" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                        <textarea placeholder="How can we help you?" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition-colors">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <LucideGraduationCap className="h-8 w-8 text-blue-400" />
                                <span className="text-xl font-bold">EduGrant</span>
                            </div>
                            <p className="text-gray-400">
                                Empowering students to achieve their educational dreams through accessible scholarship opportunities.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="#scholarships" className="hover:text-white transition-colors">Scholarships</a></li>
                                <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Application Help</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Legal</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 EduGrant. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            {/* Login Modal */}
            {isLoginOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
                        <div className="p-6">
                            <div className="flex flex-row items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-gray-900">Login to EduGrant</h3>
                                <button
                                    onClick={() => setIsLoginOpen(false)}
                                    className="text-gray-400 hover:text-gray-600 p-1"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>

                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" placeholder="your@email.com" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                    <input type="password" placeholder="••••••••" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="rounded" />
                                        <span className="text-sm text-gray-600">Remember me</span>
                                    </label>
                                    <a href="#" className="text-sm text-blue-600 hover:underline">
                                        Forgot password?
                                    </a>
                                </div>
                                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition-colors">
                                    Sign In
                                </button>
                                <div className="text-center">
                                    <span className="text-sm text-gray-600">
                                        Don't have an account?{' '}
                                        <a href="#" className="text-blue-600 hover:underline">
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