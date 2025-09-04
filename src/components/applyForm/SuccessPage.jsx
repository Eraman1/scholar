// SuccessPage.js
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SuccessPage = ({ onNewApplication, }) => {
  const { t } = useTranslation();

   const applicationId = location.state?.applicationId || "N/A";

  return (
    <div className="mt-10 min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {t("successPage.title")}
        </h2>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          {t("successPage.message")}
        </p>

        

        {/* Button */}
        <button
          onClick={onNewApplication}
          className="w-full bg-[#FF6B00] text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition"
        >
          {t("successPage.button")}
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
