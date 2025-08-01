import { Download, Upload } from "lucide-react";
import { useState } from "react";

export default function StudentCardTable() {
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [studentIdToDelete, setStudentIdToDelete] = useState(null);

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
            district: "New Delhi",
            pinCode: "110001",
            combination: "PCM",
            scholarship: "Merit-based",
        },
        {
            _id: "2",
            studentName: "Aman Kumar",
            mobileNo: "9876543210",
            emailId: "aman@example.com",
            class: "12th",
            schoolCollege: "ABC Public School",
            aadharNo: "1234-5678-9012",
            address: "123 Main Street",
            city: "Delhi",
            district: "New Delhi",
            pinCode: "110001",
            combination: "PCM",
            scholarship: "Merit-based",
        },
        {
            _id: "3",
            studentName: "Aman Kumar",
            mobileNo: "9876543210",
            emailId: "aman@example.com",
            class: "12th",
            schoolCollege: "ABC Public School",
            aadharNo: "1234-5678-9012",
            address: "123 Main Street",
            city: "Delhi",
            district: "New Delhi",
            pinCode: "110001",
            combination: "PCM",
            scholarship: "Merit-based",
        },
    ];

    const handleRowClick = (student) => {
        setSelectedStudent(student);
        setShowDetailsModal(true);
    };

    const handleDeleteClick = (id, e) => {
        e.stopPropagation(); // prevent triggering row click
        setStudentIdToDelete(id);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        console.log("Delete student with ID:", studentIdToDelete);
        setShowDeleteModal(false);
    };

    return (
        <div className="p-4 w-full overflow-x-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Student List </h2>
                <div className="flex gap-2">
                    <button

                        className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                    >
                        <Download className="w-4 h-4" />
                        Export
                    </button>
                    <button

                        className="flex items-center gap-2 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                    >
                        <Upload className="w-4 h-4" />
                        Import
                    </button>
                    <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">
                        Add Student
                    </button>
                </div>
            </div>
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                   <input type="text" placeholder="Search" className="border border-gray-300 w-[300px] rounded-md py-2 px-4" />
                </div>
                <div className="flex gap-2">
                    <select className="border border-gray-300 rounded-md py-2 w-[200px] px-2">
                        <option value="all">All</option>   
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
            </div>

            <table className="min-w-full table-auto text-left border-collapse">
                <thead className="bg-orange-200">
                    <tr>
                        <th className="px-4 py-2 text-sm font-medium text-gray-600">Name</th>
                        <th className="px-4 py-2 text-sm font-medium text-gray-600">Mobile</th>
                        <th className="px-4 py-2 text-sm font-medium text-gray-600">Class</th>
                        <th className="px-4 py-2 text-sm font-medium text-gray-600">School/College</th>
                        <th className="px-4 py-2 text-sm font-medium text-gray-600">City</th>
                        <th className="px-4 py-2 text-sm font-medium text-gray-600 text-center">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {sampleStudents.map((student) => (
                        <tr
                            key={student._id}
                            onClick={() => handleRowClick(student)}
                            className="bg-white cursor-pointer hover:bg-gray-100"
                        >
                            <td className="px-4 py-2 text-sm">{student.studentName}</td>
                            <td className="px-4 py-2 text-sm">{student.mobileNo}</td>
                            <td className="px-4 py-2 text-sm">{student.class}</td>
                            <td className="px-4 py-2 text-sm">{student.schoolCollege}</td>
                            <td className="px-4 py-2 text-sm">{student.city}</td>
                            <td className="px-4 py-2 text-sm text-red-500 text-center">
                                <button
                                    onClick={(e) => handleDeleteClick(student._id, e)}
                                    className="hover:underline"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Student Details Modal */}
            {showDetailsModal && selectedStudent && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
                    <div className="bg-white max-w-lg w-full rounded-md shadow-lg p-6 overflow-y-auto max-h-[90vh]">
                        <h3 className="text-lg font-semibold mb-4">Student Details</h3>
                        <div className="space-y-2 text-sm text-gray-700">
                            <p><strong>Name:</strong> {selectedStudent.studentName}</p>
                            <p><strong>Mobile:</strong> {selectedStudent.mobileNo}</p>
                            <p><strong>Email:</strong> {selectedStudent.emailId}</p>
                            <p><strong>Class:</strong> {selectedStudent.class}</p>
                            <p><strong>School/College:</strong> {selectedStudent.schoolCollege}</p>
                            <p><strong>Aadhar:</strong> {selectedStudent.aadharNo}</p>
                            <p><strong>Address:</strong> {selectedStudent.address}</p>
                            <p><strong>City:</strong> {selectedStudent.city}</p>
                            <p><strong>District:</strong> {selectedStudent.district}</p>
                            <p><strong>Pin Code:</strong> {selectedStudent.pinCode}</p>
                            <p><strong>Combination:</strong> {selectedStudent.combination}</p>
                            <p><strong>Scholarship:</strong> {selectedStudent.scholarship}</p>
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
