import type { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

const CommunityButton = ({
  children,
  text,
  link,
}: {
  children?: ReactNode;
  text?: string;
  link?: string;
}) => {
  return (
    <div>
      <RouterLink to={link ?? "/communityApplication"}>
        <button
          className={`bg-linear-to-r from-[#1D439E] to-[#D36E93] tracking-widest cursor-pointer hover:opacity-90 transition px-6 py-3 rounded-sm min-w-[212px] font-medium ${text}`}
        >
          {children}
        </button>
      </RouterLink>
    </div>
  );
};

export default CommunityButton;
