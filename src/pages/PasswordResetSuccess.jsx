import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import loginlogo from "../assets/loginmain.jpg";
import logo from "../assets/newlogo.svg";
import { useNavigate } from "react-router-dom";

export default function PasswordResetSuccess() {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white/40 overflow-hidden">
      {/* === LEFT PANEL === */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden lg:flex lg:w-1/2 relative items-center justify-center bg-gray-50"
      >
        <img
          src={loginlogo}
          alt="Illustration"
          className="w-full h-full object-cover rounded-2xl"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-10 mx-6 bg-white/40 backdrop-blur-xl rounded-2xl p-6 max-w-lg shadow-lg text-center"
        >
          <h1 className="text-4xl font-semibold text-[#2D0D23] mb-2">
            Share Expenses & Resources in Real Time
          </h1>
          <p className="text-lg text-[#4B4B4B] leading-relaxed">
            Connect with students, travelers, and locals to effortlessly manage
            costs and resources — anonymously and securely.
          </p>
        </motion.div>
      </motion.div>

      {/* === RIGHT PANEL === */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex w-full lg:w-1/2 flex-col bg-white overflow-hidden"
      >
        {/* === LOGO (TOP LEFT) === */}
        <div className="absolute top-6 left-6 sm:left-10">
          <motion.img
            src={logo}
            alt="Logo"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-28 sm:w-32"
          />
        </div>

        {/* === SUCCESS CONTENT (PERFECTLY CENTERED) === */}
        <div className="flex flex-1 items-center justify-center px-6 sm:px-6 md:px-8 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center justify-center space-y-6 max-w-xl w-full"
          >

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Congratulations!
            </h1>

            <p className="text-[#67707E] text-base sm:text-lg leading-relaxed">
              Your password has been successfully updated. Please log in again
              using your latest password.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGoToLogin}
              className="w-full max-w-xs text-lg bg-green-600 text-white rounded-2xl py-3 font-medium transition duration-300 "
            >
              Login
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
