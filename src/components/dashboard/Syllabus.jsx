import React, { useState, useEffect } from "react";
import { syllabusUpload, getAllSyllabus } from "../../api/authApi";
import toast from "react-hot-toast";

const Syllabus = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [studentClass, setStudentClass] = useState("");
  const [scholarship, setScholarship] = useState("");
  const [loading, setLoading] = useState(false);
  const [syllabusList, setSyllabusList] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchSyllabus = async () => {
      try {
        const res = await getAllSyllabus();
        if (isMounted) {
          setSyllabusList(res.data.syllabuses || []);
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to load syllabus list");
      }
    };
    fetchSyllabus();

    return () => {
      isMounted = false;
    };
  }, []);

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedPdf(file);
    } else {
      alert("Please select a valid PDF file!");
    }
  };

  const handleUploadSyllabus = async () => {
    if (!studentClass || !selectedPdf || !scholarship) {
      alert("Please enter all fields and select a PDF file!");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("studentClass", studentClass);
      formData.append("scholarship", scholarship);
      formData.append("file", selectedPdf);

      let res = await syllabusUpload(formData);
      toast.success("Syllabus uploaded successfully!");
      setStudentClass("");
      setScholarship("");
      setSelectedPdf(null);

      res = await getAllSyllabus();
      setSyllabusList(res.data.syllabuses);
    } catch (error) {
      console.error(error);
      alert("Something went wrong while uploading.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="w-full max-w-md mx-auto p-4 mt-8 border rounded-md shadow-sm bg-white">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Upload Syllabus
        </h2>

        {/* Student Class Dropdown */}
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Student Class
        </label>
        <select
          value={studentClass}
          onChange={(e) => setStudentClass(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
        >
          <option value="">-- Select Class --</option>

          <option value="5th">5th</option>
          <option value="6th">6th</option>
          <option value="7th">7th</option>
          <option value="8th">8th</option>
          <option value="9th">9th</option>
          <option value="10th">10th</option>
          <option value="12th/PUC - Arts">12th/PUC - Arts</option>
          <option value="12th/PUC - Commerce">12th/PUC - Commerce</option>
          <option value="12th/PUC - Science">12th/PUC - Science</option>
        </select>

        {/* Scholarship Dropdown */}
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Scholarship
        </label>
        <select
          value={scholarship}
          onChange={(e) => setScholarship(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
        >
          <option value="">-- Select Scholarship --</option>
          <option value="VEES">VEES</option>
          <option value="V-STAR">V-STAR</option>
        </select>

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

        {/* Upload Button */}
        <button
          onClick={handleUploadSyllabus}
          disabled={loading}
          className="mt-4 w-full py-2 rounded-md bg-[#FF6B00] text-white font-semibold hover:bg-[#e55c00] disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload Syllabus"}
        </button>
      </div>
      {/* List of Syllabus */}
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        Uploaded Syllabus
      </h3>
      {syllabusList.length === 0 ? (
        <p className="text-gray-500 text-sm">No syllabus uploaded yet.</p>
      ) : (
        <div className="space-y-4">
          {syllabusList.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between p-4 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div>
                <p className="font-semibold text-gray-800">
                  Class: {item.studentClass}
                </p>
                <p className="text-sm text-gray-600">
                  Scholarship: {item.scholarship}
                </p>
              </div>
              <a
                href={item.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#FF6B00] text-white rounded-md font-medium hover:bg-[#e55c00]"
              >
                View PDF
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Syllabus;
