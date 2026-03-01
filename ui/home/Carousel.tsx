"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function Carousel() {
  const slides = [
    {
      id: 1,
      title: "Tuhin Al Mamun | CEO & Founder",
      image: "/assets/mentors/Tuhin.png",
    },
    {
      id: 2,
      title: "Abu Ubayda Pial | Web Designer",
      image: "/assets/mentors/Pial.png",
    },
    {
      id: 3,
      title: "Hasnat Hannan Tamim | Web Developer",
      image: "/assets/mentors/Tamim.png",
    },
    {
      id: 4,
      title: "Abdur rabbi | Digital Marketer",
      image: "/assets/mentors/Rabbi.png",
    },
  ];

  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="rounded-xl overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <section className="text-center py-4 bg-secondary text-white">
              <p className="md:text-lg font-semibold">{slide.title}</p>
            </section>
            <div className="relative">
              <Image
                src={slide.image}
                alt={slide.title}
                width={500}
                height={100}
                className="h-auto w-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
