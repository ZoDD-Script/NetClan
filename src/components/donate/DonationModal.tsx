import { useState } from "react";
import { X, Check, CheckCircle, Mail } from "lucide-react";
import {
  paystackService,
  type PaystackResponse,
} from "@/services/paystack/paystackService";
import CommunityButton from "../buttons/CommunityButton";

/* ------------------ Helpers ------------------ */
const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

interface DonationFormData {
  amount: number;
  customAmount: string;
  donationType: "one-time" | "monthly";
  fullName: string;
  email: string;
  isAnonymous: boolean;
  paymentMethod: "paystack" | "bank-transfer";
}

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  paystackPublicKey: string;
  onSuccess?: (reference: string, amount: number) => void;
}

const DonationModal = ({
  isOpen,
  onClose,
  paystackPublicKey,
  onSuccess,
}: DonationModalProps) => {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");

  const [formData, setFormData] = useState<DonationFormData>({
    amount: 50000,
    customAmount: "",
    donationType: "one-time",
    fullName: "",
    email: "",
    isAnonymous: false,
    paymentMethod: "paystack",
  });

  const presetAmounts = [5000, 10000, 25000, 50000];

  const handleClose = () => {
    setStep(1);
    setFormData({
      amount: 50000,
      customAmount: "",
      donationType: "one-time",
      fullName: "",
      email: "",
      isAnonymous: false,
      paymentMethod: "paystack",
    });
    setIsProcessing(false);
    setEmailError("");
    onClose();
  };

  const handleAmountSelect = (amount: number) => {
    setFormData({ ...formData, amount, customAmount: "" });
  };

  const handleCustomAmountChange = (value: string) => {
    const numValue = parseInt(value.replace(/,/g, "")) || 0;
    setFormData({ ...formData, customAmount: value, amount: numValue });
  };

  const handleProceed = () => {
    if (!isValidEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!formData.isAnonymous && !formData.fullName) {
      setNameError("Please enter your name.");
      return;
    }

    setEmailError("");
    setNameError("");
    setStep(2);
  };

  const handlePaystackPayment = async () => {
    setIsProcessing(true);

    try {
      await paystackService.initializePayment({
        publicKey: paystackPublicKey,
        email: formData.email,
        amount: formData.amount,
        metadata: {
          custom_fields: [
            {
              display_name: "Donor",
              variable_name: "donor",
              value: formData.isAnonymous ? "Anonymous" : formData.fullName,
            },
            {
              display_name: "Donation Type",
              variable_name: "donation_type",
              value: formData.donationType,
            },
          ],
        },
        onSuccess: (response: PaystackResponse) => {
          setStep(3);
          setIsProcessing(false);
          onSuccess?.(response.reference, formData.amount);
        },
        onClose: () => {
          setIsProcessing(false);
        },
      });
    } catch {
      setIsProcessing(false);
      alert("Failed to initialize payment. Please try again.");
    }
  };

  const handleDonateNow = () => {
    if (formData.paymentMethod === "paystack") {
      handlePaystackPayment();
    } else {
      setStep(3);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-[818px] w-full max-h-[90vh] overflow-y-auto">
        {/* Step 1 */}
        {step === 1 && (
          <div className="p-6 sm:p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="font-grotesk text-2xl sm:text-3xl font-semibold mb-2">
                  Support the Future of Networking
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Your contribution helps us train, mentor, and empower the next
                  generation of network engineers across Africa.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700 shrink-0 ml-4"
              >
                <X size={24} />
              </button>
            </div>

            {/* Amount Selection */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
              {presetAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountSelect(amount)}
                  className={`p-4 border rounded-xl text-left flex items-center gap-3 transition-all ${
                    formData.amount === amount && !formData.customAmount
                      ? "border-[#6750A4] bg-[#6750A4]/10"
                      : "border-[#E6DADA] hover:border-gray-300"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      formData.amount === amount && !formData.customAmount
                        ? "border-[#6750A4]"
                        : "border-[#49454F]"
                    }`}
                  >
                    {formData.amount === amount && !formData.customAmount && (
                      <div className="w-3 h-3 rounded-full bg-[#6750A4]" />
                    )}
                  </div>
                  <span className="text-base sm:text-lg text-gray-700">
                    ₦{amount.toLocaleString()}
                  </span>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-6">
              <label className="font-grotesk block text-lg font-small mb-2">
                Custom amount
              </label>
              <input
                type="text"
                placeholder="Enter amount in Naira"
                value={formData.customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                className="w-full h-10 p-3 border border-gray-200 rounded-lg bg-[#F0EFEF] focus:outline-none focus:ring-2 focus:ring-[#6750A4]"
              />
            </div>

            {/* Donation Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">
                Donation type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {["one-time", "monthly"].map((type) => (
                  <button
                    key={type}
                    onClick={() =>
                      setFormData({
                        ...formData,
                        donationType: type as "one-time" | "monthly",
                      })
                    }
                    className={`p-4 border rounded-xl text-left flex items-center gap-3 transition-all ${
                      formData.donationType === type
                        ? "border-[#6750A4] bg-[#6750A4]/10"
                        : "border-[#E6DADA] hover:border-gray-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        formData.donationType === type
                          ? "border-[#6750A4]"
                          : "border-gray-300"
                      }`}
                    >
                      {formData.donationType === type && (
                        <div className="w-3 h-3 rounded-full bg-[#6750A4]" />
                      )}
                    </div>
                    <span className="text-gray-700">
                      {type === "one-time"
                        ? "One-time donation"
                        : "Monthly support"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Donor Info */}
            <h3 className="font-grotesk text-lg font-semibold mb-4">
              Donor information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={formData.fullName}
                  disabled={formData.isAnonymous}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full h-10 p-3 border border-gray-200 rounded-lg bg-[#F0EFEF] focus:outline-none focus:ring-2 focus:ring-[#6750A4] disabled:opacity-60"
                />
                {nameError && (
                  <p className="text-xs text-red-500 mt-1">{nameError}</p>
                )}
              </div>

              {/* Email with validation */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setEmailError("");
                    }}
                    className="w-full h-10 p-3 pr-10 border border-gray-200 rounded-lg bg-[#F0EFEF] focus:outline-none focus:ring-2 focus:ring-[#6750A4]"
                  />
                  {isValidEmail(formData.email) && (
                    <CheckCircle
                      size={18}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600"
                    />
                  )}
                </div>
                {emailError && (
                  <p className="text-xs text-red-500 mt-1">{emailError}</p>
                )}
              </div>
            </div>

            {/* Anonymous */}
            <div className="flex items-center gap-3 mb-8">
              <input
                type="checkbox"
                id="anonymous"
                checked={formData.isAnonymous}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    isAnonymous: e.target.checked,
                    fullName: e.target.checked ? "" : formData.fullName,
                  })
                }
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-[#6750A4]"
              />
              <label
                htmlFor="anonymous"
                className="text-sm font-medium text-gray-700"
              >
                Donate anonymously
              </label>
            </div>

            <CommunityButton onClick={handleProceed} text="w-full text-[#ffff]">
              Proceed
            </CommunityButton>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="p-6 sm:p-8">
            <div className="flex justify-between items-start mb-6">
              <h2 className="font-grotesk text-2xl sm:text-3xl font-semibold">
                Support the Future of Networking
              </h2>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700 shrink-0"
              >
                <X size={24} />
              </button>
            </div>

            <h3 className="font-grotesk text-2xl font-semibold mb-2">
              Make donation payment
            </h3>
            <p className="text-gray-600 mb-6">
              Please select how you would like to donate.
            </p>

            <div className="space-y-4 mb-8">
              {["paystack", "bank-transfer"].map((method) => (
                <button
                  key={method}
                  disabled
                  onClick={() =>
                    setFormData({
                      ...formData,
                      paymentMethod: method as "paystack" | "bank-transfer",
                    })
                  }
                  className={`w-full p-4 border rounded-xl text-left flex items-center gap-3 transition-all ${
                    formData.paymentMethod === method
                      ? "border-[#6750A4] bg-[#6750A4]/10"
                      : "border-[#E6DADA] hover:border-gray-300"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      formData.paymentMethod === method
                        ? "border-[#6750A4]"
                        : "border-gray-300"
                    }`}
                  >
                    {formData.paymentMethod === method && (
                      <div className="w-3 h-3 rounded-full bg-[#6750A4]" />
                    )}
                  </div>
                  <span className="text-gray-700">
                    {method === "paystack" ? "Paystack" : "Bank transfer"}
                  </span>
                </button>
              ))}
            </div>

            <div className="sm:flex block items-center justify-center gap-6 mb-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-600" />
                <span>Secure payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#009951]" />
                <span>You'll receive a confirmation email</span>
              </div>
            </div>

            <button
              onClick={handleDonateNow}
              disabled
              className="w-full py-4 bg-linear-to-r from-[#1D439E] to-[#D36E93] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? "Processing..." : "Donate now"}
            </button>
          </div>
        )}

        {/* STEP 3 — Bank Transfer Details */}
        {step === 3 && (
          <div className="p-6 sm:p-8">
            <div className="flex justify-between items-start mb-6">
              <h2 className="font-grotesk text-2xl sm:text-3xl font-semibold">
                Bank Transfer
              </h2>
              <button onClick={handleClose}>
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Bank Name:</strong> Example Bank
              </p>
              <p>
                <strong>Account Name:</strong> Network Support Foundation
              </p>
              <p>
                <strong>Account Number:</strong> 1234567890
              </p>
              <p>
                <strong>Amount:</strong> ₦{formData.amount.toLocaleString()}
              </p>
            </div>

            <div className="mt-8">
              <CommunityButton
                onClick={() => setStep(4)}
                text="w-full text-white"
              >
                I have completed the transfer
              </CommunityButton>
            </div>
          </div>
        )}

        {/* STEP 4 — Success (original UI untouched) */}
        {step === 4 && (
          <div className="p-8 sm:p-12 text-center">
            <div className="flex justify-end mb-8">
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mb-8 flex justify-center">
              <div className="w-[104px] h-[104px] rounded-full border-2 border-[#E6DADA] bg-[#F9F9F9] flex items-center justify-center">
                <Check size={48} className="text-[#009951]" />
              </div>
            </div>

            <h2 className="font-grotesk text-2xl sm:text-3xl font-semibold mb-10">
              Thank you for supporting our mission
            </h2>
            <p className="text-gray-600 mb-10">
              Your contribution is making real impact.
            </p>

            <CommunityButton
              onClick={handleClose}
              text="w-full py-4 text-white font-semibold"
            >
              Close
            </CommunityButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationModal;
