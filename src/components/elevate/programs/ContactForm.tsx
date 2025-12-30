import React, { useState } from "react";
// import { CheckCircle, X } from "lucide-react";
import toast from "react-hot-toast";
import { submitForm } from "@/utils/submitForm";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    message: "",
  });

  // const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Update field values
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error while typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validate form fields
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.interest.trim())
      newErrors.interest = "Please select an interest.";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";

    // Normalize into the full errors shape (empty string = no error)
    setErrors({
      firstName: newErrors.firstName || "",
      lastName: newErrors.lastName || "",
      email: newErrors.email || "",
      interest: newErrors.interest || "",
      message: newErrors.message || "",
    });

    return Object.keys(newErrors).length === 0;
  };

  // Submit form
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (loading) return;

    if (!validate()) {
      toast.error("Please correct the errors before submitting.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        ...formData,
        formName: "NetClan Elevate", // label in your email
      };
      const result = await submitForm(payload);

      if (result && result.success) {
        toast.success("Message sent successfully!");
        // setShowSuccess(true);

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          interest: "",
          message: "",
        });

        setErrors({
          firstName: "",
          lastName: "",
          email: "",
          interest: "",
          message: "",
        });

        // setTimeout(() => {
        //   setShowSuccess(false);
        // }, 5000);
      } else {
        toast.error(result?.message || "Something went wrong.");
      }
    } catch (err) {
      toast.error("Network error. Please try again later.");
      console.error("ContactForm submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  // const closeSuccessMessage = () => {
  //   setShowSuccess(false);
  // };

  return (
    <div className="min-h-screen bg-[#FFFFFFE5] py-16 px-4 relative flex justify-center items-center">
      <div className="max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-grotesk text-5xl font-normal text-gray-900 mb-4">
            Ready to Elevate with NetClan?
          </h1>
          <p className="text-gray-700 text-lg">
            Whether you're looking to empower your team or advance your career,
            NetClan Elevate is here to make it happen. Join the future of
            network engineering today!
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-900 font-medium mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="w-full px-4 py-3 bg-[#F0EFEF] rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-900 font-medium mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full px-4 py-3 bg-[#F0EFEF] rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-900 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john.doe@example.com"
                className="w-full px-4 py-3 bg-[#F0EFEF] rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-gray-900 font-medium mb-2"
              >
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 bg-[#F0EFEF] rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
            </div>
          </div>

          {/* Interest */}
          <div>
            <label
              htmlFor="interest"
              className="block text-gray-900 font-medium mb-2"
            >
              What are you interested in?
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#F0EFEF] rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-600 cursor-pointer"
            >
              <option value="" disabled hidden>
                Select an option
              </option>
              <option value="organizational-training">
                Organizational Training
              </option>
              <option value="individual-bootcamp">Individual Bootcamp</option>
              <option value="ccna-certification">CCNA Certification</option>
              <option value="ccnp-certification">CCNP Certification</option>
              <option value="custom-training">Custom Training Solutions</option>
            </select>

            {errors.interest && (
              <p className="text-red-500 text-sm mt-1">{errors.interest}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-900 font-medium mb-2"
            >
              Write us a message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here"
              rows={3}
              className="w-full px-4 py-3 bg-[#F0EFEF] rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 resize-none"
            ></textarea>

            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-4 bg-linear-to-r from-[#1D439E] to-[#D36E93] text-white font-semibold rounded-lg hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      </div>

      {/* Success Toast Bubble */}
      {/* {showSuccess && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-slide-up">
          <div className="bg-green-50 border-2 border-green-500 rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <span className="text-green-800 font-medium">
              Message sent successfully
            </span>
            <button
              onClick={closeSuccessMessage}
              className="ml-2 text-green-600 hover:text-green-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )} */}

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translate(-50%, 20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
