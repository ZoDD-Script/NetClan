import type { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

const CommunityButton = ({
  children,
  text,
}: {
  children?: ReactNode;
  text?: string;
}) => {
  return (
    <div>
      <RouterLink to="/communityApplication">
        <button
          className={`bg-linear-to-r from-[#1D439E] to-[#D36E93] hover:opacity-90 transition px-6 py-3 rounded-sm max-w-[212px] font-medium ${text}`}
        >
          {children}
        </button>
      </RouterLink>
    </div>
  );
};

export default CommunityButton;
