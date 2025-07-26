

import { TargetIcon, GraduationCapIcon, LightbulbIcon, Users2, GraduationCap } from 'lucide-react'

export const AboutUs = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#3B3B3B] mb-2">About Vedubuild</h2>
                    <div className="w-32 h-1 bg-lime-500 mx-auto rounded-full"></div>
                    <p className="text-xl text-[#3B3B3B] max-w-3xl mx-auto mt-4">
                        Empowering youth, uplifting communities, and building a skilled India through certified vocational education and entrepreneurship.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-bold text-[#FF6B00] mb-6">Our Mission</h3>
                        <p className="text-[#3B3B3B] mb-6 leading-relaxed">
                            Vedubuild is an NGO working with Government and Non-Government partners to provide certified skill development and vocational training.
                            We focus on enhancing employability for youth across India, especially the unemployed, by bridging the gap between education and livelihood.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <TargetIcon className="h-6 w-6 text-[#FF6B00] mt-1" />
                                <div>
                                    <h4 className="font-semibold text-[#3B3B3B]">Skill Development</h4>
                                    <p className="text-[#3B3B3B]">Empowering youth with industry-aligned certifications under SSC and UGC-approved courses.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Users2 className="h-6 w-6 text-[#51A545] mt-1" />
                                <div>
                                    <h4 className="font-semibold text-[#3B3B3B]">Community Upliftment</h4>
                                    <p className="text-[#3B3B3B]">Forming Women Self Help Groups and supporting micro-entrepreneurship in rural India.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <LightbulbIcon className="h-6 w-6 text-yellow-500 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-[#3B3B3B]">Innovation & Startups</h4>
                                    <p className="text-[#3B3B3B]">Supporting innovators and startups with resources, mentorship, and skills to scale their ideas.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="w-full h-96 bg-gradient-to-br from-[#FFF3E0] to-[#E8F5E9] rounded-lg shadow-xl flex items-center justify-center">
                            <div className="text-center p-8">
                                <GraduationCap className="h-24 w-24 text-[#FF6B00] mx-auto mb-4" />
                                <p className="text-[#3B3B3B] text-lg">Vocational training empowering India’s youth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
