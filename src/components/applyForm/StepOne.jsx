// StepOne.js
import React from "react";
import { User, Phone, Mail, MapPin, AlertCircle } from "lucide-react";
import {
  sendPhoneOtp,
  sendEmailOtp,
  verifyPhoneOtp,
  verifyEmailOtp,
} from "../../api/studentApi.js";
import { useState } from "react";

const StepOne = ({ formData, errors, handleInputChange }) => {
  const [showPhoneOtpField, setPhoneShowOtpField] = useState(false);
  const [showEmailOtpField, setPhoneEmailOtpField] = useState(false);

  // Send OTP Handler
  const handleSendOtp = async () => {
    if (!formData.mobileNo || formData.mobileNo.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }
    try {
      const response = await sendPhoneOtp({ phone: formData.mobileNo });
      console.log("OTP sent successfully:", response);
      alert("OTP sent successfully!");
      setPhoneShowOtpField(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP. Please try again.");
    }
  };
  // Send OTP Handler
  const handleSendEmailOtp = async () => {
    if (!formData.emailId) {
      alert("Please enter an email");
      return;
    }
    try {
      const response = await sendEmailOtp({ email: formData.emailId });
      console.log("OTP sent successfully:", response);
      alert("OTP sent successfully!");
      setPhoneEmailOtpField(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP. Please try again.");
    }
  };

  const handleVerifyPhoneOtp = async () => {
    if (!formData.phoneOtp) {
      alert("Please enter an otp");
      return;
    }
    try {
      const response = await verifyPhoneOtp({
        otp: formData.phoneOtp,
        phone: formData.mobileNo,
      });
      console.log("Verified Phone:", response);
      alert("Verified Phone!");
      setPhoneShowOtpField(false);
    } catch (error) {
      console.error("Error :", error);
      alert("Failed to verify OTP. Please try again.");
    }
  };
  const handleVerifyEmailOtp = async () => {
    if (!formData.emailOtp) {
      alert("Please enter an otps");
      return;
    }
    try {
      const response = await verifyEmailOtp({
        otp: formData.emailOtp,
        email: formData.emailId,
      });
      console.log("Verified Email:", response);
      alert("Verified Email!");
      setPhoneEmailOtpField(false);
    } catch (error) {
      console.error("Error :", error);
      alert("Failed to verify OTP. Please try again.");
    }
  };
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <User className="h-12 w-12 text-[#FF6B00] mx-auto mb-2" />
        <h2 className="text-2xl font-bold text-gray-800">
          Personal Information
        </h2>
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
              onChange={(e) => handleInputChange("studentName", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent ${
                errors.studentName ? "border-red-500" : "border-gray-300"
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
          <div className="space-y-3">
            {/* Mobile Number + Send OTP */}
            <div className="relative flex items-center">
              <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="tel"
                value={formData.mobileNo}
                onChange={(e) => handleInputChange("mobileNo", e.target.value)}
                className={`flex-1 pl-10 pr-20 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent ${
                  errors.mobileNo ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter 10-digit mobile number"
                maxLength="10"
              />
              <button
                type="button"
                onClick={handleSendOtp}
                className="absolute right-2 px-3 py-1 bg-[#FF6B00] text-white text-sm rounded-lg hover:bg-orange-600"
              >
                Send OTP
              </button>
            </div>

            {/* OTP Field */}
            {showPhoneOtpField && (
              <div className="mt-3 flex items-center gap-3">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter OTP *
                  </label>
                  <input
                    type="text"
                    value={formData.phoneOtp}
                    nChange={(e) =>
                      handleInputChange("phoneOtp", e.target.value)
                    }
                    className="w-full px-3 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                    placeholder="Enter OTP"
                    maxLength="6"
                  />
                </div>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={handleVerifyPhoneOtp}
                    className="px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Verify
                  </button>
                </div>
              </div>
            )}
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
              onChange={(e) => handleInputChange("emailId", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent ${
                errors.emailId ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email address"
            />
            <button
              type="button"
              onClick={handleSendEmailOtp}
              className="absolute right-2 px-3 py-1 bg-[#FF6B00] text-white text-sm rounded-lg hover:bg-orange-600"
            >
              Send OTP
            </button>
            {/* OTP Field */}
            {showEmailOtpField && (
              <div className="mt-3 flex items-center gap-3">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter OTP *
                  </label>
                  <input
                    type="text"
                    value={formData.emailOtp}
                    onChange={(e) =>
                      handleInputChange("emailOtp", e.target.value)
                    }
                    className="w-full px-3 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                    placeholder="Enter OTP"
                    maxLength="6"
                  />
                </div>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={handleVerifyEmailOtp}
                    className="px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Verify
                  </button>
                </div>
              </div>
            )}
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
              onChange={(e) => handleInputChange("address", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent ${
                errors.address ? "border-red-500" : "border-gray-300"
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

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City *
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent ${
                errors.city ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your city"
            />
          </div>
          {errors.city && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.city}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            State *
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={formData.district}
              onChange={(e) => handleInputChange("district", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent ${
                errors.district ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your district"
            />
          </div>
          {errors.district && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.district}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            PIN Code *
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={formData.pinCode}
              onChange={(e) => handleInputChange("pinCode", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent ${
                errors.pinCode ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter 6-digit PIN code"
              maxLength="6"
            />
          </div>
          {errors.pinCode && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.pinCode}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepOne;
