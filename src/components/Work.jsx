import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hand from "../assets/hands.svg";
import Arrow from "../assets/arrowdown.svg";
import Work1 from "../assets/work1.svg";
import Work2 from "../assets/work2.svg";
import Work3 from "../assets/work3.svg";

export default function Work() {
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
      id="works"
      className="relative w-full bg-[#F7F5F9] py-12 md:py-20 px-3 sm:px-6 lg:px-10 font-['Raleway'] overflow-hidden"
    >
      {/* Header */}
      <div
        className="text-center mb-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          How It Works
        </h2>
        <div className="w-16 h-1 bg-[#1F8225] mx-auto rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-14">
        {/* ===== Left Illustration ===== */}
        <div
          className="w-full md:w-1/2 flex justify-center"
          data-aos="fade-right"
        >
          <img
            src={Hand}
            alt="Helping Hand"
            className="w-[75%] sm:w-[65%] md:w-[80%] max-w-sm h-auto object-contain drop-shadow-md"
            draggable="false"
          />
        </div>

        {/* ===== Steps Section ===== */}
        <div
          className="w-full md:w-1/2 flex flex-col gap-8"
          data-aos="fade-left"
        >
          {/* Step 1 */}
          <div className="flex items-start gap-5">
            <div className="flex flex-col items-center text-center">
              <p className="text-base font-semibold text-gray-700">1</p>
              <img src={Arrow} alt="Arrow Down" className="h-16 md:h-20" />
            </div>
            <div className="flex flex-col bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <img src={Work1} alt="Create a Splitz" className="w-8 h-8" />
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  Create a Splitz
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Start a shared payment as an organizer or join one to split
                costs easily.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-5">
            <div className="flex flex-col items-center text-center">
              <p className="text-base font-semibold text-gray-700">2</p>
              <img src={Arrow} alt="Arrow Down" className="h-16 md:h-20" />
            </div>
            <div className="flex flex-col bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <img src={Work2} alt="Invite & Connect" className="w-8 h-8" />
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  Invite & Connect
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Invite friends or connect with others looking to share the same
                expense.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-5">
            <div className="flex flex-col items-center text-center">
              <p className="text-base font-semibold text-gray-700">3</p>
            </div>
            <div className="flex flex-col bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <img src={Work3} alt="Pay & Track Together" className="w-8 h-8" />
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  Pay & Track Together
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                CoSplitz handles the money safely until everyone’s in — no
                awkward chasing for payments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
