import type { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

const CommunityButton = ({
  children,
  text,
  link,
  onClick,
  isModal = false,
  disabled = false,
}: {
  children?: ReactNode;
  text?: string;
  link?: string;
  onClick?: () => void;
  isModal?: boolean;
  disabled?: boolean;
}) => {
  const buttonContent = (
    <div>
      {/* <RouterLink to={link ?? "/communityApplication"}> */}
      <button
        disabled={disabled}
        className={`bg-linear-to-r from-[#1D439E] to-[#D36E93] tracking-widest cursor-pointer hover:opacity-90 transition px-6 py-3.5 rounded-sm min-w-[212px] font-medium ${text} text-sm`}
      >
        {children}
      </button>
      {/* </RouterLink> */}
    </div>
  );

  // If isModal is true or onClick is provided, render as a button
  if (isModal || onClick) {
    return <div onClick={onClick}>{buttonContent}</div>;
  }

  // Otherwise, render as a link (default behavior)
  return (
    <div>
      <RouterLink to={link ?? "/communityApplication"}>
        {buttonContent}
      </RouterLink>
    </div>
  );
};

export default CommunityButton;
