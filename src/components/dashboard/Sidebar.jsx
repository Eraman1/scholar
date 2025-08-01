import { Sidebar, SidebarItem, SidebarItemGroup } from "flowbite-react";
import {
    ChartPie,
    User,
    LogOut,
    Image,
    MessageSquare,
    GraduationCap,
    Layout,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const SidebarIcon = ({ icon: Icon }) => <Icon size={20} />;

export default function ScholarshipSidebar() {
    const isActiveTab = (tab) => {
        return location.search.includes(`tab=${tab}`);
    };
    return (
        <Sidebar className="w-full h-screen md:w-50 lg:w-60 bg-white border-r border-gray-200 overflow-y-auto">
            <SidebarItemGroup className="flex flex-col gap-2 p-2">

                <Link to="#">
                    <SidebarItem icon={() => <SidebarIcon icon={ChartPie} />}>
                        <span className="ml-3 text-sm font-medium">Dashboard</span>
                    </SidebarItem>
                </Link>

                <Link to="/dashboard?tab=banner">
                    <SidebarItem icon={() => <SidebarIcon icon={Image} />}
                        className={`cursor-pointer ${isActiveTab("banner") ? "bg-green-200" : ""}`}>
                        <span className="ml-3 text-sm font-medium">Banner</span>
                    </SidebarItem>
                </Link>

                <Link to="/dashboard?tab=enquiries">
                    <SidebarItem icon={() => <SidebarIcon icon={MessageSquare} />}
                        active={isActiveTab("enquiries")}
                        className={`cursor-pointer ${isActiveTab("enquiries") ? "bg-green-200" : ""}`}>
                        <span className="ml-3 text-sm font-medium">Enquiries</span>
                    </SidebarItem>
                </Link>

                <Link to="/dashboard?tab=students">
                    <SidebarItem icon={() => <SidebarIcon icon={GraduationCap} />}
                        active={isActiveTab("students")}
                        className={`cursor-pointer ${isActiveTab("students") ? "bg-green-200" : ""}`}
                    >
                        <span className="ml-3 text-sm font-medium">Students</span>
                    </SidebarItem>
                </Link>



                <hr className="my-4 border-gray-200" />

                <SidebarItem icon={() => <SidebarIcon icon={LogOut} />}>
                    <span className="ml-3 text-sm font-medium">Sign Out</span>
                </SidebarItem>

            </SidebarItemGroup>
        </Sidebar>
    );
}
