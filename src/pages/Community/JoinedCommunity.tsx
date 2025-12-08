import { CheckCircle2 } from "lucide-react";
import { useSearchParams } from "react-router-dom";

export default function WelcomeComponent() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email") || "";

  const goToEmail = () => {
    if (!email) {
      alert("No email found.");
      return;
    }

    const domain = email.split("@")[1]?.toLowerCase();

    const providers: Record<string, string> = {
      "gmail.com": "https://mail.google.com",
      "yahoo.com": "https://mail.yahoo.com",
      "outlook.com": "https://outlook.live.com",
      "hotmail.com": "https://outlook.live.com",
      "live.com": "https://outlook.live.com",
      "icloud.com": "https://www.icloud.com/mail",
    };

    const redirectUrl = providers[domain] || "https://www.google.com";
    window.open(redirectUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5 pt-25 md:p-25">
      <div className="bg-white rounded-2xl shadow-xl w-full p-5 md:p-12 max-w-[831px]">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-[pop-in_0.5s_ease-out] relative">
            <CheckCircle2
              className="w-8 h-8 text-green-600 animate-[tick-draw_0.6s_ease-out_0.3s_both]"
              strokeWidth={2.5}
            />
            <div className="absolute inset-0 rounded-full animate-[pulse-glow_2s_ease-in-out_infinite]"></div>
          </div>
        </div>

        <style>{`
          @keyframes pop-in {
            0% { transform: scale(0.3); opacity: 0; }
            70% { transform: scale(1.15); }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes tick-draw {
            0% { transform: scale(0.2) rotate(-45deg); opacity: 0; }
            50% { transform: scale(1.3) rotate(0deg); }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          @keyframes pulse-glow {
            0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
            100% { box-shadow: 0 0 0 25px rgba(34,197,94,0); }
          }
        `}</style>

        <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Welcome to the NetClan
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Thank you for joining our community. We've sent a confirmation email
          <br />
          with next steps to get started.
        </p>

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

        <button
          onClick={goToEmail}
          className="w-full bg-linear-to-r from-[#1D439E] to-[#D36E93] text-white py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-md cursor-pointer"
        >
          Go To Email
        </button>
      </div>
    </div>
  );
}
