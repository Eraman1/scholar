import React from 'react';

const affiliations = [
    {
        name: "DEPARTMENT FOR CHEMICAL & PETROCHEMICAL",
        image: "/img/certificates/DEPARTMENT_FOR_CHEMICAL&PETROCHEMICAL.jpg",
    },
    {
        name: "DEPARTMENT OF AGRICULTURE CORPORATION & FARMAR WELFARE",
        image: "/img/certificates/DEPARTMENT_OF_AGRICULTURE_CORPORATION&FARMAR_WELFARE.jpg",
    },
    {
        name: "MINISTRY OF SKILL DEVELPMENT AND ENTERPRENURSHIP",
        image: "/img/certificates/MINISTRY_OF_SKILL_DEVELPMENT_AND_ENTERPRENURSHIP.jpg",
    },
    {
        name: "NATIONAL COMMISSION FOR WOMEN INDIA",
        image: "/img/certificates/NATIONAL_COMMISSION_FOR_WOMEN_INDIA.jpg",
    },
    {
        name: "NATIONAL HUMAN RIGHTS COMMISSION INDIA",
        image: "/img/certificates/NATIONAL_HUMAN_RIGHTS_COMMISSION_INDIA.jpg",
    },
    {
        name: "PCAR",
        image: "/img/certificates/PCAR.jpg",
    },
    // Add more as needed
];

const AffiliationsAndCertificates = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#3B3B3B] mb-6">
                    Affiliations & Certifications
                </h2>
                <div className="w-24 h-1 bg-amber-500 mx-auto mb-10 rounded-full"></div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
                    {affiliations.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 group"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-auto sm:h-auto object-contain mx-auto transform group-hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </div>
                            <p className="text-sm text-gray-700 mt-3 font-medium">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AffiliationsAndCertificates;
