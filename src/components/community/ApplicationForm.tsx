import React, { useState } from "react";
import thumbs from "../../assets/images/thumbs1.png";
import plant from "../../assets/images/plant.png";
import group from "../../assets/images/Group.png";
import { Link as RouterLink } from "react-router-dom";

const ApplicationForm = () => {
  const benefitCards = [
    {
      icon: thumbs,
      title: "Free Training",
      description: "Access to all training programs and learning resources",
      bgColor: "bg-[#E588A4]",
      iconColor: "text-pink-500",
      borderColor: "border-[#DFBBFF]",
    },
    {
      icon: plant,
      title: "Mentorship",
      description: "Connect with experienced professionals in the field",
      bgColor: "bg-[#2A2376]",
      iconColor: "text-[#2A2376]",
      borderColor: "border-[#E588A4]",
    },
    {
      icon: group,
      title: "Career Support",
      description: "Job placement assistance and career guidance",
      bgColor: "bg-[#E588A5]",
      iconColor: "text-pink-500",
      borderColor: "border-[#5880D1]",
    },
  ];

  const [formData, setFormData] = useState({
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
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-[990px] mx-auto">
        {/* Header Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {benefitCards.map((card, index) => {
            return (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-sm p-6 text-center max-w-[312px] max-h-[200px] my-10 border ${card.borderColor}`}
              >
                <div
                  className={`w-12 h-12 ${card.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}
                >
                  <img
                    src={card.icon}
                    className={`w-6 h-6 ${card.iconColor}`}
                  />
                </div>
                <h3 className="font-extralight text-gray-900 text-sm mb-2">
                  {card.title}
                </h3>
                <p className="text-md text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-xl shadow-sm p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Application form
          </h2>
          <p className="text-sm text-gray-600 mb-8">
            Fill out the form below to join our community. All fields are
            required unless marked optional
          </p>

          <div>
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-4 text-md">
                Personal Information
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-900 mb-2 font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-md text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-900 mb-2 font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-md text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-900 mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-md text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-900 mb-2 font-medium">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-md text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              </div>
            </div>

            {/* Background */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">
                Background
              </h3>

              <div className="mb-4">
                <label className="block text-sm text-gray-900 mb-2 font-medium">
                  Experience Level
                </label>
                <select
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-md text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="expert">Expert</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-900 mb-2 font-medium">
                  What are your learning goals?
                </label>
                <textarea
                  name="learningGoals"
                  placeholder="Tell us what you hope to achieve by joining our community..."
                  value={formData.learningGoals}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-md text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-900 mb-2 font-medium">
                  Areas of Interest
                </label>
                <select
                  name="areaOfInterest"
                  value={formData.areaOfInterest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-md text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="">Select your primary interest</option>
                  <option value="technology">Technology</option>
                  <option value="business">Business</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Preferences */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">
                Preferences
              </h3>

              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="interestedInMentorship"
                    checked={formData.interestedInMentorship}
                    onChange={handleInputChange}
                    className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-indigo-600"
                  />
                  <span className="text-sm text-gray-900">
                    I'm interested in mentorship
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="volunteerAsMentor"
                    checked={formData.volunteerAsMentor}
                    onChange={handleInputChange}
                    className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-indigo-600"
                  />
                  <span className="text-sm text-gray-900">
                    I'd like to volunteer as a mentor (for experienced members)
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onChange={handleInputChange}
                    className="mt-0.5 w-4 h-4 rounded border-gray-300 bg-gray-900 accent-gray-900 checked:bg-gray-900"
                  />
                  <span className="text-sm text-gray-900">
                    Subscribe to our newsletter
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-indigo-600"
                  />
                  <span className="text-sm text-gray-900">
                    I agree to the terms and conditions and privacy policy
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <RouterLink to="/joined">
              <button
                onClick={handleSubmit}
                className="w-full py-3.5 bg-linear-to-r from-[#1D439E] cursor-pointer to-[#D36E93] hover:opacity-90 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-pink-500 transition-all duration-200 shadow-sm text-sm"
              >
                Submit Application
              </button>
            </RouterLink>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Have questions?{" "}
            <a
              href="#"
              className="text-indigo-600 underline hover:text-indigo-700"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
