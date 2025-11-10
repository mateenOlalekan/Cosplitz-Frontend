// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Public pages (lazy-loaded)
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Onboarding = lazy(() => import("./pages/Onboarding"));
const Identify = lazy(() => import("./pages/Identification"));
const Forget = lazy(() => import("./pages/ForgetPassword"));
const VerifyEmail = lazy(() => import("./pages/VerifyEmail"));
const ConfirmPassword = lazy(() => import("./pages/ConfirmPassword"));
const PasswordResetSuccess = lazy(() => import("./pages/PasswordResetSuccess"));
const OnboardingSteps = lazy(() => import("./pages/OnboardingSteps"));

// Dashboard layout and pages (lazy-loaded)
const DashboardLayout = lazy(() => import("./components/Layout/DashboardLayout"));
const Overview = lazy(() => import("./pages/Dashboard/DashHome"));
const Analytics = lazy(() => import("./pages/Dashboard/Analytics"));
const Settings = lazy(() => import("./pages/Dashboard/Settings"));
const Payment = lazy(() => import("./pages/Dashboard/Payment"));
const CreateSplitzPage = lazy(() => import("./pages/Dashboard/CreateSplitz"));
const Notification = lazy(() => import("./pages/Dashboard/Notification"));
const Wallet = lazy(() => import("./pages/Dashboard/Wallet"));

import "./App.css";

export default function App() {
  return (
    <Suspense fallback={<div className="loading-screen">Loading...</div>}>
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
          <Route path="create-split" element={<CreateSplitzPage />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="payment" element={<Payment />} />
          <Route path="notification" element={<Notification />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
