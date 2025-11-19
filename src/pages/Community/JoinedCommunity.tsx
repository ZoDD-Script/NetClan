import { CheckCircle2 } from "lucide-react";

export default function WelcomeComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center p-5 pt-25 md:p-25">
      <div className="bg-white rounded-2xl shadow-xl w-full p-5 md:p-12 max-w-[831px]">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-[scale-in_0.5s_ease-out]">
            <CheckCircle2
              className="w-8 h-8 text-green-600 animate-[checkmark_0.6s_ease-out_0.2s_both]"
              strokeWidth={2.5}
            />
          </div>
        </div>

        <style>{`
          @keyframes scale-in {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          
          @keyframes checkmark {
            0% {
              transform: scale(0) rotate(-45deg);
              opacity: 0;
            }
            50% {
              transform: scale(1.2) rotate(0deg);
            }
            100% {
              transform: scale(1) rotate(0deg);
              opacity: 1;
            }
          }
        `}</style>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Welcome to the NetClan
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-600 mb-8">
          Thank you for joining our community. We've sent a confirmation email
          <br />
          with next steps to get started.
        </p>

        {/* What's Next Section */}
        <div className="bg-blue-50 rounded-xl p-8 mb-6 border border-[#5880D11A]">
          <h2 className="text-lg font-semibold text-gray-900 text-center mb-6">
            What's Next?
          </h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span className="text-gray-700">
                Check your email for login credentials
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span className="text-gray-700">
                Complete your profile in the member portal
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span className="text-gray-700">
                Join our community Slack channel
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span className="text-gray-700">
                Attend the new member orientation
              </span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-linear-to-r from-[#1D439E] to-[#D36E93] text-white py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-md">
          Go To Email
        </button>
      </div>
    </div>
  );
}
