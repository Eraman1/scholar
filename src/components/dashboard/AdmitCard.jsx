import React from 'react'
import { useState } from 'react';

const AdmitCard = () => {
const [pdfFile, setPdfFile] = useState(null);

  // File change handler
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // sirf ek file lo
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please select a valid PDF file!");
      setPdfFile(null);
    }
  };
  return (
    <div className="w-full max-w-md mx-auto p-4 mt-8 border rounded-md shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-4 text-center">Upload Admit Card</h2>

      {/* PDF Upload */}
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
                   file:rounded-md file:border-0
                   file:text-sm file:font-semibold
                   file:bg-[#FF6B00] file:text-white
                   hover:file:bg-[#e55c00]"
      />

      {/* Selected File Info */}
      {pdfFile && (
        <div className="mt-4 text-sm text-gray-700">
          <p className="mb-1">
            📄 File Selected: <b>{pdfFile.name}</b>
          </p>
          <a
            href={URL.createObjectURL(pdfFile)}
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
}

export default AdmitCard
