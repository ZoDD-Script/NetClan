import { useState } from "react";
import { type ChangeEvent, type JSX } from "react";
import { ChevronDown } from "lucide-react";
import toast from "react-hot-toast";
import { submitForm } from "@/utils/submitForm";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
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

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Update field values and clear error while typing
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validate fields
  const validate = (): boolean => {
    const newErrors: FormErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.subject.trim())
      newErrors.subject = "Please select a subject.";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);

    return Object.values(newErrors).every((err) => !err);
  };

  // Submit form
  const handleSubmit = async (): Promise<void> => {
    if (loading) return;

    if (!validate()) {
      toast.error("Please correct the errors before submitting.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        ...formData,
        formName: "Contact Form", // label in your email
      };

      const result = await submitForm(payload);

      if (result.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(result.message || "Something went wrong.");
      }
    } catch (err) {
      console.log("error", err);
      toast.error("Submission failed. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center p-4 md:mb-20 mb-60 z-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 shadow-sm max-w-[587px]">
            <h2 className="font-grotesk text-4xl font-normal text-gray-900 mb-2">
              Send us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <div className="space-y-3">
              {/* Name */}
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
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-purple-500 focus:bg-white text-gray-900 placeholder-gray-400"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
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
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-purple-500 focus:bg-white text-gray-900 placeholder-gray-400"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Subject */}
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
                    className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 appearance-none focus:ring-2 focus:ring-purple-500 focus:bg-white text-gray-500"
                  >
                    <option value="General_Inquiry">General Inquiry</option>
                    <option value="Programs_Information">
                      Programs Information
                    </option>
                    <option value="Mentorship">Mentorship</option>
                    <option value="Partnership_Opportunities">
                      Partnership Opportunities
                    </option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
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
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 resize-none focus:ring-2 focus:ring-purple-500 focus:bg-white text-gray-900 placeholder-gray-400"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-4 bg-linear-to-r from-[#1D439E] to-[#D36E93] text-white font-semibold rounded-sm hover:opacity-90 transition-opacity shadow-md disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>

          {/* FAQ and Help Section */}
          <div className="grid grid-rows-[auto_auto] gap-6 content-start max-w-[587px] max-h-[535px]">
            {/* Main FAQ Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm z-10">
              <h2 className="font-grotesk text-4xl font-normal text-[#060429] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3 text-[#39374F]">
                <div>
                  <h3 className="font-grotesk text-lg font-semibold mb-1">
                    How do I join the community?
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Visit our Join page and fill out the application form. It's
                    free and takes just a few minutes!
                  </p>
                </div>
                <div>
                  <h3 className="font-grotesk text-lg font-semibold mb-1">
                    Are the programs really free?
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Most of the programs are free. However, some of them are
                    paid but covered by scholarships offered by institutions.
                  </p>
                </div>
                <div>
                  <h3 className="font-grotesk text-lg font-semibold mb-1">
                    Can I volunteer as a mentor?
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Go to our registration page and complete the form. It's
                    quick, easy, and totally free!
                  </p>
                </div>
                <div>
                  <h3 className="font-grotesk text-lg font-semibold mb-1">
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

            {/* Immediate Help Card */}
            <div className="rounded-2xl p-6 shadow-sm max-w-[587px] bg-[#EFF6FF] border border-[#BEDBFF] text-start">
              <h3 className="font-grotesk text-2xl font-bold mb-3 text-[#101828]">
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
                  href="mailto:info@thenetclan.org"
                  className="text-[#155DFC] hover:underline"
                >
                  info@thenetclan.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
