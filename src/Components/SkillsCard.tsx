import type { ReactNode } from "react";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const SkillsCard = ({ children, className }: Props) => {
  return (
    <div
      className={`bg-bright-400 shadow-lg flex flex-col p-6 ${className ?? ""}`}
    >
      {children}
    </div>
  );
};

export default SkillsCard;
