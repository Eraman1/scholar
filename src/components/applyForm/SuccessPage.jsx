// SuccessPage.js
import React from 'react';
import { CheckCircle } from 'lucide-react';

const SuccessPage = ({ onNewApplication }) => {
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
                    onClick={onNewApplication}
                    className="w-full bg-[#FF6B00] text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition"
                >
                    Submit Another Application
                </button>
            </div>
        </div>
    );
};

export default SuccessPage;