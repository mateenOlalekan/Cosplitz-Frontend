import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";

import NavbarLogo from "../src/assets/logo.svg";
// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Onboarding = lazy(() => import("./pages/Onboarding"));
const Identify = lazy(() => import("./pages/Identification"));
const Forget = lazy(() => import("./pages/ForgetPassword"));
const VerifyEmail = lazy(() => import("./pages/VerifyEmail"));
const ConfirmPassword = lazy(() => import("./pages/ConfirmPassword"));
const PasswordResetSuccess = lazy(() => import("./pages/PasswordResetSuccess"));
const OnboardingSteps = lazy(() => import("./pages/OnBoardingSteps"));

// Dashboard
const DashboardLayout = lazy(() => import("./components/Layout/DashboardLayout"));
const Overview = lazy(() => import("./pages/Dashboard/DashHome"));
const Analytics = lazy(() => import("./pages/Dashboard/Analytics"));
const SettingsLayout = lazy(() => import("./pages/Dashboard/Settings/SettingsLayout"));
const MyProfile = lazy(() => import("./pages/Dashboard/Settings/MyProfile"));
const Notifications = lazy(() => import("./pages/Dashboard/Settings/Notifications"));
const Verification = lazy(() => import("./pages/Dashboard/Settings/Verification"));
const Support = lazy(() => import("./pages/Dashboard/Settings/Support"));
const Payment = lazy(() => import("./pages/Dashboard/Payment"));
const Wallet = lazy(() => import("./pages/Dashboard/Wallet"));
const CreateSplitzPage = lazy(() => import("./pages/Dashboard/CreateSplitz"));
const Notification = lazy(() => import("./pages/Dashboard/Notification"));

// Loading screen




function Loading({ show }) {
  return (
    <div
      className={`fixed inset-0 bg-green-600 flex flex-col items-center justify-center z-[99999]
        transition-opacity duration-[3s]
        ${show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      {/* Logo with bounce animation */}
      <div className="flex justify-center items-center animate-bounce">
        <img
          src={NavbarLogo}
          className="w-20 h-20 md:w-40 md:h-40 drop-shadow-xl"
          alt="Logo"
        />
      </div>


    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<Loading show={true} />}>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Onboarding */}
        <Route path="/onboard" element={<Onboarding />} />
        <Route path="/identify" element={<Identify />} />
        <Route path="/onboarding-steps" element={<OnboardingSteps />} />

        {/* Password management */}
        <Route path="/forgot-password" element={<Forget />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/confirm-password" element={<ConfirmPassword />} />
        <Route path="/password-reset-success" element={<PasswordResetSuccess />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="create-split" element={<CreateSplitzPage />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="payment" element={<Payment />} />
          <Route path="notification" element={<Notification />} />

          {/* Nested settings */}
          <Route path="settings" element={<SettingsLayout />}>
            <Route index element={<MyProfile />} />
            <Route path="profile" element={<MyProfile />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="verification" element={<Verification />} />
            <Route path="support" element={<Support />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
