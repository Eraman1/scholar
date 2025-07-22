import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export const Partner = () => {
    const partners = [
        { name: "Amma", logo: "/img/partners/AmmaLogo.jpg" },
        { name: "Goutam Foundation", logo: "/img/partners/goutamfoundationlogo.jpg" },
        { name: "Hirease", logo: "/img/partners/hireaselogo.jpg" },
        { name: "kidzcloud", logo: "/img/partners/kidzcloud.png" },
        { name: "Skill Root", logo: "/img/partners/skillrootlogopng.png" },
        { name: "VRSDC", logo: "/img/partners/VRSDCLOGO.png" },
        { name: "We4Task", logo: "/img/partners/we4tasklogo.png" },
    ]

    return (
        <section id="partners" className="py-20 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#3B3B3B] mb-2">Our Partners</h2>
                    <div class="w-32 h-1 bg-lime-500 mx-auto rounded-full"></div>
                    <p className="text-xl text-[#3B3B3B] max-w-3xl mx-auto mt-4">
                        We proudly collaborate with industry leaders to create meaningful opportunities for learners across India.
                    </p>
                </div>

                <Swiper
                    slidesPerView={2}
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                    }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                    modules={[Autoplay]}
                >
                    {partners.map((partner, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-lg shadow-sm my-3 mx-2 hover:shadow-md p-4 flex flex-col items-center transition">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-16 object-contain transition-all duration-300"
                                />
                                <p className="text-sm text-[#3B3B3B] text-center mt-2">{partner.name}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
