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
        className="flex w-full lg:w-1/2 flex-col justify-between items-center bg-white overflow-y-auto px-4 sm:px-8 md:px-16 lg:px-20 py-8"
      >
        {/* === LOGO === */}
        <div className="w-full flex justify-start mb-6">
          <motion.img
            src={logo}
            alt="Logo"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-32 sm:w-28"
          />
        </div>

        {/* === SUCCESS CONTENT === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col justify-center items-center text-center space-y-8 w-full max-w-lg"
        >
          <CheckCircle className="text-green-600 w-20 h-20 sm:w-24 sm:h-24" />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Congratulations
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md">
            Your password has been successfully updated. Please log in again
            using your latest credentials.
          </p>

          {/* === BUTTON === */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGoToLogin}
            className="mt-4 w-full border-2 border-green-500 bg-green-600 text-white rounded-2xl py-3 font-medium hover:bg-green-700 transition duration-300"
          >
            Login
          </motion.button>
        </motion.div>

        <p>feffefe</p>
      </motion.div>
    </div>
  );
}
