import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ScholarshipSidebar from '../components/dashboard/Sidebar';
import StudentCardTable from '../components/dashboard/Students';
import EnquiryTable from '../components/dashboard/Enquiry';
import ImageUploader from '../components/dashboard/ImageUploader';
import Stats from '../components/dashboard/Stats';

export default function Dashboard() {
    const location = useLocation();
    const [tab, setTab] = useState('dash');

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
            setTab(tabFromUrl);
        } else {
            setTab('dash');
        }
    }, [location.search]);

    return (
        <div className="flex min-h-screen mt-5">
            {/* Sidebar - fixed width */}
            <div className="md:w-50 lg:w-60 bg-white border-r shadow-md">
                <ScholarshipSidebar />
            </div>

            {/* Main content - takes remaining space */}
            <div className="flex-1 p-4 overflow-auto">
                {tab === 'dash' && <Stats/>}
                {tab === 'banner' && <ImageUploader />}
                {tab === 'students' && <StudentCardTable />}
                {tab === 'enquiries' && <EnquiryTable />}
                {/* Add other tab content here */}
            </div>
        </div>
    );
}

