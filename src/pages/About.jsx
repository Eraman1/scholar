import React from 'react'
import AffiliationsAndCertificates from '../components/AffiliationsAndCertificates'

export const About = () => {
    return (
        <>
            <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f9f9f9]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#3B3B3B] mb-4 text-center">
                        Who We Are
                    </h2>
                    <div className="w-32 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>

                    <p className="text-lg text-[#3B3B3B] leading-relaxed text-justify">
                        <strong className="text-[#FF6B00]">Vedubuild Trust</strong> was established in the year 2016 and is registered under the
                        Indian Trust Act 1882 at NCT New Delhi, India. As an independent nonprofit service organization, Vedubuild is focused on
                        identifying, developing, and motivating young individuals to prepare them for a better future through socio-environmental
                        awareness and international standards of adaptability.
                    </p>

                    <p className="text-lg text-[#3B3B3B] mt-6 leading-relaxed text-justify">
                        Our diverse programs span <strong>Education, Sports, Science, Culture, Environment,</strong> and <strong>Personality Development</strong>, and are delivered through both
                        Government and Non-Government initiatives. Backed by a team with over 8 years of experience in multiple industries,
                        <strong> Vedubuild</strong> is also supported by its own group of companies to operate across different sectors and domains.
                    </p>

                    <p className="text-lg text-[#3B3B3B] mt-6 leading-relaxed text-justify">
                        We are actively organizing <strong className="text-[#51A545]">Skill Development Trainings</strong> funded by Government and CSR schemes such as
                        <strong> PMKVY, DDU-GKY, CMKKY, DISHA, NAPS</strong> and <strong>VRSDM #CSR programs</strong>. These trainings are strategically designed to align
                        with the employability needs of youth across India.
                    </p>

                    <p className="text-lg text-[#3B3B3B] mt-6 leading-relaxed text-justify">
                        In addition, Vedubuild works closely with grassroots institutions, providing <strong>certified computer training and vocational
                            education</strong> under <strong>SSC</strong> and <strong>UGC-approved courses</strong>. Our primary focus is on empowering <span className="text-[#51A545] font-semibold">unemployed youth</span> and building
                        career pathways based on regional skill demands.
                    </p>

                    <p className="text-lg text-[#3B3B3B] mt-6 leading-relaxed text-justify">
                        We also nurture <strong>innovation, startups, and entrepreneurship</strong> by offering guidance, incubation, and mentoring to aspiring changemakers.
                        Special focus is given to forming and supporting <span className="text-[#51A545] font-semibold">Women Self Help Groups (SHGs)</span>, turning them into
                        successful micro and small entrepreneurs under the <strong>Make in India</strong> initiative.
                    </p>

                    {/* New Section: About VRSDC */}
                    <h3 className="text-2xl font-semibold text-[#3B3B3B] mt-12 mb-4">About VRSDC</h3>
                    <p className="text-lg text-[#3B3B3B] leading-relaxed text-justify">
                        VRSDC is a Sec. 8 company registered Under MCA working in the field of vocational / job skill training related to computer software & hardware,
                        graphic designing, web designing, web development, computer applications, finance & accounting, office automation, multimedia and animation,
                        computer teacher’s training, employability, soft skills, business & management, and entrepreneurship development.
                    </p>

                    <p className="text-lg text-[#3B3B3B] mt-6 leading-relaxed text-justify">
                        VRSDC is providing skill development training in over <strong>200+ programs</strong> in <strong>32 sectors</strong> under NSDC (National Skill Development Corporation).
                        VRSDC has taken the initiative to promote local entrepreneurs to set up institutes for providing vocational training to students for their skill development.
                        It operates on a <strong>franchise model</strong>, which has proven successful over time. VRSDC currently has a strong network across Karnataka and aims to expand pan India.
                    </p>

                    <p className="text-lg text-[#3B3B3B] mt-6 leading-relaxed text-justify">
                        <strong>Vedubuild Rural Skill Development Mission (VRSDM)</strong> is the flagship scheme of Vedubuild. The main objective of this skill certification scheme
                        is to enable a large number of Indian youth to take up industry-relevant skill training that helps them secure better livelihoods.
                    </p>

                    <p className="text-lg text-[#3B3B3B] mt-6 leading-relaxed text-justify">
                        V-RSDM is uniquely designed for youth between the ages of <strong>15 and 35</strong> years from underprivileged backgrounds in rural and urban areas. As a part
                        of the <strong>Skill India</strong> campaign, it plays an instrumental role in supporting government missions like <strong>Make In India, Digital India, Smart Cities,</strong> and
                        <strong> Start-Up India, Stand-Up India</strong>. Notably, <strong>over 69% of India’s youth</strong> population aged between 18 and 34 years reside in rural areas,
                        making this initiative crucial for inclusive national development.
                    </p>
                </div>

            </section>
            <AffiliationsAndCertificates />
        </>
    )
}
