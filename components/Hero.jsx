import React from 'react'
import { ChevronRightCircle, AwardIcon, Users2, BookOpenCheck } from 'lucide-react'

export const Hero = () => {
    const scrollToSection = (id) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            id="home"
            className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(45, 45, 45, 0.47), rgba(76, 76, 76, 0.61)), 
                url('https://images.pexels.com/photos/8199602/pexels-photo-8199602.jpeg')`,
            }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center py-20">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
                        Unlock Your
                        <span className="text-transparent bg-clip-text bg-lime-400">
                            {" "}Future
                        </span>
                    </h1>
                    <p className="text-xl text-white mb-10 max-w-3xl mx-auto">
                        Discover thousands of scholarship opportunities designed to help you achieve your educational dreams. Your journey to success starts here.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => scrollToSection("scholarships")}
                            className="bg-[#FF6B00] hover:bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-semibold transition-all flex items-center justify-center shadow-md"
                        >
                            Explore Scholarships
                            <ChevronRightCircle className="ml-2 h-5 w-5" />
                        </button>
                        <button
                            onClick={() => scrollToSection("about")}
                            className="border border-Lime-400 text-lime-400 hover:bg-[#f3f3f3] px-8 py-3 rounded-md text-lg font-semibold transition-all shadow-sm"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="text-center p-6 shadow-lg bg-white rounded-lg border border-gray-100">
                        <AwardIcon className="h-12 w-12 text-[#FF6B00] mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-[#3B3B3B] mb-2">₹20+ Cr</h3>
                        <p className="text-[#3B3B3B]">Awarded in Scholarships</p>
                    </div>
                    <div className="text-center p-6 shadow-lg bg-white rounded-lg border border-gray-100">
                        <Users2 className="h-12 w-12 text-[#51A545] mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-[#3B3B3B] mb-2">5,000+</h3>
                        <p className="text-[#3B3B3B]">Students Helped</p>
                    </div>
                    <div className="text-center p-6 shadow-lg bg-white rounded-lg border border-gray-100">
                        <BookOpenCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-[#3B3B3B] mb-2">200+</h3>
                        <p className="text-[#3B3B3B]">Active Scholarships</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
