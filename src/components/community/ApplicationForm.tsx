import React, { useState } from "react";
import thumbs from "../../assets/images/thumbs1.png";
import plant from "../../assets/images/plant.png";
import group from "../../assets/images/Group.png";
import { useNavigate } from "react-router-dom";
import { submitForm } from "../../utils/submitForm";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experienceLevel: string;
  learningGoals: string;
  areaOfInterest: string;
  interestedInMentorship: boolean;
  volunteerAsMentor: boolean;
  subscribeNewsletter: boolean;
  agreeToTerms: boolean;
}

const ApplicationForm = () => {
  const navigate = useNavigate();

  const benefitCards = [
    {
      icon: thumbs,
      title: "Free Training",
      description: "Access to all training programs and learning resources",
      bgColor: "bg-[#E588A4]",
      borderColor: "border-[#DFBBFF]",
    },
    {
      icon: plant,
      title: "Mentorship",
      description: "Connect with experienced professionals in the field",
      bgColor: "bg-[#2A2376]",
      borderColor: "border-[#E588A4]",
    },
    {
      icon: group,
      title: "Career Support",
      description: "Job placement assistance and career guidance",
      bgColor: "bg-[#E588A5]",
      borderColor: "border-[#5880D1]",
    },
  ];

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experienceLevel: "",
    learningGoals: "",
    areaOfInterest: "",
    interestedInMentorship: false,
    volunteerAsMentor: false,
    subscribeNewsletter: true,
    agreeToTerms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ------------------------------
  // SUBMIT FORM TO WEB3FORMS
  // ------------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = formData.email || "";

    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    const payload = {
      ...formData,
      formName: "Join Community Form", // label in your email
    };

    const result = await submitForm(payload);

    if (result.success) {
      navigate(`/joined?email=${encodeURIComponent(email)}`);
    } else {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen p-6 md:p-10">
      <div className="max-w-[990px] mx-auto">
        {/* Header Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {benefitCards.map((card, index) => (
            <div
              key={index}
              className={`
                bg-white 
                rounded-[20px]
                border 
                ${card.borderColor}
                shadow-[0_2px_6px_rgba(0,0,0,0.06)]
                px-5 py-6 
                w-full
              `}
            >
              <div
                className={`
                  w-14 h-14 
                  ${card.bgColor}
                  rounded-full 
                  flex items-center justify-center 
                  mx-auto 
                  mb-4
                `}
              >
                <img src={card.icon} loading="lazy" className="w-7 h-7" />
              </div>

              <h3 className="font-semibold text-gray-900 text-center text-base mb-2">
                {card.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow p-6 md:p-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Application Form
          </h2>
          <p className="text-sm text-gray-600 mb-8">
            Fill out the form below to join our community.
          </p>

          {/* PERSONAL INFO */}
          <div className="mb-10">
            <h3 className="font-semibold text-gray-900 text-sm mb-4">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-900 mb-1 block font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-100 rounded-md text-sm focus:ring-2 focus:ring-indigo-400 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-900 mb-1 block font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-100 rounded-md text-sm focus:ring-2 focus:ring-indigo-400 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-900 mb-1 block font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-100 rounded-md text-sm focus:ring-2 focus:ring-indigo-400 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-900 mb-1 block font-medium">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+234 810 000 0000"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-100 rounded-md text-sm focus:ring-2 focus:ring-indigo-400 outline-none"
                />
              </div>
            </div>
          </div>

          {/* BACKGROUND */}
          <div className="mb-10">
            <h3 className="font-semibold text-gray-900 text-sm mb-4">
              Background
            </h3>

            <div className="mb-4">
              <label className="text-sm text-gray-900 mb-1 block font-medium">
                Experience Level
              </label>
              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-100 rounded-md text-sm focus:ring-2 focus:ring-indigo-400 outline-none"
              >
                <option value="Complete Beginner">Complete Beginner</option>
                <option value="Some Networking Knowledge">
                  Some Networking Knowledge
                </option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="text-sm text-gray-900 mb-1 block font-medium">
                What are your learning goals?
              </label>
              <textarea
                name="learningGoals"
                rows={3}
                placeholder="Tell us what you hope to achieve..."
                value={formData.learningGoals}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-100 rounded-md text-sm focus:ring-2 focus:ring-indigo-400 outline-none resize-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-900 mb-1 block font-medium">
                Areas of Interest
              </label>
              <select
                name="areaOfInterest"
                value={formData.areaOfInterest}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-100 rounded-md text-sm focus:ring-2 focus:ring-indigo-400 outline-none"
              >
                <option value="Routing & Switching">Routing & Switching</option>
                <option value="Network Security">Network Security</option>
                <option value="Cloud Network">Cloud Network</option>
                <option value=">Network Automation">Network Automation</option>
                <option value="Wireless Networking">Wireless Networking</option>
              </select>
            </div>
          </div>

          {/* PREFERENCES */}
          <div className="mb-10">
            <h3 className="font-semibold text-gray-900 text-sm mb-4">
              Preferences
            </h3>

            <div className="space-y-3">
              {[
                {
                  name: "interestedInMentorship" as const,
                  label: "I'm interested in mentorship",
                },
                {
                  name: "volunteerAsMentor" as const,
                  label: "I'd like to volunteer as a mentor",
                },
                {
                  name: "subscribeNewsletter" as const,
                  label: "Subscribe to our newsletter",
                },
                {
                  name: "agreeToTerms" as const,
                  label:
                    "I agree to the terms and conditions and privacy policy",
                },
              ].map((item) => (
                <label key={item.name} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={formData[item.name]}
                    onChange={handleInputChange}
                    className="w-4 h-4 accent-indigo-600"
                  />
                  <span className="text-sm text-gray-900">{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full py-3.5 bg-linear-to-r from-[#1D439E] to-[#D36E93] text-white text-sm font-medium rounded-lg shadow hover:opacity-90 transition"
          >
            Submit Application
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Have questions?{" "}
            <a href="#" className="text-indigo-600 underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
