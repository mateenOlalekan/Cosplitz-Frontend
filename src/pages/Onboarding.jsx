import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import onboard1 from "../assets/onboard1.png";
import onboard2 from "../assets/onboard2.png";
import onboard3 from "../assets/onboard3.jpg";

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const pages = [
    {
      id: 1,
      image: onboard1,
      title: "Split Bills Easily",
      description:
        "Tired of awkward math at the table? Cosplitz makes it simple to divide expenses with friends, family, or coworkers — no calculators needed.",
    },
    {
      id: 2,
      image: onboard2,
      title: "Fair for Everyone",
      description:
        "Everyone pays their fair share. Whether it’s rent, dinner, or travel costs, Cosplitz keeps things transparent so no one feels left out.",
    },
    {
      id: 3,
      image: onboard3,
      title: "Start Your Journey",
      description:
        "No more chasing people for money. Get reminders, track balances, and settle up with just a tap.",
    },
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else navigate("/register");
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSkip = () => {
    navigate("/register");
  };

  const current = pages.find((p) => p.id === step);

  return (
    <div className="relative flex flex-col lg:flex-row h-screen w-full overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100">

      {/* Header */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 md:py-6 z-20">

        {step > 1 ? (
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-700 hover:text-green-600 bg-white px-3 py-2 rounded-xl shadow-sm transition-all"
          >
            <ArrowLeft size={18} />
          </button>
        ) : (
          <div />
        )}

        {step < 3 ? (
          <button
            onClick={handleSkip}
            className="text-green-700 font-semibold hover:underline transition m-2"
          >
            Skip
          </button>
        ) : (
          <button
            onClick={() => navigate("/signup")}
            className="text-green-700 font-semibold hover:underline transition m-2"
          >
            Sign Up
          </button>
        )}
      </div>

      {/* Image Section */}
      <div className="hidden md:flex w-full lg:w-1/2 h-1/3 md:h-full">
        <img
          src={current.image}
          alt={current.title}
          className="w-full h-full object-cover rounded-none lg:rounded-xl transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-center items-center 
      text-center bg-white/80 backdrop-blur-sm
      p-6 sm:p-10 md:p-14 lg:p-20
      rounded-t-3xl md:rounded-none shadow-inner">

        <div className="max-w-md">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {current.title}
          </h1>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
            {current.description}
          </p>

          <button
            onClick={handleNext}
            className="bg-green-600 text-white w-full text-base sm:text-lg px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-all"
          >
            {step === 3 ? "Sign Up" : "Next"}
          </button>

          {/* Progress Dots */}
          <div className="flex gap-2 mt-6 justify-center">
            {pages.map((p) => (
              <div
                key={p.id}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  step === p.id ? "bg-green-600" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
