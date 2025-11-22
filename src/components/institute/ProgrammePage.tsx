import Elevate from "@/pages/Elevate/Elevate";
import Institute from "@/pages/Institute/Institute";
import LINE from "@/pages/LINE/LINE";
import { useParams } from "react-router-dom";

export default function ProgrammePage() {
  const { type } = useParams();

  if (type === "institute") return <Institute />;
  if (type === "elevate") return <Elevate />;
  if (type === "line") return <LINE />;

  return <div>Programme not found</div>;
}
