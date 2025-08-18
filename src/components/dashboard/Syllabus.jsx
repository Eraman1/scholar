import React from "react";
import { useState } from "react";
const Syllabus = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [studentClass, setStudentClass] = useState("");

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedPdf(file);
    } else {
      alert("Please select a valid PDF file!");
    }
  };
  return (
    <div className="w-full max-w-md mx-auto p-4 mt-8 border rounded-md shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-4 text-center">Upload PDF</h2>

      {/* Student Class Input */}
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Student Class
      </label>
      <input
        type="text"
        value={studentClass}
        onChange={(e) => setStudentClass(e.target.value)}
        placeholder="Enter student class"
        className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
      />

      {/* PDF Upload */}
      <input
        type="file"
        accept="application/pdf"
        onChange={handlePdfChange}
        className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
                   file:rounded-md file:border-0
                   file:text-sm file:font-semibold
                   file:bg-[#FF6B00] file:text-white
                   hover:file:bg-[#e55c00]"
      />

      {/* Selected File Info */}
      {selectedPdf && (
        <div className="mt-4 text-sm text-gray-700">
          <p className="mb-1">
            📄 File Selected: <b>{selectedPdf.name}</b>
          </p>
          <a
            href={URL.createObjectURL(selectedPdf)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6B00] hover:underline"
          >
            Open PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default Syllabus;
