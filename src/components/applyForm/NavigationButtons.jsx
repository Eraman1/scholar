// NavigationButtons.js
import React from "react";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { addStudentData } from "../../api/studentApi";

const NavigationButtons = ({
  currentStep,
  onPrevious,
  onNext,
  onSubmit,
  formData,
}) => {
  const handleAddStudentData = async () => {
    if (!formData) {
      alert("Please enter data");
      return;
    }
    try {
      const response = await addStudentData(formData);
      console.log("Apply successfully:", response);
      alert("Apply successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to Appy. Please try again.");
    }
  };


  return (
    <div className="flex justify-between pt-8">
      <button
        onClick={onPrevious}
        disabled={currentStep === 1}
        className={`flex items-center cursor-pointer px-6 py-3 rounded-lg font-medium transition ${
          currentStep === 1
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        <ChevronLeft className="h-5 w-5 mr-2" />
        Previous
      </button>

      {currentStep < 4 ? (
        <button
          onClick={onNext}
          className="flex items-center cursor-pointer px-6 py-3 bg-[#FF6B00] text-white rounded-lg font-medium hover:bg-orange-600 transition"
        >
          Next
          <ChevronRight className="h-5 w-5 ml-2" />
        </button>
      ) : (
        <button
          onClick={async() => {
            await handleAddStudentData();
            onSubmit();
          }}
          className="flex items-center px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
        >
          Submit Application
          <CheckCircle className="h-5 w-5 ml-2" />
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
