import { useState } from "react";
import { ChevronLeft, CheckCircle } from "lucide-react";
import {  UtensilsCrossed,  Users,  DollarSign,  Zap,  Clock,  TrendingUp,  BookOpen,  Globe,  Briefcase,  MapPin,  Lock,  Eye,  Check,  Plane,  Wrench,  Lightbulb,  FileInput,  Package,  Headphones,  Hotel,  Truck,} from "lucide-react";

const steps = [
  {
    title: "What are you most interested in splitting?",
    description:
      "Select all the categories that apply to help us find you relevant splits nearby.",
    type: "multiple",
    options: [
      { id: "groceries", label: "Groceries", icon: UtensilsCrossed },
      { id: "rosca", label: "ROSCA (a.k.a. Esusu)", icon: Briefcase },
      { id: "car", label: "Car/Transport", icon: Truck },
      { id: "accommodation", label: "Accommodation", icon: Hotel },
      { id: "study", label: "Study Materials", icon: BookOpen },
      { id: "bills", label: "Utility Bills", icon: FileInput },
      { id: "bulk", label: "Bulk Purchase", icon: Package },
      { id: "subscriptions", label: "Subscriptions", icon: Headphones },
    ],
    input: "Other Interests",
    placeholder: "e.g. Pet supplies, Gym memberships, Tickets",
  },
  {
    title: "What is your current situation?",
    description:
      "This helps us match you with the most relevant hyperlocal opportunities.",
    type: "single",
    options: [
      { id: "student", label: "Student", icon: BookOpen },
      { id: "immigrant", label: "New Immigrant", icon: Globe },
      { id: "traveler", label: "Traveler/Nomad", icon: Plane },
      { id: "professional", label: "Working Professional", icon: Briefcase },
      { id: "micro", label: "Micro Businesses", icon: Lightbulb },
      { id: "handymen", label: "Handymen", icon: Wrench },
      { id: "events", label: "Event Planners", icon: Zap },
      { id: "religious", label: "Religious Groups", icon: Users },
    ],
    input: "Other (if none apply):",
    placeholder: "e.g. Retiree, Parent, Freelancer",
  },
  {
    title: "What is most important to you when splitting costs?",
    description: "Choose your top 2 priorities.",
    type: "multiple-limited",
    limit: 2,
    options: [
      { id: "saving", label: "Saving Money", icon: DollarSign },
      { id: "convenience", label: "Convenience", icon: Clock },
      { id: "trust", label: "Trust / Reliability", icon: CheckCircle },
      { id: "location", label: "Nearby Location", icon: MapPin },
      { id: "flexibility", label: "Flexibility", icon: Zap },
      { id: "security", label: "Security / Protection", icon: Lock },
      { id: "transparency", label: "Transparency", icon: Eye },
      { id: "selection", label: "Flexible Selection", icon: Check },
    ],
    input: "Other (if none apply):",
    placeholder: "e.g. Effortless onboarding, Fairness, Speed",
  },
  {
    title: "What is your top goal for using Co-splitz?",
    description:
      "We’ll customize your dashboard based on this primary motivation.",
    type: "single",
    options: [
      { id: "save", label: "Save Money", icon: DollarSign },
      { id: "meet", label: "Meet People", icon: Users },
      { id: "simplify", label: "Simplify Payments", icon: TrendingUp },
      { id: "share", label: "Share Resources", icon: Zap },
      { id: "crowdfunding", label: "Crowdfunding", icon: Lightbulb },
      { id: "time", label: "Time Saving", icon: Clock },
      { id: "accuracy", label: "Financial Accuracy", icon: TrendingUp },
    ],
    input: "Other (if none apply):",
    placeholder: "e.g. Fairness, Speed, Collaboration",
  },
];

const IconComponent = ({ IconType }) => (
  <IconType className="w-8 h-8 text-green-600" />
);

export default function CoSplitzOnboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState(
    steps.map(() => ({ selected: [], other: "" }))
  );

  const step = steps[currentStep];
  const { selected, other } = selections[currentStep];

  const toggleSelection = (id) => {
    const newSelections = [...selections];
    let stepSelections = [...selected];

    if (step.type === "single") {
      stepSelections = [id];
    } else if (step.type === "multiple-limited" && step.limit) {
      const idx = stepSelections.indexOf(id);
      if (idx > -1) stepSelections.splice(idx, 1);
      else if (stepSelections.length < step.limit) stepSelections.push(id);
    } else {
      const idx = stepSelections.indexOf(id);
      if (idx > -1) stepSelections.splice(idx, 1);
      else stepSelections.push(id);
    }

    newSelections[currentStep] = { ...newSelections[currentStep], selected: stepSelections };
    setSelections(newSelections);
  };

  const handleOtherChange = (e) => {
    const newSelections = [...selections];
    newSelections[currentStep].other = e.target.value;
    setSelections(newSelections);
  };

  const isStepComplete = () => {
    if (step.type === "single") return selected.length === 1;
    if (step.type === "multiple-limited") return selected.length === step.limit;
    return selected.length > 0 || other.trim() !== "";
  };

  const handleContinue = () => {
    if (isStepComplete() && currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="h-screen flex flex-col bg-white text-gray-900">
      {/* Scrollable content container */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4">
        <div className="max-w-2xl mx-auto flex flex-col h-full">
          {/* === Header === */}
          <div className="mb-3">
            {currentStep > 0 && (
              <button
                onClick={handleBack}
                className="text-green-600 font-medium mb-3 flex items-center hover:text-green-700 transition"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Back
              </button>
            )}

            <p className="text-green-600 font-medium text-sm mb-2">
              Step {currentStep + 1} of {steps.length}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* === Step Content === */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold mb-2">{step.title}</h1>
              <p className="text-gray-500 text-sm sm:text-base mb-3">
                {step.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-4">
                {step.options.map((option) => {
                  const isSelected = selected.includes(option.id);
                  return (
                    <button
                      key={option.id}
                      onClick={() => toggleSelection(option.id)}
                      className={`p-3 sm:p-4 rounded-lg border-2 flex flex-col items-center justify-center transition-all duration-200 ${
                        isSelected
                          ? "border-green-600 bg-green-50"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <IconComponent IconType={option.icon} />
                      <span
                        className={`mt-1 text-xs sm:text-sm font-medium ${
                          isSelected ? "text-green-600" : "text-gray-700"
                        }`}
                      >
                        {option.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Other input */}
              <div className="flex flex-col mb-1">
                <label className="text-sm text-gray-700 mb-1">{step.input}</label>
                <input
                  type="text"
                  value={other}
                  onChange={handleOtherChange}
                  placeholder={step.placeholder}
                  className="w-full text-sm sm:text-base indent-2 py-2 rounded-lg border-2 outline-none border-green-500"
                />
              </div>
            </div>
          </div>

          {/* === Continue Button === */}
          <div className="sticky bottom-0 mt-auto bg-white pt-1">
            <button
              onClick={handleContinue}
              disabled={!isStepComplete()}
              className={`w-full py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 ${
                isStepComplete()
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {currentStep === steps.length - 1
                ? "Complete Setup"
                : `Continue${
                    selected.length > 0 ? ` (${selected.length})` : ""
                  }`}
            </button>

            {currentStep === steps.length - 1 && isStepComplete() && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                <p className="text-green-700 font-medium text-sm sm:text-base">
                  🎉 All steps completed successfully!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
