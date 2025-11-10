import { useState, useEffect } from "react";
import {  Eye,  EyeOff,  Mail,  AlertCircle,  ChevronLeft} from "lucide-react"; // ✅ Added missing ChevronLeft import
import loginlogo from "../assets/login.jpg";
import logo from "../assets/logo.svg";
import { FcGoogle } from "react-icons/fc";
import { PiAppleLogoBold } from "react-icons/pi";
import Checknow from "../assets/Check.svg";
import { Link } from "react-router-dom";


// ✅ Timer countdown component for OTP
function TimerDisplay() {
  const [timeLeft, setTimeLeft] = useState(120); // 2 mins

  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <p className="text-gray-600 text-sm mt-3">
      Resend available in{" "}
      <span className="text-green-600 font-semibold">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </span>
    </p>
  );
}

// ✅ Email OTP Modal (Fixed & Responsive)
function EmailOTPModal({ onVerify, onClose, error, setError }) {
  const [otp, setOtp] = useState("");
  const [isExpired, setIsExpired] = useState(false);
  const correctOTP = "123456";

  useEffect(() => {
    const timer = setTimeout(() => setIsExpired(true), 5 * 60 * 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 6);
    setOtp(value);
    setError("");
  };

  const handleVerify = () => {
    if (otp.length !== 6) {
      setError("Please enter a 6-digit code");
      return;
    }

    if (isExpired) {
      setError("OTP has expired. Please request a new one.");
      return;
    }

    if (otp === correctOTP) {
      onVerify();
      setError("");
    } else {
      setError("Invalid OTP. Please try again.");
      setOtp("");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/50 p-3 sm:p-4">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-3 flex items-center justify-center">
          <img
            src={logo}
            alt="Cosplitz Logo"
            className="w-28 sm:w-40 h-auto object-contain"
          />
        </div>

        {/* Title */}
        <div className="flex justify-center items-center w-full">
          <div className="px-4 w-full">
            <div className="bg-green-600 text-white py-2 sm:py-3 px-4 sm:px-6 text-center text-lg sm:text-xl font-bold w-full rounded-xl">
              Email OTP Verification
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <p className="text-gray-700 text-sm sm:text-base">
            Hello, <br /> Your One-time Password for email verification is:
          </p>

          {/* OTP Input */}
          <input
            type="text"
            value={otp}
            onChange={handleOtpChange}
            maxLength={6}
            className="mt-3 w-full text-center text-xl tracking-widest bg-gray-100 font-bold border-2 border-green-600 rounded-lg px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter 6-digit code"
            disabled={isExpired}
          />

          <div className="p-3 sm:p-4 rounded-lg">
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Use this code to confirm your email — valid for 5 minutes.
              <br />
              If you didn’t register with{" "}
              <span className="text-green-600 font-semibold">COSPLITZ</span>,
              ignore this message.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div
              className={`p-3 sm:p-4 rounded-lg flex items-center gap-2 sm:gap-3 ${
                error.includes("sent")
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-sm sm:text-base font-medium">{error}</p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-gray-700 font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleVerify}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium"
            >
              Verify
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-600">
          <p className="text-xs sm:text-sm">© 2025 Cosplitz. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

// ✅ Main Login Component (All Steps)
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    nationality: "",
    password: "",
    agreeToTerms: false,
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [emailOtp, setEmailOtp] = useState("");
  const [error, setError] = useState("");

  const steps = [
    { id: 1, label: "Account" },
    { id: 2, label: "Verify Email" },
    { id: 3, label: "Success" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password
    ) {
      setError("Please fill out all fields.");
      return;
    }
    if (!formData.agreeToTerms) {
      setError("Please agree to the terms and conditions.");
      return;
    }
    setError("");
    setShowOtpModal(true);
  };

  const handleEmailOtpSubmit = (e) => {
    e.preventDefault();
    if (emailOtp === "123456") {
      setCurrentStep(3);
      setError("");
    } else {
      setError("Incorrect email verification code.");
    }
  };

  const handleEmailOTPVerify = () => {
    setShowOtpModal(false);
    setCurrentStep(2);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 overflow-hidden">
      {/* === LEFT SIDE === */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#F8EACD] flex-col justify-center items-center rounded-xl p-6">
        <div className="max-w-md w-full flex flex-col items-center text-center space-y-4">
          <img
            src={loginlogo}
            alt="Illustration"
            className="w-full h-auto object-contain rounded-lg"
          />
          <div className="w-full bg-gradient-to-br from-[#FAF3E8] to-[#F8EACD] rounded-2xl flex flex-col justify-center items-center text-center p-4 shadow-sm">
            <h1 className="text-2xl font-semibold text-[#2D0D23] mb-2">
              Share Expenses & Resources in Real Time
            </h1>
            <p className="text-sm text-[#4B4B4B] leading-relaxed">
              Connect with students, travelers, and locals to manage costs and
              resources, anonymously and securely.
            </p>
          </div>
        </div>
      </div>

      {/* === RIGHT SIDE === */}
      <div className="flex flex-1 flex-col items-center justify-start bg-white p-4 sm:p-6 overflow-y-auto">
        {/* Logo */}
        <div className="flex justify-start items-start w-full mb-4 pl-3 sm:pl-8">
          <img src={logo} alt="Logo" className="w-28 sm:w-32" />
        </div>

        {/* === MAIN FORM === */}
        <div className="w-full max-w-2xl flex flex-col justify-center rounded-xl shadow-md border border-gray-100 p-3 sm:p-6 bg-white">
          {/* Step Indicator */}
          <div className="w-full flex justify-center items-center py-6">
            <div className="flex items-center justify-center gap-2 max-w-2xl w-full px-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      currentStep >= step.id
                        ? "bg-green-600 scale-110 shadow-md"
                        : "bg-gray-300"
                    }`}
                  ></div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 sm:w-24 border-t-2 mx-2 ${
                        currentStep > step.id
                          ? "border-green-600"
                          : "border-gray-300"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* === STEP CONTENT === */}
          <div className="w-full max-w-2xl p-4 sm:p-6 bg-white">
            {/* === STEP 1 === */}
            {currentStep === 1 && (
              <>
                <h1 className="text-2xl sm:text-3xl text-center font-bold text-gray-900 mb-2">
                  Create Your Account
                </h1>
                <p className="text-gray-500 mb-4 text-center text-sm sm:text-base">
                  Let's get started with real-time cost sharing.
                </p>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm text-center">{error}</p>
                  </div>
                )}

                {/* Social Buttons */}
                <div className="grid grid-cols-1 gap-2 mb-4">
                  <button className="w-full flex items-center justify-center gap-3 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    <FcGoogle size={20} />
                    <span className="text-gray-700 text-sm font-medium">
                      Sign Up with Google
                    </span>
                  </button>
                  <button className="w-full flex items-center justify-center gap-3 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    <PiAppleLogoBold size={20} />
                    <span className="text-gray-700 text-sm font-medium">
                      Sign Up with Apple
                    </span>
                  </button>
                </div>

                {/* Divider */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-3 bg-white text-gray-500">Or</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  {["firstName", "lastName", "email", "nationality"].map(
                    (field) => (
                      <div key={field}>
                        <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                          {field.replace(/([A-Z])/g, " $1").trim()}{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type={field === "email" ? "email" : "text"}
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          placeholder={`Enter your ${field}`}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                          required
                        />
                      </div>
                    )
                  )}

                  {/* Password */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password<span className="text-red-500">*</span>
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create your password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>

                  {/* Terms */}
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      required
                    />
                    <label className="text-sm text-gray-600">
                      I agree to all{" "}
                      <a href="#" className="text-green-600 hover:underline">
                        Terms
                      </a>
                      ,{" "}
                      <a href="#" className="text-green-600 hover:underline">
                        Privacy
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-green-600 hover:underline">
                        Fees
                      </a>
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
                  >
                    Create Account
                  </button>

                  {/* Footer */}
                  <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-green-600 hover:underline font-medium">
                      Log In
                    </Link>
                  </p>
                  <p className="text-center text-sm">
                    <a href="#" className="text-green-600 hover:underline">
                      Proceed as Guest
                    </a>
                    <span className="text-gray-400 ml-2">(Limited Features)</span>
                  </p>
                </form>
              </>
            )}

            {/* === STEP 2 === */}
            {currentStep === 2 && (
              <form
                onSubmit={handleEmailOtpSubmit}
                className="flex flex-col items-center gap-4 py-8 relative w-full"
              >
                {/* Back */}
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="absolute left-4 top-4 text-gray-600 hover:text-green-600 transition"
                >
                  <ChevronLeft size={28} />
                </button>

                <h2 className="text-xl font-bold text-gray-800 mt-8">
                  Verify Your Email
                </h2>
                <p className="text-gray-500 text-sm text-center max-w-sm">
                  Enter the code sent to your{" "}
                  <span className="ml-1 text-green-600">email</span>
                </p>

                {/* Mail icon */}
                <div className="flex justify-center items-center">
                  <div className="bg-[#1F82250D] flex justify-center items-center rounded-full w-14 h-14">
                    <Mail className="text-[#1F8225]" />
                  </div>
                </div>

                {/* OTP inputs */}
                <div className="flex justify-center items-center gap-2 mt-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <input
                      key={i}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={emailOtp[i] || ""}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, "");
                        const otpArray = emailOtp.split("");
                        otpArray[i] = value;
                        setEmailOtp(otpArray.join(""));
                        if (value && i < 5) {
                          document.getElementById(`email-otp-${i + 1}`)?.focus();
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Backspace" && !emailOtp[i] && i > 0) {
                          document.getElementById(`email-otp-${i - 1}`)?.focus();
                        }
                      }}
                      id={`email-otp-${i}`}
                      className="w-10 h-10 sm:w-12 sm:h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                    />
                  ))}
                </div>

                {/* Timer */}
                <TimerDisplay />

                {/* Error */}
                {error && (
                  <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
                )}

                <button
                  type="submit"
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium transition"
                >
                  Verify
                </button>
              </form>
            )}

            {/* === STEP 3 === */}
            {currentStep === 3 && (
              <div className="flex flex-col items-center justify-center text-center py-8">
                <img src={Checknow} alt="Success" className="w-24 h-24" />
                <h2 className="text-2xl font-bold text-gray-800 mt-4">
                  Email Verified!
                </h2>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  Your email has been successfully verified. Welcome aboard!
                </p>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition"
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* === OTP MODAL === */}
      {showOtpModal && (
        <EmailOTPModal
          onVerify={handleEmailOTPVerify}
          onClose={() => setShowOtpModal(false)}
          error={error}
          setError={setError}
        />
      )}
    </div>
  );
}
