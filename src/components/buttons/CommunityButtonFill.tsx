import type { ReactNode } from "react";
import { Button } from "../ui/button";
import { Link as RouterLink } from "react-router-dom";

const CommunityButtonFill = ({
  children,
  text,
  link,
  bg,
}: {
  children?: ReactNode;
  text?: string;
  link?: string;
  bg?: string;
}) => {
  return (
    <div>
      <RouterLink to={link ?? "/communityApplication"}>
        <div className="inline-block p-px rounded-sm cursor-pointer bg-linear-to-r from-[#1D439E] to-[#D36E93]">
          <Button
            variant="outline"
            className={`px-8 py-6 border-none rounded-sm text-lg ${
              bg ?? "bg-[#E6DADA]"
            } ${
              bg ? "hover:bg-[#DFBBFF]/90" : "hover:bg-[#E6DADA]"
            } cursor-pointer`}
          >
            <span
              className={`bg-clip-text tracking-widest text-transparent bg-linear-to-r from-[#1D439E] to-[#D36E93] ${text}`}
            >
              {children}
            </span>
          </Button>
        </div>
      </RouterLink>
    </div>
  );
};

export default CommunityButtonFill;
