import React, { useEffect, useState } from "react";
import { BookOpen, Download } from "lucide-react";
import toast from "react-hot-toast";

export default function StudentSyllabus() {
  const [syllabusList, setSyllabusList] = useState([]);
  const [loading, setLoading] = useState(false);

 {/*}  useEffect(() => {
    let isMounted = true;

    const fetchSyllabus = async () => {
      try {
        setLoading(true);
        const res = await getAllSyllabus();
        if (isMounted) {
          setSyllabusList(res.data.syllabuses || []);
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to load syllabus");
      } finally {
        setLoading(false);
      }
    };

    fetchSyllabus();
    return () => {
      isMounted = false;
    };
  }, []);  */}

  return (
    <div className="max-w-5xl mx-auto mt-8">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <BookOpen className="w-6 h-6 text-[#FF6B00] mr-2" />
        Download Syllabus
      </h2>

      {/* Loader */}
      {loading && <p className="text-gray-600">Loading syllabus...</p>}

      {/* No Data */}
      {!loading && syllabusList.length === 0 && (
        <p className="text-gray-500">No syllabus available yet.</p>
      )}

      {/* List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {syllabusList.map((item) => (
          <div
            key={item._id}
            className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <p className="text-lg font-semibold text-gray-800">
                Class: {item.studentClass}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                Scholarship: {item.scholarship}
              </p>
            </div>
            <a
              href={item.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 mt-auto bg-[#FF6B00] text-white rounded-lg font-medium hover:bg-[#e55c00] transition"
              download
            >
              <Download className="w-5 h-5" /> Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
