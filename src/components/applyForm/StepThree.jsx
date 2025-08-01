// StepThree.js
import React from 'react';
import { Award, AlertCircle } from 'lucide-react';
import { scholarshipOptions, classOptions, combinationOptions } from './constants';

const StepThree = ({ formData, errors, handleInputChange }) => {
    return (
        <div className="space-y-6">
            <div className="text-center mb-6">
                <Award className="h-12 w-12 text-[#FF6B00] mx-auto mb-2" />
                <h2 className="text-2xl font-bold text-gray-800">Program Selection</h2>
                <p className="text-gray-600">Choose your scholarship program and academic details</p>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                        Select Scholarship Program *
                    </label>
                    <div className="grid gap-4">
                        {scholarshipOptions.map((option) => (
                            <div
                                key={option.value}
                                className={`border rounded-lg p-4 cursor-pointer transition-all ${formData.scholarship === option.value
                                    ? 'border-[#FF6B00] bg-orange-50'
                                    : 'border-gray-300 hover:border-gray-400'
                                    }`}
                                onClick={() => handleInputChange('scholarship', option.value)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className={`w-4 h-4 rounded-full border-2 mr-3 ${formData.scholarship === option.value
                                            ? 'border-[#FF6B00] bg-[#FF6B00]'
                                            : 'border-gray-300'
                                            }`}>
                                            {formData.scholarship === option.value && (
                                                <div className="w-full h-full rounded-full bg-white scale-50"></div>
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">{option.label}</h3>
                                            <p className="text-sm text-gray-600">Target: {option.target}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-[#FF6B00]">{option.fee}</p>
                                        <p className="text-xs text-gray-500">Enrollment Fee</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {errors.scholarship && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.scholarship}
                        </p>
                    )}
                </div>

                {formData.scholarship && (
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Class *
                            </label>
                            <select
                                value={formData.class}
                                onChange={(e) => handleInputChange('class', e.target.value)}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent ${errors.class ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            >
                                <option value="">Select Class</option>
                                {classOptions[formData.scholarship]?.map((cls) => (
                                    <option key={cls} value={cls}>{cls}</option>
                                ))}
                            </select>
                            {errors.class && (
                                <p className="mt-1 text-sm text-red-600 flex items-center">
                                    <AlertCircle className="h-4 w-4 mr-1" />
                                    {errors.class}
                                </p>
                            )}
                        </div>

                        {formData.scholarship === 'vstar' && formData.class && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject Combination *
                                </label>
                                <select
                                    value={formData.combination}
                                    onChange={(e) => handleInputChange('combination', e.target.value)}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent ${errors.combination ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                >
                                    <option value="">Select Combination</option>
                                    {Object.entries(combinationOptions).map(([stream, combinations]) => (
                                        <optgroup key={stream} label={stream}>
                                            {combinations.map((combo) => (
                                                <option key={combo} value={combo}>{combo}</option>
                                            ))}
                                        </optgroup>
                                    ))}
                                </select>
                                {errors.combination && (
                                    <p className="mt-1 text-sm text-red-600 flex items-center">
                                        <AlertCircle className="h-4 w-4 mr-1" />
                                        {errors.combination}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default StepThree;