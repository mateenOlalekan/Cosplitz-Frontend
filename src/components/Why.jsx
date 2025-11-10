import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import work1 from "../assets/why01.jpg";
import work2 from "../assets/why02.jpg";
import work3 from "../assets/why03.png";
import work4 from "../assets/why04.png";

const whydata = [
  {
    title: "Community-first",
    desc: "Built around trust and shared goals.",
    img: work1,
  },
  {
    title: "Flexible roles",
    desc: "Be a seller, buyer, or someone who simply wants to split costs.",
    img: work2,
  },
  {
    title: "Secure Payment",
    desc: "Your money is held safely until every split is complete.",
    img: work3,
  },
  {
    title: "Smart Management",
    desc: "Easily track and manage your shared expenses effortlessly.",
    img: work4,
  },
];

export default function Why() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <section
      id="features"
      className="relative flex justify-center items-center w-full bg-white py-12 md:py-16 px-4 sm:px-8 lg:px-12 font-['Raleway'] overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
        {/* ===== Section Header ===== */}
        <div
          className="text-center mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Why Choose CoSplitz
          </h1>
          <div className="w-16 h-1 bg-[#1F8225] mx-auto rounded-full"></div>
        </div>

        {/* ===== Cards Grid ===== */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {whydata.map((data, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#E8F7E3] rounded-2xl p-2 sm:p-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="w-full h-full rounded-xl overflow-hidden mb-4">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-full h-full object-cover"
                  draggable="false"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 text-center">
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  {data.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {data.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
