// ProgressBar.js
import React from 'react';
import { User, GraduationCap, Award, CheckCircle } from 'lucide-react';

const ProgressBar = ({ currentStep, steps }) => {
    const iconMap = {
        User: User,
        GraduationCap: GraduationCap,
        Award: Award,
        CheckCircle: CheckCircle
    };

    return (
        <div className="mb-8">
            <div className="flex items-center justify-between mb-4 overflow-x-auto">
                {steps.map((step, index) => {
                    const IconComponent = iconMap[step.icon];
                    return (
                        <div key={step.number} className="flex items-center flex-shrink-0">
                            <div
                                className={`flex items-center justify-center
                    w-8 h-8 sm:w-12 sm:h-12
                    rounded-full border-2 transition-all
                    ${currentStep >= step.number
                                        ? 'bg-[#FF6B00] border-[#FF6B00] text-white'
                                        : 'bg-white border-gray-300 text-gray-400'
                                    }`}
                            >
                                <IconComponent className="h-4 w-4 sm:h-6 sm:w-6" />
                            </div>
                            {index < steps.length - 1 && (
                                <div
                                    className={`h-1 mx-2 transition-all
                        w-10 sm:w-16
                        ${currentStep > step.number
                                            ? 'bg-[#FF6B00]'
                                            : 'bg-gray-300'
                                        }`}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="text-center">
                <span className="text-sm font-medium text-gray-600">
                    Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
                </span>
            </div>
        </div>
    );
};

export default ProgressBar;