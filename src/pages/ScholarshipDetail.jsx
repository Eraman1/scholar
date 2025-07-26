import React from 'react'
import {
    Calendar, Clock, Users, Award, BookOpen, Target, CheckCircle,
    MapPin, IndianRupee, Gift
} from 'lucide-react'

import { useParams } from 'react-router-dom'
import { scholarships } from '../data/scholarships' // ✅ Make sure path is correct

export default function DetailedScholarshipPage() {
    const { id } = useParams()
    const currentProgram = scholarships.find(sch => sch.id === id)
    const activeTab = id // 'vees' or 'v-star'

    if (!currentProgram) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">
                Scholarship program not found.
            </div>
        )
    }

    return (
        <div className="min-h-screen mt-10 bg-gradient-to-br from-orange-50 to-green-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-[#3B3B3B] mb-4">Vedubuild Scholarship Programs</h1>
                        <div className="w-32 h-1 bg-lime-500 mx-auto rounded-full mb-4"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Empowering students through educational excellence and skill development opportunities
                        </p>
                    </div>
                </div>
            </div>

            {/* Program Tabs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Overview */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <div className="flex items-center mb-4">
                                <Award className="h-8 w-8 text-[#FF6B00] mr-3" />
                                <h2 className="text-2xl font-bold text-[#3B3B3B]">{currentProgram.title}</h2>
                            </div>
                            <p className="text-lg text-gray-600 mb-6">{currentProgram.subtitle}</p>
                            <div className="bg-gradient-to-r from-orange-100 to-green-100 rounded-lg p-6">
                                <p className="text-[#3B3B3B] leading-relaxed">{currentProgram.objective}</p>
                            </div>
                        </div>

                        {/* Exam Pattern */}
                        {currentProgram.examPattern && (
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <div className="flex items-center mb-6">
                                    <BookOpen className="h-6 w-6 text-[#FF6B00] mr-3" />
                                    <h3 className="text-xl font-bold text-[#3B3B3B]">Exam Pattern</h3>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center">
                                            <Target className="h-5 w-5 text-[#51A545] mr-3" />
                                            <span className="text-[#3B3B3B]"><strong>Questions:</strong> {currentProgram.examPattern.questions}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="h-5 w-5 text-[#51A545] mr-3" />
                                            <span className="text-[#3B3B3B]"><strong>Duration:</strong> {currentProgram.examPattern.duration}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center">
                                            <Users className="h-5 w-5 text-[#51A545] mr-3" />
                                            <span className="text-[#3B3B3B]"><strong>Language:</strong> {currentProgram.examPattern.language}</span>
                                        </div>
                                        <div className="flex items-start">
                                            <BookOpen className="h-5 w-5 text-[#51A545] mr-3 mt-0.5" />
                                            <span className="text-[#3B3B3B]"><strong>Subjects:</strong> {currentProgram.examPattern.subjects}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Awards & Benefits */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <div className="flex items-center mb-6">
                                <Gift className="h-6 w-6 text-[#FF6B00] mr-3" />
                                <h3 className="text-xl font-bold text-[#3B3B3B]">
                                    {activeTab === 'v-star' ? 'Awards & Benefits' : 'Student Benefits'}
                                </h3>
                            </div>

                            {currentProgram.awards && (
                                <div className="mb-8">
                                    <h4 className="text-lg font-semibold text-[#3B3B3B] mb-4">Scholarship Awards</h4>
                                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                                        <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-4 rounded-lg">
                                            <h5 className="font-bold text-[#3B3B3B] mb-2">State Level</h5>
                                            <p className="text-lg font-bold text-[#FF6B00]">₹50,000</p>
                                            <p className="text-sm text-gray-600">2 years</p>
                                            <p className="text-xs text-gray-500 mt-1">Top 15 per wing</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-4 rounded-lg">
                                            <h5 className="font-bold text-[#3B3B3B] mb-2">Division Level</h5>
                                            <p className="text-lg font-bold text-[#FF6B00]">₹20,000</p>
                                            <p className="text-sm text-gray-600">2 years</p>
                                            <p className="text-xs text-gray-500 mt-1">Top 15 per wing</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-lg">
                                            <h5 className="font-bold text-[#3B3B3B] mb-2">District Level</h5>
                                            <p className="text-lg font-bold text-[#FF6B00]">₹10,000</p>
                                            <p className="text-sm text-gray-600">2 years</p>
                                            <p className="text-xs text-gray-500 mt-1">Top 15 per wing</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-4">
                                {currentProgram.benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-[#51A545] mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-[#3B3B3B]">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Dates */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="flex items-center mb-4">
                                <Calendar className="h-6 w-6 text-[#FF6B00] mr-3" />
                                <h3 className="text-lg font-bold text-[#3B3B3B]">Important Dates</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="border-l-4 border-[#FF6B00] pl-4">
                                    <p className="font-semibold text-[#3B3B3B]">Enrollment Period</p>
                                    <p className="text-sm text-gray-600">{currentProgram.enrollmentPeriod}</p>
                                </div>
                                <div className="border-l-4 border-[#51A545] pl-4">
                                    <p className="font-semibold text-[#3B3B3B]">Exam Date</p>
                                    <p className="text-sm text-gray-600">{currentProgram.examDate}</p>
                                </div>
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <p className="font-semibold text-[#3B3B3B]">Result Date</p>
                                    <p className="text-sm text-gray-600">{currentProgram.resultDate}</p>
                                </div>
                                <div className="border-l-4 border-purple-500 pl-4">
                                    <p className="font-semibold text-[#3B3B3B]">Award Ceremony</p>
                                    <p className="text-sm text-gray-600">{currentProgram.awardCeremony}</p>
                                </div>
                            </div>
                        </div>

                        {/* Fee */}
                        <div className="bg-gradient-to-br from-[#FF6B00] to-orange-600 text-white rounded-xl shadow-lg p-6">
                            <div className="flex items-center mb-4">
                                <IndianRupee className="h-6 w-6 mr-3" />
                                <h3 className="text-lg font-bold">Enrollment Fee</h3>
                            </div>
                            <p className="text-3xl font-bold mb-2">{currentProgram.enrollmentFee}</p>
                            <p className="text-sm opacity-90 mb-4">One-time registration fee</p>
                            <button className="w-full bg-white text-[#FF6B00] font-bold py-3 px-4 rounded-lg hover:bg-gray-100 transition">
                                Enroll Now
                            </button>
                        </div>

                        {/* Eligibility */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="flex items-center mb-4">
                                <Users className="h-6 w-6 text-[#FF6B00] mr-3" />
                                <h3 className="text-lg font-bold text-[#3B3B3B]">Eligibility</h3>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-[#51A545] mr-2" />
                                    <span className="text-sm text-[#3B3B3B]">{currentProgram.eligibility}</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-[#51A545] mr-2" />
                                    <span className="text-sm text-[#3B3B3B]">Indian Citizenship</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="h-4 w-4 text-[#51A545] mr-2" />
                                    <span className="text-sm text-[#3B3B3B]">Pan India (Currently for Karnataka)</span>
                                </div>
                            </div>
                        </div>

                        {/* Enrollment Method */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-[#3B3B3B] mb-4">How to Enroll</h3>
                            <div className="space-y-4">
                                <div className="border rounded-lg p-4">
                                    <h4 className="font-semibold text-[#3B3B3B] mb-2">Online Mode</h4>
                                    <p className="text-sm text-gray-600">Enroll through online payment gateway</p>
                                </div>
                                {activeTab === 'vees' && (
                                    <div className="border rounded-lg p-4">
                                        <h4 className="font-semibold text-[#3B3B3B] mb-2">Offline Mode</h4>
                                        <p className="text-sm text-gray-600">Pay at your school/training institution</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
