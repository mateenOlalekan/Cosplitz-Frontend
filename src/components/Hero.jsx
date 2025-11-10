import { useEffect, useState } from "react";
import AOS from "aos";
import Hero from "../assets/object.svg";
import line from "../assets/line.svg";
import "aos/dist/aos.css";

export default function WaveBackground() {


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });

    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ====== Sticky Header ====== */}


      {/* ====== Hero Section ====== */}
      <section
        id="hero"
        className="relative w-full min-h-screen pt-24 md:pt-28  bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 h-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 min-h-[calc(100vh-200px)] md:min-h-[calc(100vh-160px)]">

            {/* ====== Left Content ====== */}
            <div
              className="w-full md:w-1/2 space-y-6 md:space-y-8 flex flex-col justify-center"
              data-aos="fade-right"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Split Smarter,
                <br/>
                Spend Together
              </h1>

              <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-600 leading-relaxed tracking-wide max-w-md">
                CoSplitz helps you share expenses, organize group payments, and buy things together — whether you're a seller or just need people to split costs with.
              </p>

              {/* ====== Buttons ====== */}
              <div
                className="hidden md:flex flex-col sm:flex-row gap-4 pt-4 md:pt-6 w-full sm:w-auto"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <button className="px-6 sm:px-8 py-3 md:py-4 bg-[#1F8225] text-white font-semibold rounded-md shadow-md hover:bg-[#17661C] active:scale-95 transition duration-300 w-full sm:w-auto">
                  Get Started
                </button>
                <button className="px-6 sm:px-8 py-3 md:py-4 border-2 border-[#1F8225] text-[#1F8225] font-semibold rounded-md hover:bg-[#f0f9f0] active:scale-95 transition duration-300 w-full sm:w-auto">
                  Learn More
                </button>
              </div>
            </div>

            {/* ====== Right Image ====== */}
            <div
              className="w-full md:w-1/2 flex justify-center md:justify-end"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1F8225]/10 to-transparent rounded-2xl blur-2xl -z-10" />
                <img
                  src={Hero}
                  alt="App illustration"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  draggable="false"
                  loading="lazy"
                />
              </div>
            </div>

              {/* ====== Buttons ====== */}
              <div
                className="hidden max-md:flex  sm:flex-row gap-4 pt-4 md:pt-6 w-full sm:w-auto"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <button className="px-6 sm:px-8 py-3 md:py-4 bg-[#1F8225] text-white font-semibold rounded-md shadow-md hover:bg-[#17661C] active:scale-95 transition duration-300 w-full sm:w-auto">
                  Get Started
                </button>
                <button className="px-6 sm:px-8 py-3 md:py-4 border-2 border-[#1F8225] text-[#1F8225] font-semibold rounded-md hover:bg-[#f0f9f0] active:scale-95 transition duration-300 w-full sm:w-auto">
                  Learn More
                </button>
              </div>
            
          </div>
        </div>
      </section>
    </>
  );
}