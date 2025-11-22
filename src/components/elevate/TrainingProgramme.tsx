import { useState } from "react";
import Organizations from "./programs/Organizations";
import Individuals from "./individuals/Individuals";

export default function TrainingPrograms() {
  const [activeTab, setActiveTab] = useState("organizations");

  return (
    <div className="min-h-screen py-12 flex flex-col items-center">
      <div className="max-w-full">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 inline-flex shadow-sm">
            <button
              onClick={() => setActiveTab("organizations")}
              className={`px-8 py-3 rounded-md font-medium transition-all ${
                activeTab === "organizations"
                  ? "bg-[#DFBBFF] text-gray-900"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              For Organizations
            </button>
            <button
              onClick={() => setActiveTab("individuals")}
              className={`px-8 py-3 rounded-md font-medium transition-all ${
                activeTab === "individuals"
                  ? "bg-[#DFBBFF] text-gray-900"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              For Individuals
            </button>
          </div>
        </div>

        {/* Organizations Content */}
        {activeTab === "organizations" && <Organizations />}

        {/* Individuals Content */}
        {activeTab === "individuals" && <Individuals />}
      </div>
    </div>
  );
}
