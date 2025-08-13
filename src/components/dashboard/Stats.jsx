import React, { useState, useEffect } from 'react';
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
    Target
} from 'lucide-react';

export default function Stats() {
    const [animatedValues, setAnimatedValues] = useState({});

    // Sample data - replace with actual API data
    const statsData = [
        {
            id: 'enquiries',
            title: 'Total Enquiries',
            value: 1247,
            change: '+12%',
            changeType: 'positive',
            icon: FileText,
            color: 'bg-green-600',
            lightColor: 'bg-green-50',
            description: 'This month'
        },
        {
            id: 'applications',
            title: 'Student Applications',
            value: 856,
            change: '+8%',
            changeType: 'positive',
            icon: Users,
            color: 'bg-orange-500',
            lightColor: 'bg-orange-50',
            description: 'Pending & Approved'
        },
        {
            id: 'enrolled',
            title: 'Enrolled Students',
            value: 634,
            change: '+15%',
            changeType: 'positive',
            icon: GraduationCap,
            color: 'bg-emerald-600',
            lightColor: 'bg-emerald-50',
            description: 'Active students'
        },
        {
            id: 'scholarships',
            title: 'Scholarships Awarded',
            value: 142,
            change: '+22%',
            changeType: 'positive',
            icon: Award,
            color: 'bg-amber-500',
            lightColor: 'bg-amber-50',
            description: 'This academic year'
        },
        {
            id: 'courses',
            title: 'Active Courses',
            value: 28,
            change: '+3',
            changeType: 'positive',
            icon: BookOpen,
            color: 'bg-lime-600',
            lightColor: 'bg-lime-50',
            description: 'Currently running'
        },
        {
            id: 'approved',
            title: 'Approved Applications',
            value: 721,
            change: '+18%',
            changeType: 'positive',
            icon: UserCheck,
            color: 'bg-green-500',
            lightColor: 'bg-green-50',
            description: 'Success rate: 84%'
        },
        {
            id: 'pending',
            title: 'Pending Reviews',
            value: 89,
            change: '-5%',
            changeType: 'negative',
            icon: Clock,
            color: 'bg-orange-600',
            lightColor: 'bg-orange-50',
            description: 'Awaiting review'
        },
        {
            id: 'completion',
            title: 'Course Completion Rate',
            value: 92,
            change: '+4%',
            changeType: 'positive',
            icon: Target,
            color: 'bg-teal-600',
            lightColor: 'bg-teal-50',
            description: 'Average percentage',
            isPercentage: true
        }
    ];

    const monthlyData = [
        { month: 'Jan', enquiries: 98, applications: 67, enrolled: 45 },
        { month: 'Feb', enquiries: 112, applications: 78, enrolled: 52 },
        { month: 'Mar', enquiries: 125, applications: 89, enrolled: 61 },
        { month: 'Apr', enquiries: 143, applications: 95, enrolled: 68 },
        { month: 'May', enquiries: 156, applications: 108, enrolled: 74 },
        { month: 'Jun', enquiries: 134, applications: 92, enrolled: 67 }
    ];

    // Animate numbers on component mount
    useEffect(() => {
        const animateValue = (start, end, duration, callback) => {
            const range = end - start;
            const increment = range / (duration / 16);
            let current = start;

            const timer = setInterval(() => {
                current += increment;
                if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                    current = end;
                    clearInterval(timer);
                }
                callback(Math.floor(current));
            }, 16);
        };

        statsData.forEach((stat) => {
            animateValue(0, stat.value, 1500, (value) => {
                setAnimatedValues(prev => ({
                    ...prev,
                    [stat.id]: value
                }));
            });
        });
    }, []);

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
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${stat.changeType === 'positive'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                            }`}>
                            {stat.change}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-gray-900">
                            {animatedValue.toLocaleString()}{stat.isPercentage ? '%' : ''}
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
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Statistics</h1>
                    <p className="text-gray-600">Overview of your educational platform metrics</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {statsData.map((stat) => (
                        <StatCard key={stat.id} stat={stat} />
                    ))}
                </div>

                {/* Monthly Trends Chart */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-900">Monthly Trends</h2>
                        <div className="flex space-x-4">
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                                <span className="text-sm text-gray-600">Enquiries</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                                <span className="text-sm text-gray-600">Applications</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-emerald-600 rounded-full mr-2"></div>
                                <span className="text-sm text-gray-600">Enrolled</span>
                            </div>
                        </div>
                    </div>

                    <div className="h-64 flex items-end justify-between space-x-2">
                        {monthlyData.map((data, index) => (
                            <div key={index} className="flex-1 flex flex-col items-center space-y-2">
                                <div className="w-full flex flex-col items-center space-y-1">
                                    <div className="w-full flex justify-center space-x-1">
                                        <div
                                            className="w-4 bg-green-600 rounded-t opacity-80"
                                            style={{ height: `${(data.enquiries / 200) * 100}%` }}
                                        ></div>
                                        <div
                                            className="w-4 bg-orange-500 rounded-t opacity-80"
                                            style={{ height: `${(data.applications / 200) * 100}%` }}
                                        ></div>
                                        <div
                                            className="w-4 bg-emerald-600 rounded-t opacity-80"
                                            style={{ height: `${(data.enrolled / 200) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-600 font-medium">{data.month}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
                        <h3 className="text-lg font-semibold mb-2">Recent Enquiries</h3>
                        <p className="text-green-100 mb-4">24 new enquiries today</p>
                        <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors">
                            View All
                        </button>
                    </div>

                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-6 text-white shadow-lg">
                        <h3 className="text-lg font-semibold mb-2">Pending Applications</h3>
                        <p className="text-orange-100 mb-4">89 applications awaiting review</p>
                        <button className="bg-white text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-orange-50 transition-colors">
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