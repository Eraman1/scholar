import React, { useState } from 'react'
import { User, Phone, Mail, GraduationCap, School, CreditCard, MapPin, BookOpen, Award, ChevronRight, ChevronLeft, CheckCircle, AlertCircle } from 'lucide-react'

export default function ScholarshipApplicationForm() {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        studentName: '',
        mobileNo: '',
        emailId: '',
        class: '',
        schoolCollege: '',
        aadharNo: '',
        address: '',
        combination: '',
        scholarship: ''
    })
    const [errors, setErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)

    const scholarshipOptions = [
        { value: 'vees', label: 'VEES - Vedubuild Educational Excellence Scholarship', fee: '₹399', target: 'Class 5th-10th' },
        { value: 'vstar', label: 'V-STAR - Vedubuild Standard Test for Award & Rewards', fee: '₹499', target: '12th/PUC' }
    ]

    const classOptions = {
        vees: ['5th', '6th', '7th', '8th', '9th', '10th'],
        vstar: ['12th/PUC - Arts', '12th/PUC - Commerce', '12th/PUC - Science']
    }

    const combinationOptions = {
        'Arts': ['History, Economics, Political Science', 'History, Economics, Sociology', 'History, Psychology, Sociology', 'Other Arts Combination'],
        'Commerce': ['Accountancy, Business Studies, Economics', 'Accountancy, Business Studies, Computer Science', 'Other Commerce Combination'],
        'Science': ['Physics, Chemistry, Mathematics', 'Physics, Chemistry, Biology', 'Physics, Chemistry, Computer Science', 'Other Science Combination']
    }

    const steps = [
        { number: 1, title: 'Personal Information', icon: User },
        { number: 2, title: 'Academic Details', icon: GraduationCap },
        { number: 3, title: 'Program Selection', icon: Award },
        { number: 4, title: 'Review & Submit', icon: CheckCircle }
    ]

    const validateStep = (step) => {
        const newErrors = {}

        if (step === 1) {
            if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required'
            if (!formData.mobileNo.trim()) {
                newErrors.mobileNo = 'Mobile number is required'
            } else if (!/^[6-9]\d{9}$/.test(formData.mobileNo)) {
                newErrors.mobileNo = 'Please enter a valid 10-digit mobile number'
            }
            if (!formData.emailId.trim()) {
                newErrors.emailId = 'Email is required'
            } else if (!/\S+@\S+\.\S+/.test(formData.emailId)) {
                newErrors.emailId = 'Please enter a valid email address'
            }
            if (!formData.address.trim()) newErrors.address = 'Address is required'
        }

        if (step === 2) {
            if (!formData.schoolCollege.trim()) newErrors.schoolCollege = 'School/College name is required'
            if (!formData.aadharNo.trim()) {
                newErrors.aadharNo = 'Aadhar number is required'
            } else if (!/^\d{12}$/.test(formData.aadharNo.replace(/\s/g, ''))) {
                newErrors.aadharNo = 'Please enter a valid 12-digit Aadhar number'
            }
        }

        if (step === 3) {
            if (!formData.scholarship) newErrors.scholarship = 'Please select a scholarship program'
            if (!formData.class) newErrors.class = 'Please select your class'
            if (formData.scholarship === 'vstar' && !formData.combination) {
                newErrors.combination = 'Please select your subject combination'
            }
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }))
        }

        // Clear class and combination when scholarship changes
        if (field === 'scholarship') {
            setFormData(prev => ({ ...prev, class: '', combination: '' }))
        }

        // Clear combination when class changes
        if (field === 'class') {
            setFormData(prev => ({ ...prev, combination: '' }))
        }
    }

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, 4))
        }
    }

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1))
    }

    const handleSubmit = () => {
        if (validateStep(3)) {
            setIsSubmitted(true)
            // Here you would typically send the data to your backend
            console.log('Form submitted:', formData)
        }
    }

    const formatAadhar = (value) => {
        const numbers = value.replace(/\D/g, '')
        return numbers.replace(/(\d{4})(?=\d)/g, '$1 ')
    }

    if (isSubmitted) {
        return (
            <div className="mt-10 min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Submitted!</h2>
                    <p className="text-gray-600 mb-6">
                        Your scholarship application has been successfully submitted. You will receive a confirmation email shortly.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                        <p className="text-sm text-gray-600">Application ID</p>
                        <p className="font-bold text-lg text-gray-800">VED{Date.now().toString().slice(-6)}</p>
                    </div>
                    <button
                        onClick={() => {
                            setIsSubmitted(false)
                            setCurrentStep(1)
                            setFormData({
                                studentName: '', mobileNo: '', emailId: '', class: '',
                                schoolCollege: '', aadharNo: '', address: '', combination: '', scholarship: ''
                            })
                        }}
                        className="w-full bg-[#FF6B00] text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition"
                    >
                        Submit Another Application
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="mt-10 min-h-screen bg-gradient-to-br from-orange-50 to-green-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Scholarship Application Form</h1>
                    <p className="text-gray-600">Apply for Vedubuild Educational Excellence Programs</p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4 overflow-x-auto">
                        {steps.map((step, index) => (
                            <div key={step.number} className="flex items-center flex-shrink-0">
                                <div
                                    className={`flex items-center justify-center
                        w-8 h-8 sm:w-12 sm:h-12
                        rounded-full border-2 transition-all
                        ${currentStep >= step.number
                                            ? 'bg-[#FF6B00] border-[#FF6B00] text-white'
                                            : 'bg-white border-gray-300 text-gray-400'
                                        }`}
                                >
                                    <step.icon className="h-4 w-4 sm:h-6 sm:w-6" />
                                </div>
                                {index < steps.length - 1 && (
                                    <div
                                        className={`h-1 mx-2 transition-all
                            w-10 sm:w-16
                            ${currentStep > step.number
                                                ? 'bg-[#FF6B00]'
                                                : 'bg-gray-300'
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <span className="text-sm font-medium text-gray-600">
                            Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
                        </span>
                    </div>
                </div>


                {/* Form Content */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {/* Step 1: Personal Information */}
                    {currentStep === 1 && (
                        <div className="space-y-6">
                            <div className="text-center mb-6">
                                <User className="h-12 w-12 text-[#FF6B00] mx-auto mb-2" />
                                <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
                                <p className="text-gray-600">Please provide your basic details</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Student Name *
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                        <input
                                            type="text"
                                            value={formData.studentName}
                                            onChange={(e) => handleInputChange('studentName', e.target.value)}
                                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent ${errors.studentName ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    {errors.studentName && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center">
                                            <AlertCircle className="h-4 w-4 mr-1" />
                                            {errors.studentName}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Mobile Number *
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                        <input
                                            type="tel"
                                            value={formData.mobileNo}
                                            onChange={(e) => handleInputChange('mobileNo', e.target.value)}
                                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent ${errors.mobileNo ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            placeholder="Enter 10-digit mobile number"
                                            maxLength="10"
                                        />
                                    </div>
                                    {errors.mobileNo && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center">
                                            <AlertCircle className="h-4 w-4 mr-1" />
                                            {errors.mobileNo}
                                        </p>
                                    )}
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email ID *
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                        <input
                                            type="email"
                                            value={formData.emailId}
                                            onChange={(e) => handleInputChange('emailId', e.target.value)}
                                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent ${errors.emailId ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            placeholder="Enter your email address"
                                        />
                                    </div>
                                    {errors.emailId && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center">
                                            <AlertCircle className="h-4 w-4 mr-1" />
                                            {errors.emailId}
                                        </p>
                                    )}
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Address *
                                    </label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                        <textarea
                                            value={formData.address}
                                            onChange={(e) => handleInputChange('address', e.target.value)}
                                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent ${errors.address ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            rows="3"
                                            placeholder="Enter your complete address"
                                        />
                                    </div>
                                    {errors.address && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center">
                                            <AlertCircle className="h-4 w-4 mr-1" />
                                            {errors.address}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Academic Details */}
                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <div className="text-center mb-6">
                                <GraduationCap className="h-12 w-12 text-[#FF6B00] mx-auto mb-2" />
                                <h2 className="text-2xl font-bold text-gray-800">Academic Details</h2>
                                <p className="text-gray-600">Please provide your academic information</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        School/College Name *
                                    </label>
                                    <div className="relative">
                                        <School className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                        <input
                                            type="text"
                                            value={formData.schoolCollege}
                                            onChange={(e) => handleInputChange('schoolCollege', e.target.value)}
                                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent ${errors.schoolCollege ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            placeholder="Enter your school/college name"
                                        />
                                    </div>
                                    {errors.schoolCollege && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center">
                                            <AlertCircle className="h-4 w-4 mr-1" />
                                            {errors.schoolCollege}
                                        </p>
                                    )}
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Aadhar Number *
                                    </label>
                                    <div className="relative">
                                        <CreditCard className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                        <input
                                            type="text"
                                            value={formData.aadharNo}
                                            onChange={(e) => handleInputChange('aadharNo', formatAadhar(e.target.value))}
                                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent ${errors.aadharNo ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            placeholder="Enter 12-digit Aadhar number"
                                            maxLength="14"
                                        />
                                    </div>
                                    {errors.aadharNo && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center">
                                            <AlertCircle className="h-4 w-4 mr-1" />
                                            {errors.aadharNo}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Program Selection */}
                    {currentStep === 3 && (
                        <div className="space-y-6">
                            <div className="text-center mb-6">
                                <Award className="h-12 w-12 text-[#FF6B00] mx-auto mb-2" />
                                <h2 className="text-2xl font-bold text-gray-800">Program Selection</h2>
                                <p className="text-gray-600">Choose your scholarship program and academic details</p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Select Scholarship Program *
                                    </label>
                                    <div className="grid gap-4">
                                        {scholarshipOptions.map((option) => (
                                            <div
                                                key={option.value}
                                                className={`border rounded-lg p-4 cursor-pointer transition-all ${formData.scholarship === option.value
                                                    ? 'border-[#FF6B00] bg-orange-50'
                                                    : 'border-gray-300 hover:border-gray-400'
                                                    }`}
                                                onClick={() => handleInputChange('scholarship', option.value)}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className={`w-4 h-4 rounded-full border-2 mr-3 ${formData.scholarship === option.value
                                                            ? 'border-[#FF6B00] bg-[#FF6B00]'
                                                            : 'border-gray-300'
                                                            }`}>
                                                            {formData.scholarship === option.value && (
                                                                <div className="w-full h-full rounded-full bg-white scale-50"></div>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <h3 className="font-semibold text-gray-800">{option.label}</h3>
                                                            <p className="text-sm text-gray-600">Target: {option.target}</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-bold text-[#FF6B00]">{option.fee}</p>
                                                        <p className="text-xs text-gray-500">Enrollment Fee</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {errors.scholarship && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center">
                                            <AlertCircle className="h-4 w-4 mr-1" />
                                            {errors.scholarship}
                                        </p>
                                    )}
                                </div>

                                {formData.scholarship && (
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Class *
                                            </label>
                                            <select
                                                value={formData.class}
                                                onChange={(e) => handleInputChange('class', e.target.value)}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent ${errors.class ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                            >
                                                <option value="">Select Class</option>
                                                {classOptions[formData.scholarship]?.map((cls) => (
                                                    <option key={cls} value={cls}>{cls}</option>
                                                ))}
                                            </select>
                                            {errors.class && (
                                                <p className="mt-1 text-sm text-red-600 flex items-center">
                                                    <AlertCircle className="h-4 w-4 mr-1" />
                                                    {errors.class}
                                                </p>
                                            )}
                                        </div>

                                        {formData.scholarship === 'vstar' && formData.class && (
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Subject Combination *
                                                </label>
                                                <select
                                                    value={formData.combination}
                                                    onChange={(e) => handleInputChange('combination', e.target.value)}
                                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent ${errors.combination ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                >
                                                    <option value="">Select Combination</option>
                                                    {Object.entries(combinationOptions).map(([stream, combinations]) => (
                                                        <optgroup key={stream} label={stream}>
                                                            {combinations.map((combo) => (
                                                                <option key={combo} value={combo}>{combo}</option>
                                                            ))}
                                                        </optgroup>
                                                    ))}
                                                </select>
                                                {errors.combination && (
                                                    <p className="mt-1 text-sm text-red-600 flex items-center">
                                                        <AlertCircle className="h-4 w-4 mr-1" />
                                                        {errors.combination}
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Step 4: Review & Submit */}
                    {currentStep === 4 && (
                        <div className="space-y-6">
                            <div className="text-center mb-6">
                                <CheckCircle className="h-12 w-12 text-[#FF6B00] mx-auto mb-2" />
                                <h2 className="text-2xl font-bold text-gray-800">Review & Submit</h2>
                                <p className="text-gray-600">Please review your information before submitting</p>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-600">Student Name</p>
                                        <p className="font-semibold">{formData.studentName}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Mobile Number</p>
                                        <p className="font-semibold">{formData.mobileNo}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Email ID</p>
                                        <p className="font-semibold">{formData.emailId}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Class</p>
                                        <p className="font-semibold">{formData.class}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">School/College</p>
                                        <p className="font-semibold">{formData.schoolCollege}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Aadhar Number</p>
                                        <p className="font-semibold">{formData.aadharNo}</p>
                                    </div>
                                    {formData.combination && (
                                        <div>
                                            <p className="text-sm text-gray-600">Subject Combination</p>
                                            <p className="font-semibold">{formData.combination}</p>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Address</p>
                                    <p className="font-semibold">{formData.address}</p>
                                </div>
                                <div className="border-t pt-4">
                                    <p className="text-sm text-gray-600">Selected Program</p>
                                    <p className="font-semibold text-[#FF6B00]">
                                        {scholarshipOptions.find(opt => opt.value === formData.scholarship)?.label}
                                    </p>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Enrollment Fee: {scholarshipOptions.find(opt => opt.value === formData.scholarship)?.fee}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <div className="flex">
                                    <AlertCircle className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-blue-700">
                                            <strong>Important:</strong> Please ensure all information is correct before submitting.
                                            You will receive an email confirmation with payment instructions after submission.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-8 border-t">
                        <button
                            onClick={prevStep}
                            disabled={currentStep === 1}
                            className={`flex items-center px-6 py-3 rounded-lg font-medium transition ${currentStep === 1
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            <ChevronLeft className="h-5 w-5 mr-2" />
                            Previous
                        </button>

                        {currentStep < 4 ? (
                            <button
                                onClick={nextStep}
                                className="flex items-center px-6 py-3 bg-[#FF6B00] text-white rounded-lg font-medium hover:bg-orange-600 transition"
                            >
                                Next
                                <ChevronRight className="h-5 w-5 ml-2" />
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                className="flex items-center px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
                            >
                                Submit Application
                                <CheckCircle className="h-5 w-5 ml-2" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}