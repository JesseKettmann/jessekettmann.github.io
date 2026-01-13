import type { ReactNode } from "react";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Badge = ({ children, className }: Props) => {
  return (
    <div
      className={`rounded-full px-3 p-2 leading-none flex items-center ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
};

export default Badge;
