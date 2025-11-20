import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import loginlogo from "../assets/loginmain.jpg";
import logo from "../assets/newlogo.svg";

// === ZOD VALIDATION SCHEMA ===
const schema = z.object({
  code: z
    .string()
    .min(6, "Code must be 6 digits")
    .max(6, "Code must be 6 digits")
    .regex(/^[0-9]+$/, "Only numbers are allowed"),
});

export default function VerifyEmail() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  // === REACT-HOOK-FORM SETUP ===
  const {
    handleSubmit,
    formState: { isSubmitting },
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { code: "" },
  });

  // === HANDLERS ===
  const handleChange = (e, index) => {
    const value = e.target.value.slice(-1);
    if (!/^[0-9]?$/.test(value)) return;

    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);

    // Auto focus next
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }

    setValue("code", updatedCode.join(""));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const onSubmit = (data) => {
    console.log("✅ Verification Code Submitted:", data.code);
    alert("Verification Successful!");
  };

  const handleResend = () => {
    console.log("🔁 Resend Code Clicked");
    alert("Verification code resent to your email!");
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white overflow-hidden">
      {/* === LEFT SIDE === */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center bg-gray-50">
        <img
          src={loginlogo}
          alt="Illustration"
          className="w-full h-full object-cover rounded-r-3xl"
        />
        <div className="absolute bottom-10 mx-6 bg-white/60 backdrop-blur-md rounded-2xl p-8 max-w-md text-center shadow-lg">
          <h1 className="text-3xl font-bold text-[#1A051D] mb-2">
            Share Expenses & Resources in Real Time
          </h1>
          <p className="text-base text-[#1A051D] font-light leading-relaxed">
            Connect with students, travelers, and locals to manage costs and
            resources — easily, transparently, and securely.
          </p>
        </div>
      </div>

      {/* === RIGHT SIDE === */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center items-center bg-white overflow-y-auto px-5 sm:px-10 md:px-16 lg:px-20 py-8 relative">
        {/* Logo */}
        <div className="absolute top-6 left-6 sm:left-10">
          <img src={logo} alt="Logo" className="w-24 sm:w-28" />
        </div>

        {/* Header */}
        <div className="w-full max-w-md text-center mt-20 mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Verify your email
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Please enter the 6-digit verification code sent to your email.  
            <span className="block font-semibold text-gray-700 mt-1">
              (ayomideakorede0@gmail.com)
            </span>
          </p>
        </div>

        {/* === FORM === */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md space-y-8"
          noValidate
        >
          {/* 6-DIGIT INPUT BOXES */}
          <div className="flex justify-between gap-2 sm:gap-4">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                maxLength="1"
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-center border border-gray-300 rounded-lg text-lg sm:text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            ))}
          </div>

          {/* TIMER + RESEND SECTION */}
          <div className="text-center space-y-2">
            <p className="text-gray-600 text-sm sm:text-base">
              Resend available in <span className="text-green-600 font-medium">60s</span>
            </p>
            <button
              type="button"
              onClick={handleResend}
              className="text-green-600 font-semibold hover:underline text-sm sm:text-base"
            >
              Didn’t receive code? Resend
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || code.join("").length < 6}
            className="w-full rounded-xl bg-green-500 text-white py-3 font-medium hover:bg-green-600 transition duration-300 disabled:opacity-70"
          >
            {isSubmitting ? "Verifying..." : "Verify"}
          </button>
          <div className="flex justify-center items-center">
 <div className="text center">Note that this code is valid for <span className="text-[#E60000]">5 minutes</span></div>
          </div>
         
        </form>

        {/* Footer (Optional) */}
        <div className="text-center text-xs text-gray-400 mt-10">
          © {new Date().getFullYear()} CoSplitz. All rights reserved.
        </div>
      </div>
    </div>
  );
}
