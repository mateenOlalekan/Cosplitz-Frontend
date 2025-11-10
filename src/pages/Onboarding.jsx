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
    if (step < 3) setStep((prev) => prev + 1);
    else navigate("/onboarding-main");
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleSkip = () => {
    navigate("/onboarding-main");
  };

  const current = pages.find((p) => p.id === step);

  return (
    <div className="relative flex flex-col lg:flex-row h-screen w-full p-3 roud overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* ===== Header (Navigation) ===== */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 sm:px-10 md:px-16 py-6 z-20">
        {step > 1 ? (
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-700 hover:text-green-600 bg-white px-4 py-2 rounded-xl shadow-sm transition-all"
          >
            <ArrowLeft size={18} /> 
          </button>
        ) : (
          <div />
        )}

        {step < 3 ? (
          <button
            onClick={handleSkip}
            className="text-green-700 font-semibold hover:underline transition"
          >
            Skip
          </button>
        ) : (
          <button
            onClick={() => navigate("/signup")}
            className="text-green-700 font-semibold hover:underline transition"
          >
            Sign Up
          </button>
        )}
      </div>

      {/* ===== Left Section (Image) ===== */}
          <img
            src={current.image}
            alt={current.title}
            className="hidden md:block md:w-1/2 h-full object-cover hover:scale-105 transition-transform rounded-tl-2xl rounded-bl-2xl duration-700 ease-out"
          />

      {/* ===== Right Section (Content) ===== */}
      <div className="flex-1 flex flex-col justify-center items-center text-center  bg-white/70 backdrop-blur-sm p-8 sm:p-12 md:p-16 rounded-t-3xl md:rounded-none shadow-inner">
      <div class="flex justify-center items-center flex-col max-w-md">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
          {current.title}
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-5 leading-relaxed max-w-md">
          {current.description}
        </p>

        {/* Action Button */}
        <button
          onClick={handleNext}
          className="bg-green-600 text-white w-full text-lg px-10 py-3 rounded-lg mb-5 font-semibold shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300"
        >
          {step === 3 ? "Sign Up" : "Next"}
        </button>

        {/* Progress Dots */}
        <div className="flex gap-2 mb-5">
          {pages.map((p) => (
            <div
              key={p.id}
              className={`h-3 rounded-full transition-all duration-300 ${
                step === p.id
                  ? "bg-green-600 w-3"
                  : "bg-gray-300 w-3 rounded-md"
              }`}
            ></div>
          ))}
        </div>

      </div>

      </div>
    </div>
  );
}
