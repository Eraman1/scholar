import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ScholarshipSidebar from '../components/dashboard/Sidebar';
import StudentCardTable from '../components/dashboard/Students';
import EnquiryTable from '../components/dashboard/Enquiry';
import ImageUploader from '../components/dashboard/ImageUploader';
import Stats from '../components/dashboard/Stats';
import Syllabus from '../components/dashboard/Syllabus';
import ExamSchedule from '../components/dashboard/ExamSchedule';
import AdmitCard from '../components/dashboard/AdmitCard';
import StudentScholarshipSidebar from '../components/studentDashboard/StudentSlideBar';
import ProfileStats from '../components/studentDashboard/stats';
import StudentSyllabus from '../components/studentDashboard/syllabus';

export default function StudentDashboard() {
    const location = useLocation();
    const [tab, setTab] = useState('prof');

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
            setTab(tabFromUrl);
        } else {
            setTab('prof');
        }
    }, [location.search]);

    return (
        <div className="flex min-h-screen mt-5">
            {/* Sidebar - fixed width */}
            <div className="md:w-50 lg:w-60 bg-white border-r shadow-md">
                <StudentScholarshipSidebar />
            </div>

            {/* Main content - takes remaining space */}
            <div className="flex-1 p-4 overflow-auto">
                {tab === 'prof' && <ProfileStats/>}
                {tab === 'student-syllabus' && <StudentSyllabus />}
                {tab === 'students' && <StudentCardTable />}
                {tab === 'enquiries' && <EnquiryTable />}
                {tab === 'syllabus' && <Syllabus/>}
                {tab === 'exam-schedule' && <ExamSchedule />}
                {tab === 'admit-card' && <AdmitCard />}
                {/* Add other tab content here */}
            </div>
        </div>
    );
}

