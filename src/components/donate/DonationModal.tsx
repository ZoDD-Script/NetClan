import { useState } from "react";
import { X, Check, CheckCircle, Mail } from "lucide-react";
import {
  paystackService,
  type PaystackResponse,
} from "@/services/paystack/paystackService";
import CommunityButton from "../buttons/CommunityButton";

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
  const [formData, setFormData] = useState<DonationFormData>({
    amount: 50000,
    customAmount: "",
    donationType: "one-time",
    fullName: "",
    email: "",
    isAnonymous: false,
    paymentMethod: "paystack",
  });
  const [isProcessing, setIsProcessing] = useState(false);

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
    if (formData.amount > 0 && formData.fullName && formData.email) {
      setStep(2);
    }
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
              display_name: "Full Name",
              variable_name: "full_name",
              value: formData.fullName,
            },
            {
              display_name: "Donation Type",
              variable_name: "donation_type",
              value: formData.donationType,
            },
            {
              display_name: "Anonymous",
              variable_name: "is_anonymous",
              value: formData.isAnonymous ? "Yes" : "No",
            },
          ],
        },
        onSuccess: (response: PaystackResponse) => {
          console.log("Payment successful:", response);
          setStep(3);
          setIsProcessing(false);
          if (onSuccess) {
            onSuccess(response.reference, formData.amount);
          }
        },
        onClose: () => {
          console.log("Payment popup closed");
          setIsProcessing(false);
        },
      });
    } catch (error) {
      console.error("Error processing payment:", error);
      setIsProcessing(false);
      alert("Failed to initialize payment. Please try again.");
    }
  };

  const handleDonateNow = () => {
    if (formData.paymentMethod === "paystack") {
      handlePaystackPayment();
    } else {
      // Handle bank transfer - show instructions
      setStep(3);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60  flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-[818px] w-full max-h-[90vh] overflow-y-auto">
        {/* Step 1: Donation Details */}
        {step === 1 && (
          <div className="p-6 sm:p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl sm:text-2xl font-semibold mb-2">
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
                      <div className="w-3 h-3 rounded-full bg-[#6750A4]"></div>
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
              <label className="block text-lg font-small mb-2">
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
                <button
                  onClick={() =>
                    setFormData({ ...formData, donationType: "one-time" })
                  }
                  className={`p-4 border rounded-xl text-left flex items-center gap-3 transition-all ${
                    formData.donationType === "one-time"
                      ? "border-[#6750A4] bg-[#6750A4]/10"
                      : "border-[#E6DADA] hover:border-gray-300"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      formData.donationType === "one-time"
                        ? "border-[#6750A4]"
                        : "border-gray-300"
                    }`}
                  >
                    {formData.donationType === "one-time" && (
                      <div className="w-3 h-3 rounded-full bg-[#6750A4]"></div>
                    )}
                  </div>
                  <span className="text-gray-700">One-time donation</span>
                </button>

                <button
                  onClick={() =>
                    setFormData({ ...formData, donationType: "monthly" })
                  }
                  className={`p-4 border rounded-xl text-left flex items-center gap-3 transition-all ${
                    formData.donationType === "monthly"
                      ? "border-[#6750A4] bg-[#6750A4]/10"
                      : "border-[#E6DADA] hover:border-gray-300"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      formData.donationType === "monthly"
                        ? "border-[#6750A4]"
                        : "border-gray-300"
                    }`}
                  >
                    {formData.donationType === "monthly" && (
                      <div className="w-3 h-3 rounded-full bg-[#6750A4]"></div>
                    )}
                  </div>
                  <span className="text-gray-700">Monthly support</span>
                </button>
              </div>
            </div>

            {/* Donor Information */}
            <h3 className="text-lg font-semibold mb-4">Donor information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full h-10 p-3 border border-gray-200 rounded-lg bg-[#F0EFEF] focus:outline-none focus:ring-2 focus:ring-[#6750A4]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full h-10 p-3 border border-gray-200 rounded-lg bg-[#F0EFEF] focus:outline-none focus:ring-2 focus:ring-[#6750A4]"
                />
              </div>
            </div>

            {/* Anonymous Checkbox */}
            <div className="flex items-center gap-3 mb-8">
              <input
                type="checkbox"
                id="anonymous"
                checked={formData.isAnonymous}
                onChange={(e) =>
                  setFormData({ ...formData, isAnonymous: e.target.checked })
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

            {/* Proceed Button */}
            <CommunityButton onClick={handleProceed} text="w-full text-[#ffff]">
              Proceed
            </CommunityButton>
            {/* <but00 */}
          </div>
        )}

        {/* Step 2: Payment Method */}
        {step === 2 && (
          <div className="p-6 sm:p-8">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl sm:text-3xl font-semibold">
                Support the Future of Networking
              </h2>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700 shrink-0"
              >
                <X size={24} />
              </button>
            </div>

            <h3 className="text-2xl font-semibold mb-2">
              Make donation payment
            </h3>
            <p className="text-gray-600 mb-6">
              Please select how you would like to donate.
            </p>

            {/* Payment Method Selection */}
            <div className="space-y-4 mb-8">
              <button
                onClick={() =>
                  setFormData({ ...formData, paymentMethod: "paystack" })
                }
                className={`w-full p-4 border rounded-xl text-left flex items-center gap-3 transition-all ${
                  formData.paymentMethod === "paystack"
                    ? "border-[#6750A4] bg-[#6750A4]/10"
                    : "border-[#E6DADA] hover:border-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    formData.paymentMethod === "paystack"
                      ? "border-[#6750A4]"
                      : "border-gray-300"
                  }`}
                >
                  {formData.paymentMethod === "paystack" && (
                    <div className="w-3 h-3 rounded-full bg-[#6750A4]"></div>
                  )}
                </div>
                <span className="text-gray-700">Paystack</span>
              </button>

              <button
                onClick={() =>
                  setFormData({ ...formData, paymentMethod: "bank-transfer" })
                }
                className={`w-full p-4 border rounded-xl text-left flex items-center gap-3 transition-all ${
                  formData.paymentMethod === "bank-transfer"
                    ? "border-[#6750A4] bg-[#6750A4]/10"
                    : "border-#E6DADA hover:border-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    formData.paymentMethod === "bank-transfer"
                      ? "border-[#6750A4]"
                      : "border-gray-300"
                  }`}
                >
                  {formData.paymentMethod === "bank-transfer" && (
                    <div className="w-3 h-3 rounded-full bg-[#6750A4]"></div>
                  )}
                </div>
                <span className="text-gray-700">Bank transfer</span>
              </button>
            </div>

            {/* Payment Info */}
            <div className="flex items-center justify-center gap-6 mb-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-600" />
                <span>Secure payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#009951]" />
                <span>You'll receive a confirmation email</span>
              </div>
            </div>

            {/* Donate Button */}
            <button
              onClick={handleDonateNow}
              disabled={isProcessing}
              className="w-full py-4 bg-linear-to-r from-[#1D439E] to-[#D36E93] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? "Processing..." : "Donate now"}
            </button>
          </div>
        )}

        {/* Step 3: Success Message */}
        {step === 3 && (
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

            <h2 className="text-2xl sm:text-3xl font-semibold mb-10">
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
