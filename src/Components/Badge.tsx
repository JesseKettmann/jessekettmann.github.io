import type { ReactNode } from "react";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Badge = ({ children, className, ...props }: Props) => {
  return (
    <div
      {...props}
      className={`rounded-full px-3 py-2 leading-none flex items-center w-fit h-fit ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
};

export default Badge;
