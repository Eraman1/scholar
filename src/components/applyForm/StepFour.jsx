// StepFour.js
import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { scholarshipOptions } from './constants';

const StepFour = ({ formData }) => {
    const selectedScholarship = scholarshipOptions.find(opt => opt.value === formData.scholarship);

    return (
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
                    <div>
                        <p className="text-sm text-gray-600">City</p>
                        <p className="font-semibold">{formData.city}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">State</p>
                        <p className="font-semibold">{formData.district}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">PIN Code</p>
                        <p className="font-semibold">{formData.pinCode}</p>
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
                        {selectedScholarship?.label}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                        Enrollment Fee: {selectedScholarship?.fee}
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
    );
};

export default StepFour;