import type { ReactNode } from "react";
import { Button } from "../ui/button";
import { Link as RouterLink } from "react-router-dom";

const CommunityButtonFill = ({
  children,
  text,
  link,
  bg,
  onClick,
  isModal = false,
  className,
}: {
  children?: ReactNode;
  text?: string;
  link?: string;
  bg?: string;
  onClick?: () => void;
  isModal?: boolean;
  className?: string;
}) => {
  const buttonContent = (
    <div
      className={`inline-block p-px rounded-sm cursor-pointer bg-linear-to-r from-[#1D439E] to-[#D36E93] ${
        className ?? ""
      }`}
    >
      <Button
        variant="outline"
        className={`font-grotesk px-8 py-6 border-none rounded-sm text-sm ${
          bg ?? "bg-[#E6DADA]"
        } ${
          bg ? "hover:bg-[#DFBBFF]/80" : "hover:bg-[#E6DADA]"
        } cursor-pointer w-full`}
      >
        <span
          className={`bg-clip-text tracking-widest text-transparent bg-linear-to-r from-[#1D439E] to-[#D36E93] ${
            text ?? ""
          }`}
        >
          {children}
        </span>
      </Button>
    </div>
  );

  // If isModal is true or onClick is provided, render as a button
  if (isModal || onClick) {
    return (
      <div onClick={onClick} className={className ?? ""}>
        {buttonContent}
      </div>
    );
  }

  // Otherwise, render as a link (default behavior)
  return (
    <div className={className ?? ""}>
      <RouterLink to={link ?? "/communityApplication"}>
        {buttonContent}
      </RouterLink>
    </div>
  );
};

export default CommunityButtonFill;
