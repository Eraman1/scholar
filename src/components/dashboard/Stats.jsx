import React, { useState, useEffect, useMemo } from "react";
import {
  Users,
  FileText,
  GraduationCap,
  TrendingUp,
  Calendar,
  Award,
  BookOpen,
  UserCheck,
  Clock,
  Target,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { totalEnquiries } from "../../api/enquiryApi.js";
import { totalStudents } from "../../api/studentApi.js";

export default function Stats() {
  const [animatedValues, setAnimatedValues] = useState({});
  const [totalEnq, setTotalEnq] = useState(0);
  const [totalstu, setTotalstu] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    totalEnquiries()
      .then((res) => {
        console.log("Enquiry API Response:", res.data);
        setTotalEnq(res.data.totalEnquiries);
      })
      .catch((err) => {
        console.error("Error fetching total enquiries:", err);
      });
  }, []);

  useEffect(() => {
    totalStudents()
      .then((res) => {
        setTotalstu(res.data.totalStudents);
      })
      .catch((err) => {
        console.error("Error fetching total enquiries:", err);
      });
  }, []);

  // Sample data - replace with actual API data
  const statsData = useMemo(
    () => [
      {
        id: "enquiries",
        title: "Total Enquiries",
        value: totalEnq,
        change: "+12%",
        changeType: "positive",
        icon: FileText,
        color: "bg-green-600",
        lightColor: "bg-green-50",
      },
      {
        id: "applications",
        title: "Student Applications",
        value: totalstu,
        change: "+8%",
        changeType: "positive",
        icon: Users,
        color: "bg-orange-500",
        lightColor: "bg-orange-50",
        // description: "Pending & Approved",
      },
    ],
    [totalEnq, totalstu]
  );

  const monthlyData = [
    { month: "Jan", enquiries: 98, applications: 67, enrolled: 45 },
    { month: "Feb", enquiries: 112, applications: 78, enrolled: 52 },
    { month: "Mar", enquiries: 125, applications: 89, enrolled: 61 },
    { month: "Apr", enquiries: 143, applications: 95, enrolled: 68 },
    { month: "May", enquiries: 156, applications: 108, enrolled: 74 },
    { month: "Jun", enquiries: 134, applications: 92, enrolled: 67 },
  ];

  useEffect(() => {
    statsData.forEach((stat) => {
      const end = stat.value || 0; // ✅ agar value null/undefined hai to 0
      let start = 0;
      const duration = 1000; // 1 second
      const increment = Math.max(1, Math.ceil(end / (duration / 16)));

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setAnimatedValues((prev) => ({
          ...prev,
          [stat.id]: start,
        }));
      }, 16);

      return () => clearInterval(timer);
    });
  }, [statsData]);

  const StatCard = ({ stat }) => {
    const IconComponent = stat.icon;
    const animatedValue = animatedValues[stat.id] || 0;

    return (
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-green-500">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${stat.color}`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                stat.changeType === "positive"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {stat.change}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-900">
              {animatedValues[stat.id] ?? stat.value}
            </h3>
            <p className="text-sm font-medium text-gray-600">{stat.title}</p>
            <p className="text-xs text-gray-500">{stat.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen mt-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dashboard Statistics
          </h1>
          <p className="text-gray-600">
            Overview of your educational platform metrics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white shadow-lg flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Recent Enquiries</h3>

            {/* spacer ke liye mt-auto */}
            <button
              onClick={() => navigate("/dashboard?tab=enquiries")}
              className="mt-auto bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors"
            >
              View All
            </button>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-6 text-white shadow-lg flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Total Applications</h3>
            

            <button
              onClick={() => navigate("/dashboard?tab=students")}
              className="mt-auto bg-white text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-orange-50 transition-colors"
            >
              Review Now
            </button>
          </div>

          <div className="bg-gradient-to-r from-lime-600 to-green-600 rounded-xl p-6 text-white shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Exam Management</h3>
            <p className="text-lime-100 mb-4">5 exams scheduled this week</p>
            <button className="bg-white text-lime-700 px-4 py-2 rounded-lg font-medium hover:bg-lime-50 transition-colors">
              Manage Exams
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
