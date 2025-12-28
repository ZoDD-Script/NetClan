import { useState } from "react";
import { X, Check } from "lucide-react";
import CommunityButton from "../buttons/CommunityButton";
import CommunityButtonFill from "../buttons/CommunityButtonFill";

interface FormData {
  partnerType: string;
  fullName: string;
  organizationName: string;
  email: string;
  phone: string;
  interests: string[];
  otherInterest: string;
}

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
}

const PartnerModal = ({ isOpen, onClose, onSubmit }: PartnerModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    partnerType: "",
    fullName: "",
    organizationName: "",
    email: "",
    phone: "",
    interests: [] as string[],
    otherInterest: "",
  });

  const handleClose = () => {
    setStep(1);
    setFormData({
      partnerType: "",
      fullName: "",
      organizationName: "",
      email: "",
      phone: "",
      interests: [],
      otherInterest: "",
    });
    onClose();
  };

  const handleProceed = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  const handleGoBack = () => {
    setStep(1);
  };

  const handleSubmit = () => {
    setStep(3);
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const handlePartnerTypeChange = (type: string) => {
    setFormData({ ...formData, partnerType: type });
  };

  const handleInterestToggle = (interest: string) => {
    const newInterests = formData.interests.includes(interest)
      ? formData.interests.filter((i) => i !== interest)
      : [...formData.interests, interest];
    setFormData({ ...formData, interests: newInterests });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="bg-white rounded-2xl max-w-[818px] w-full max-h-[90vh] sm:max-h-[698px] overflow-y-auto">
        {/* Step 1: Contact Information */}
        {step === 1 && (
          <div className="p-4 sm:p-6 md:p-8">
            <div className="flex justify-between items-start mb-4 sm:mb-6">
              <div className="pr-4">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-3">
                  Become a partner
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Partner with NetClan to expand access to network engineering
                  education and opportunities across Africa.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700 shrink-0"
              >
                <X size={24} />
              </button>
            </div>

            {/* Partner Type Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <button
                onClick={() => handlePartnerTypeChange("NGO / Non-profit")}
                className={`p-3 sm:p-4 border rounded-xl text-left flex items-center gap-3 transition-all ${
                  formData.partnerType === "NGO / Non-profit"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    formData.partnerType === "NGO / Non-profit"
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  {formData.partnerType === "NGO / Non-profit" && (
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  )}
                </div>
                <span className="text-sm sm:text-base text-gray-700">
                  NGO / Non-profit
                </span>
              </button>

              <button
                onClick={() =>
                  handlePartnerTypeChange("Company / Organization")
                }
                className={`p-3 sm:p-4 border rounded-xl text-left flex items-center gap-3 transition-all ${
                  formData.partnerType === "Company / Organization"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    formData.partnerType === "Company / Organization"
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  {formData.partnerType === "Company / Organization" && (
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  )}
                </div>
                <span className="text-sm sm:text-base text-gray-700">
                  Company / Organization
                </span>
              </button>

              <button
                onClick={() =>
                  handlePartnerTypeChange("Educational Institution")
                }
                className={`p-3 sm:p-4 border rounded-xl text-left flex items-center gap-3 transition-all ${
                  formData.partnerType === "Educational Institution"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    formData.partnerType === "Educational Institution"
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  {formData.partnerType === "Educational Institution" && (
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  )}
                </div>
                <span className="text-sm sm:text-base text-gray-700">
                  Educational Institution
                </span>
              </button>

              <button
                onClick={() =>
                  handlePartnerTypeChange("Individual / Community Lead")
                }
                className={`p-3 sm:p-4 border rounded-xl text-left flex items-center gap-3 transition-all ${
                  formData.partnerType === "Individual / Community Lead"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    formData.partnerType === "Individual / Community Lead"
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  {formData.partnerType === "Individual / Community Lead" && (
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  )}
                </div>
                <span className="text-sm sm:text-base text-gray-700">
                  Individual / Community Lead
                </span>
              </button>
            </div>

            {/* Contact Information */}
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Contact information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full p-2.5 sm:p-3 text-sm sm:text-base border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2">
                  Organization Name{" "}
                  <span className="text-gray-400">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter organization name"
                  value={formData.organizationName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      organizationName: e.target.value,
                    })
                  }
                  className="w-full p-2.5 sm:p-3 text-sm sm:text-base border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-2.5 sm:p-3 text-sm sm:text-base border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2">
                  Phone Number <span className="text-gray-400">(Optional)</span>
                </label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full p-2.5 sm:p-3 text-sm sm:text-base border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <CommunityButton onClick={handleProceed} text="text-white w-full">
              Proceed
            </CommunityButton>
          </div>
        )}

        {/* Step 2: Partnership Interest */}
        {step === 2 && (
          <div className="p-4 sm:p-6 md:p-8">
            <div className="flex justify-between items-start mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl font-semibold">
                Become a partner
              </h2>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700 shrink-0"
              >
                <X size={24} />
              </button>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Partnership Interest
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Please select how you would like to partner with us. You can
              select multiple options.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <button
                onClick={() => handleInterestToggle("Sponsorship")}
                className={`p-3 sm:p-4 border rounded-xl text-left flex items-center gap-3 transition-all ${
                  formData.interests.includes("Sponsorship")
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    formData.interests.includes("Sponsorship")
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  {formData.interests.includes("Sponsorship") && (
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  )}
                </div>
                <span className="text-sm sm:text-base text-gray-700">
                  Sponsorship
                </span>
              </button>

              <button
                onClick={() => handleInterestToggle("Training collaboration")}
                className={`p-3 sm:p-4 border rounded-xl text-left flex items-center gap-3 transition-all ${
                  formData.interests.includes("Training collaboration")
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    formData.interests.includes("Training collaboration")
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  {formData.interests.includes("Training collaboration") && (
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  )}
                </div>
                <span className="text-sm sm:text-base text-gray-700">
                  Training collaboration
                </span>
              </button>

              <button
                onClick={() => handleInterestToggle("Mentorship support")}
                className={`p-3 sm:p-4 border rounded-xl text-left flex items-center gap-3 transition-all ${
                  formData.interests.includes("Mentorship support")
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    formData.interests.includes("Mentorship support")
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  {formData.interests.includes("Mentorship support") && (
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  )}
                </div>
                <span className="text-sm sm:text-base text-gray-700">
                  Mentorship support
                </span>
              </button>

              <button
                onClick={() => handleInterestToggle("Hiring & talent pipeline")}
                className={`p-3 sm:p-4 border rounded-xl text-left flex items-center gap-3 transition-all ${
                  formData.interests.includes("Hiring & talent pipeline")
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    formData.interests.includes("Hiring & talent pipeline")
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  {formData.interests.includes("Hiring & talent pipeline") && (
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  )}
                </div>
                <span className="text-sm sm:text-base text-gray-700">
                  Hiring & talent pipeline
                </span>
              </button>

              <button
                onClick={() => handleInterestToggle("Community events")}
                className={`p-3 sm:p-4 border rounded-xl text-left flex items-center gap-3 transition-all sm:col-span-2 ${
                  formData.interests.includes("Community events")
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    formData.interests.includes("Community events")
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  {formData.interests.includes("Community events") && (
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  )}
                </div>
                <span className="text-sm sm:text-base text-gray-700">
                  Community events
                </span>
              </button>
            </div>

            <div className="mb-6 sm:mb-8">
              <label className="block text-xs sm:text-sm font-medium mb-2">
                Other <span className="text-gray-400">(optional)</span>
              </label>
              <textarea
                placeholder="Tell us briefly how you'd like to partner with us."
                value={formData.otherInterest}
                onChange={(e) =>
                  setFormData({ ...formData, otherInterest: e.target.value })
                }
                rows={4}
                className="w-full p-2.5 sm:p-3 text-sm sm:text-base border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <CommunityButtonFill
                bg="bg-white font-small"
                onClick={handleGoBack}
                className="w-full sm:flex-1"
              >
                Go Back
              </CommunityButtonFill>

              <div className="w-full sm:flex-2">
                <CommunityButton
                  onClick={handleSubmit}
                  text="text-white w-full"
                >
                  Submit Partnership Request
                </CommunityButton>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Success Message */}
        {step === 3 && (
          <div className="p-6 sm:p-8 md:p-12 text-center">
            <div className="flex justify-end mb-6 sm:mb-8">
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mb-6 sm:mb-8 flex justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-green-500 flex items-center justify-center">
                <Check size={40} className="sm:w-12 sm:h-12 text-green-500" />
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">
              Thank you for reaching out
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 px-4">
              Our team will review your request and contact you within 2–3
              working days.
            </p>

            <CommunityButton onClick={handleClose} text="text-white w-full">
              Close
            </CommunityButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerModal;
