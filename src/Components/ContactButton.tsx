import type { ReactNode } from "react";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  onClick: () => void;
  children: ReactNode;
}

const ContactButton = ({ onClick, children, className }: Props) => {
  return (
    <button
      className={`rounded-full w-13 h-13 text-white bg-accent hover:bg-accent-highlight cursor-pointer shadow flex items-center justify-center transition duration-200 ${className ?? ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ContactButton;
