import { Download, Upload } from "lucide-react";
import { useState, useMemo } from "react";
import { downloadStudentData,applyBulk } from "../../api/studentApi";
import { saveAs } from "file-saver";

export default function StudentCardTable() {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [studentIdToDelete, setStudentIdToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    scholarship: "all",
    schoolCollege: "all",
    class: "all",
    city: "all",
    state: "all",
  });
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);

  const sampleStudents = [
    {
      _id: "1",
      studentName: "Aman Kumar",
      mobileNo: "9876543210",
      emailId: "aman@example.com",
      class: "12th",
      schoolCollege: "ABC Public School",
      aadharNo: "1234-5678-9012",
      address: "123 Main Street",
      city: "Delhi",
      state: "New Delhi",
      pinCode: "110001",
      combination: "PCM",
      scholarship: "Merit-based",
    },
    {
      _id: "2",
      studentName: "Priya Sharma",
      mobileNo: "9123456789",
      emailId: "priya@example.com",
      class: "11th",
      schoolCollege: "XYZ International School",
      aadharNo: "2345-6789-0123",
      address: "456 Park Avenue",
      city: "Mumbai",
      state: "Maharashtra",
      pinCode: "400001",
      combination: "PCB",
      scholarship: "Need-based",
    },
    {
      _id: "3",
      studentName: "Rahul Singh",
      mobileNo: "9234567890",
      emailId: "rahul@example.com",
      class: "12th",
      schoolCollege: "Delhi Public School",
      aadharNo: "3456-7890-1234",
      address: "789 Green Street",
      city: "Bangalore",
      state: "Karnataka",
      pinCode: "560001",
      combination: "Commerce",
      scholarship: "Sports",
    },
    {
      _id: "4",
      studentName: "Anita Patel",
      mobileNo: "9345678901",
      emailId: "anita@example.com",
      class: "10th",
      schoolCollege: "ABC Public School",
      aadharNo: "4567-8901-2345",
      address: "321 Blue Lane",
      city: "Pune",
      state: "Maharashtra",
      pinCode: "411001",
      combination: "Arts",
      scholarship: "Merit-based",
    },
    {
      _id: "5",
      studentName: "Vikash Yadav",
      mobileNo: "9456789012",
      emailId: "vikash@example.com",
      class: "11th",
      schoolCollege: "Modern College",
      aadharNo: "5678-9012-3456",
      address: "654 Red Road",
      city: "Chennai",
      state: "Tamil Nadu",
      pinCode: "600001",
      combination: "PCM",
      scholarship: "None",
    },
    {
      _id: "6",
      studentName: "Sneha Gupta",
      mobileNo: "9567890123",
      emailId: "sneha@example.com",
      class: "12th",
      schoolCollege: "St. Mary's School",
      aadharNo: "6789-0123-4567",
      address: "987 Yellow Street",
      city: "Kolkata",
      state: "West Bengal",
      pinCode: "700001",
      combination: "PCB",
      scholarship: "Merit-based",
    },
  ];

  // Get unique values for filter options
  const filterOptions = useMemo(() => {
    const scholarships = [...new Set(sampleStudents.map((s) => s.scholarship))];
    const schools = [...new Set(sampleStudents.map((s) => s.schoolCollege))];
    const classes = [...new Set(sampleStudents.map((s) => s.class))];
    const cities = [...new Set(sampleStudents.map((s) => s.city))];
    const states = [...new Set(sampleStudents.map((s) => s.state))];

    return { scholarships, schools, classes, cities, states };
  }, []);

  // Filter students based on search and filters
  const filteredStudents = useMemo(() => {
    return sampleStudents.filter((student) => {
      const matchesSearch =
        searchTerm === "" ||
        student.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.mobileNo.includes(searchTerm) ||
        student.emailId.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesScholarship =
        filters.scholarship === "all" ||
        student.scholarship === filters.scholarship;
      const matchesSchool =
        filters.schoolCollege === "all" ||
        student.schoolCollege === filters.schoolCollege;
      const matchesClass =
        filters.class === "all" || student.class === filters.class;
      const matchesCity =
        filters.city === "all" || student.city === filters.city;
      const matchesState =
        filters.state === "all" || student.state === filters.state;

      return (
        matchesSearch &&
        matchesScholarship &&
        matchesSchool &&
        matchesClass &&
        matchesCity &&
        matchesState
      );
    });
  }, [searchTerm, filters]);

  const handleRowClick = (student) => {
    setSelectedStudent(student);
    setShowDetailsModal(true);
  };

  const handleDeleteClick = (id, e) => {
    e.stopPropagation();
    setStudentIdToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    console.log("Delete student with ID:", studentIdToDelete);
    setShowDeleteModal(false);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      scholarship: "all",
      schoolCollege: "all",
      class: "all",
      city: "all",
      state: "all",
    });
    setSearchTerm("");
  };

  const studentHandleDownload = () => {
    window.open(
      `http://localhost:8000/api/vedubuildApply/download-data`,
      "_blank"
    );
  };

  return (
    <div className="p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          Student List ({filteredStudents.length})
        </h2>
        <div className="flex gap-2">
          <button
            onClick={studentHandleDownload}
            className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
          <button
            onClick={() => setShowUploadModal(true)}
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            Add Student
          </button>
        </div>
      </div>

      {/* student upload pop up */}
      {showUploadModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setShowUploadModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>

            {/* Title */}
            <h2 className="text-lg font-semibold mb-4">
              Upload Students Excel
            </h2>

            {/* File input */}
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              className="border border-gray-300 rounded w-full p-2 mb-4"
            />

            {/* Upload button */}
            <button
              onClick={() => {
                if (!selectedFile) {
                  alert("Please select a file first.");
                  return;
                }
                const formData = new FormData();
                formData.append("file", selectedFile);

                applyBulk(formData)
                  .then((res) => {
                    alert("File uploaded successfully!");
                    setShowUploadModal(false);
                  })
                  .catch((err) => {
                    console.error(err);
                    alert("Error uploading file");
                  });
              }}
              className="bg-orange-500 text-white w-full py-2 rounded hover:bg-orange-600"
            >
              Upload
            </button>
          </div>
        </div>
      )}
      {/*student pop uo end here  */}

      {/* Search and Filters */}
      <div className="mb-4 space-y-4">
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Search by name, mobile, or email..."
            className="border border-gray-300 w-[300px] rounded-md py-2 px-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={clearAllFilters}
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
          >
            Clear Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          {/* Scholarship Filter */}
          <select
            className="border border-gray-300 rounded-md py-2 px-2"
            value={filters.scholarship}
            onChange={(e) => handleFilterChange("scholarship", e.target.value)}
          >
            <option value="all">All Scholarships</option>
            {filterOptions.scholarships.map((scholarship) => (
              <option key={scholarship} value={scholarship}>
                {scholarship}
              </option>
            ))}
          </select>

          {/* School/College Filter */}
          <select
            className="border border-gray-300 rounded-md py-2 px-2"
            value={filters.schoolCollege}
            onChange={(e) =>
              handleFilterChange("schoolCollege", e.target.value)
            }
          >
            <option value="all">All Schools</option>
            {filterOptions.schools.map((school) => (
              <option key={school} value={school}>
                {school}
              </option>
            ))}
          </select>

          {/* Class Filter */}
          <select
            className="border border-gray-300 rounded-md py-2 px-2"
            value={filters.class}
            onChange={(e) => handleFilterChange("class", e.target.value)}
          >
            <option value="all">All Classes</option>
            {filterOptions.classes.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>

          {/* City Filter */}
          <select
            className="border border-gray-300 rounded-md py-2 px-2"
            value={filters.city}
            onChange={(e) => handleFilterChange("city", e.target.value)}
          >
            <option value="all">All Cities</option>
            {filterOptions.cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          {/* State Filter */}
          <select
            className="border border-gray-300 rounded-md py-2 px-2"
            value={filters.state}
            onChange={(e) => handleFilterChange("state", e.target.value)}
          >
            <option value="all">All States</option>
            {filterOptions.states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Table with horizontal scroll */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full table-auto text-left border-collapse">
          <thead className="bg-orange-200">
            <tr>
              <th className="px-4 py-3 text-sm font-medium text-gray-600 whitespace-nowrap">
                Name
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600 whitespace-nowrap">
                Mobile
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600 whitespace-nowrap">
                Email
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600 whitespace-nowrap">
                Class
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600 whitespace-nowrap">
                School/College
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600 whitespace-nowrap">
                Aadhar No
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600 whitespace-nowrap">
                Address
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600 whitespace-nowrap">
                City
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600 whitespace-nowrap">
                State
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600 whitespace-nowrap">
                Pin Code
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600 whitespace-nowrap">
                Combination
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600 whitespace-nowrap">
                Scholarship
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600 text-center whitespace-nowrap">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredStudents.map((student) => (
              <tr
                key={student._id}
                onClick={() => handleRowClick(student)}
                className="bg-white cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-3 text-sm whitespace-nowrap">
                  {student.studentName}
                </td>
                <td className="px-4 py-3 text-sm whitespace-nowrap">
                  {student.mobileNo}
                </td>
                <td className="px-4 py-3 text-sm whitespace-nowrap">
                  {student.emailId}
                </td>
                <td className="px-4 py-3 text-sm whitespace-nowrap">
                  {student.class}
                </td>
                <td className="px-4 py-3 text-sm whitespace-nowrap">
                  {student.schoolCollege}
                </td>
                <td className="px-4 py-3 text-sm whitespace-nowrap">
                  {student.aadharNo}
                </td>
                <td className="px-4 py-3 text-sm whitespace-nowrap">
                  {student.address}
                </td>
                <td className="px-4 py-3 text-sm whitespace-nowrap">
                  {student.city}
                </td>
                <td className="px-4 py-3 text-sm whitespace-nowrap">
                  {student.state}
                </td>
                <td className="px-4 py-3 text-sm whitespace-nowrap">
                  {student.pinCode}
                </td>
                <td className="px-4 py-3 text-sm whitespace-nowrap">
                  {student.combination}
                </td>
                <td className="px-4 py-3 text-sm whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      student.scholarship === "Merit-based"
                        ? "bg-green-100 text-green-800"
                        : student.scholarship === "Need-based"
                        ? "bg-blue-100 text-blue-800"
                        : student.scholarship === "Sports"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {student.scholarship}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-center whitespace-nowrap">
                  <button
                    onClick={(e) => handleDeleteClick(student._id, e)}
                    className="text-red-500 hover:text-red-700 hover:underline font-medium"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredStudents.length === 0 && (
              <tr>
                <td
                  colSpan="13"
                  className="px-4 py-8 text-center text-gray-500"
                >
                  No students found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Student Details Modal */}
      {showDetailsModal && selectedStudent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-white max-w-lg w-full rounded-md shadow-lg p-6 overflow-y-auto max-h-[90vh]">
            <h3 className="text-lg font-semibold mb-4">Student Details</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Name:</strong> {selectedStudent.studentName}
              </p>
              <p>
                <strong>Mobile:</strong> {selectedStudent.mobileNo}
              </p>
              <p>
                <strong>Email:</strong> {selectedStudent.emailId}
              </p>
              <p>
                <strong>Class:</strong> {selectedStudent.class}
              </p>
              <p>
                <strong>School/College:</strong> {selectedStudent.schoolCollege}
              </p>
              <p>
                <strong>Aadhar:</strong> {selectedStudent.aadharNo}
              </p>
              <p>
                <strong>Address:</strong> {selectedStudent.address}
              </p>
              <p>
                <strong>City:</strong> {selectedStudent.city}
              </p>
              <p>
                <strong>State:</strong> {selectedStudent.state}
              </p>
              <p>
                <strong>Pin Code:</strong> {selectedStudent.pinCode}
              </p>
              <p>
                <strong>Combination:</strong> {selectedStudent.combination}
              </p>
              <p>
                <strong>Scholarship:</strong> {selectedStudent.scholarship}
              </p>
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setShowDetailsModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <div className="text-center">
              <h3 className="mb-5 text-lg text-gray-500">
                Are you sure you want to delete this student?
              </h3>
              <div className="flex justify-center gap-4">
                <button
                  onClick={confirmDelete}
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                >
                  Yes, I'm sure
                </button>
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
