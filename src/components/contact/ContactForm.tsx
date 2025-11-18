import { useState } from "react";
import { type ChangeEvent, type JSX } from "react";
import { ChevronDown } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactFAQ(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (): void => {
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 shadow-sm max-w-[587px] max-h-[602px]">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Send us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <div className="space-y-3">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-colors text-gray-900 placeholder-gray-400"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Doe"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-colors text-gray-900 placeholder-gray-400"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Subject
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 appearance-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-colors text-gray-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  placeholder="Tell us what you hope to achieve by joining our community..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 resize-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-colors text-gray-900 placeholder-gray-400"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-linear-to-r from-[#1D439E] to-[#D36E93] text-white font-semibold rounded-sm hover:opacity-90 transition-opacity shadow-md"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* FAQ Section - Right Column Grid */}
          <div className="grid grid-rows-[auto_auto] gap-6 content-start max-w-[587px] max-h-[535px]">
            {/* Main FAQ Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm z-10">
              <h2 className="text-3xl font-bold text-[#060429] mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-3 text-[#39374F">
                {/* FAQ Item 1 */}
                <div>
                  <h3 className="text-base font-semibold mb-1">
                    How do I join the community?
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Visit our Join page and fill out the application form. It's
                    free and takes just a few minutes!
                  </p>
                </div>

                {/* FAQ Item 2 */}
                <div>
                  <h3 className="text-base font-semibold mb-1">
                    Are the programs really free?
                  </h3>
                  <p className=" text-sm leading-relaxed">
                    Most of the programs are free. However, some of them are
                    paid but covered by scholarships offered by institutions
                  </p>
                </div>

                {/* FAQ Item 3 */}
                <div>
                  <h3 className="text-base font-semibold mb-1">
                    Can I volunteer as a mentor?
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Go to our registration page and complete the form. It's
                    quick, easy, and totally free!
                  </p>
                </div>

                {/* FAQ Item 4 */}
                <div>
                  <h3 className="text-base font-semibold mb-1">
                    How do I connect with other participants?
                  </h3>
                  <p className="text-sm leading-relaxed">
                    To connect with other participants, head over to our
                    community forum where you can engage in discussions, share
                    experiences, and make new friends. It's a great way to
                    network and collaborate!
                  </p>
                </div>
              </div>
            </div>

            {/* Need Immediate Help Card */}
            <div className="rounded-2xl p-6 shadow-sm max-w-[587px] max-h-[170px] bg-[#BEDBFF]">
              <h3 className="text-2xl font-bold mb-3 text-[#101828]">
                Need Immediate Help?
              </h3>
              <p className="text-sm mb-4 leading-relaxed text-[#364153]">
                For urgent matters, please call us during office hours or send
                an email to our support team.
              </p>
              <p className="text-sm">
                <span className="font-semibold text-[#364153]">
                  Support Email:
                </span>{" "}
                <a
                  href="mailto:support@netempowerment.org"
                  className="text-[#155DFC] hover:underline"
                >
                  support@netempowerment.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
