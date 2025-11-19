import type { ReactNode } from "react";
import { Button } from "../ui/button";
import { Link as RouterLink } from "react-router-dom";

const CommunityButtonFill = ({
  children,
  text,
}: {
  children?: ReactNode;
  text?: string;
}) => {
  return (
    <div>
      <RouterLink to="/communityApplication">
        <div className="inline-block p-0.5 rounded-sm cursor-pointer bg-linear-to-r from-[#1D439E] to-[#D36E93]">
          <Button
            variant="outline"
            className="px-8 py-6 border-none rounded-sm text-lg bg-[#E6DADA] hover:bg-[#E6DADA] cursor-pointer"
          >
            <span
              className={`bg-clip-text text-transparent bg-linear-to-r from-[#1D439E] to-[#D36E93] ${text}`}
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
