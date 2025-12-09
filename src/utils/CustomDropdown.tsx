import React, { useState } from "react";

interface DbProps {
  formData: {
    experienceLevel: string;
    // add other fields if needed
  };
  handleInputChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

const Db: React.FC<DbProps> = ({ formData, handleInputChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mb-4 relative">
        <label className="text-sm text-gray-900 mb-1 block font-medium">
          Experience Level
        </label>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 text-base cursor-pointer flex justify-between items-center"
        >
          <span>
            {formData.experienceLevel === "beginner"
              ? "Complete Beginner"
              : formData.experienceLevel === "intermediate"
              ? "Some Networking Knowledge"
              : formData.experienceLevel === "advanced"
              ? "Intermediate"
              : formData.experienceLevel === "expert"
              ? "Advanced"
              : "Select Experience Level"}
          </span>
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path fill="#333" d="M6 9L1 4h10z" />
          </svg>
        </div>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
            <div
              onClick={() => {
                const event = {
                  target: {
                    name: "experienceLevel",
                    value: "beginner",
                  },
                } as React.ChangeEvent<HTMLInputElement>;
                handleInputChange(event);
                setIsOpen(false);
              }}
              className={`px-4 py-3 cursor-pointer hover:bg-gray-200 ${
                formData.experienceLevel === "beginner" ? "bg-gray-200" : ""
              }`}
            >
              Complete Beginner
            </div>
            <div
              onClick={() => {
                const event = {
                  target: {
                    name: "experienceLevel",
                    value: "intermediate",
                  },
                } as React.ChangeEvent<HTMLInputElement>;
                handleInputChange(event);
                setIsOpen(false);
              }}
              className={`px-4 py-3 cursor-pointer hover:bg-gray-200 ${
                formData.experienceLevel === "intermediate" ? "bg-gray-200" : ""
              }`}
            >
              Some Networking Knowledge
            </div>
            <div
              onClick={() => {
                const event = {
                  target: {
                    name: "experienceLevel",
                    value: "advanced",
                  },
                } as React.ChangeEvent<HTMLInputElement>;
                handleInputChange(event);
                setIsOpen(false);
              }}
              className={`px-4 py-3 cursor-pointer hover:bg-gray-200 ${
                formData.experienceLevel === "advanced" ? "bg-gray-200" : ""
              }`}
            >
              Intermediate
            </div>
            <div
              onClick={() => {
                const event = {
                  target: {
                    name: "experienceLevel",
                    value: "expert",
                  },
                } as React.ChangeEvent<HTMLInputElement>;
                handleInputChange(event);
                setIsOpen(false);
              }}
              className={`px-4 py-3 cursor-pointer hover:bg-gray-200 ${
                formData.experienceLevel === "expert" ? "bg-gray-200" : ""
              }`}
            >
              Advanced
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Db;
