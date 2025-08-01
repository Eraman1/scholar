import { Download, Upload } from "lucide-react";
import { useState } from "react";

export default function EnquiryTable() {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [enquiryIdToDelete, setEnquiryIdToDelete] = useState(null);

    const sampleEnquiries = [
        {
            _id: "1",
            fullName: "Aman Kumar",
            phone: "9876543210",
            email: "aman@example.com",
            message: "Hello, this is testing message",
            dateAndTime: "2023-08-01T10:00:00.000Z",
        },
    ];



    const handleDeleteClick = (id, e) => {
        e.stopPropagation(); // prevent triggering row click
        setEnquiryIdToDelete(id);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        console.log("Delete enquiry with ID:", enquiryIdToDelete);
        setShowDeleteModal(false);
    };

    return (
        <div className="p-4 w-full overflow-x-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Enquiries </h2>
            </div>
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                    <input type="text" placeholder="Search" className="border border-gray-300 w-[300px] rounded-md py-2 px-4" />
                </div>
            </div>

            <table className="min-w-full table-auto text-left border-collapse">
                <thead className="bg-orange-200">
                    <tr>
                        <th className="px-4 py-2 text-sm font-medium text-gray-600">Name</th>
                        <th className="px-4 py-2 text-sm font-medium text-gray-600">Mobile</th>
                        <th className="px-4 py-2 text-sm font-medium text-gray-600">Email</th>
                        <th className="px-4 py-2 text-sm font-medium text-gray-600">Message</th>
                        <th className="px-4 py-2 text-sm font-medium text-gray-600">Date&time</th>
                        <th className="px-4 py-2 text-sm font-medium text-gray-600 text-center">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {sampleEnquiries.map((message) => (
                        <tr
                            key={message._id}
                            className="bg-white cursor-pointer hover:bg-gray-100"
                        >
                            <td className="px-4 py-2 text-sm">{message.fullName}</td>
                            <td className="px-4 py-2 text-sm">{message.phone}</td>
                            <td className="px-4 py-2 text-sm">{message.email}</td>
                            <td className="px-4 py-2 text-sm">{message.message}</td>
                            <td className="px-4 py-2 text-sm">{message.dateAndTime}</td>
                            <td className="px-4 py-2 text-sm text-red-500 text-center">
                                <button
                                    onClick={(e) => handleDeleteClick(message._id, e)}
                                    className="hover:underline"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                        <div className="text-center">
                            <h3 className="mb-5 text-lg text-gray-500">
                                Are you sure you want to delete this enquiry?
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
