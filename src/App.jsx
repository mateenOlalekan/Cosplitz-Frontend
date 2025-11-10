// src/App.jsx
import { Routes, Route } from "react-router-dom";

// Public pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Onboarding from "./pages/Onboarding";
import Identify from "./pages/Identification";
import Forget from "./pages/ForgetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import ConfirmPassword from "./pages/ConfirmPassword";
import PasswordResetSuccess from "./pages/PasswordResetSuccess";
import OnboardingSteps from "./pages/OnboardingSteps";
// ✅ Fixed: Corrected case-sensitive file name

// Dashboard layout and pages
import DashboardLayout from "../src/components/Layout/DashboardLayout"; // ✅ Fixed path: should be under /layouts, not /pages/Dashboard
import Overview from "../src/pages/Dashboard/DashHome";
import Analytics from "../src/pages/Dashboard/Analytics";
import Settings from "../src/pages/Dashboard/Settings";
import Payment from "../src/pages/Dashboard/Payment";
import CreateSplitzPage from "../src/pages/Dashboard/CreateSplitz";
import Notification from "../src/pages/Dashboard/Notification";
import Wallect from "../src/pages/Dashboard/Wallet";

import "./App.css";

export default function App() {
  return (
    <Routes>
      {/* 🌍 Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/onboard" element={<Onboarding />} />
      <Route path="/identify" element={<Identify />} />
      <Route path="/forgot-password" element={<Forget />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/confirm-password" element={<ConfirmPassword />} />
      <Route path="/password-reset-success" element={<PasswordResetSuccess />} />
      <Route path="/onboarding-steps" element={<OnboardingSteps />} />

      {/* 🧭 Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="create-split" element={<CreateSplitzPage />} /> {/* ✅ fixed route consistency */}
        <Route path="payment" element={<Wallect />} />
        <Route path="payment" element={<Payment />} />
        <Route path="notification" element={<Notification/>}/>
        <Route path="settings" element={<Settings />} />
      </Route>


    </Routes>
  );
}
