import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  tooltip: string;
  children: ReactNode;
}

const TooltipButton = ({ tooltip, children, ...props }: Props) => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Manage visible state for fade out
  useEffect(() => {
    if (open) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => setVisible(false), 200); // match animation duration
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <div ref={ref} {...props} className="relative inline-block">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-full w-13 h-13 text-white bg-accent hover:bg-accent-highlight cursor-pointer shadow flex items-center justify-center transition duration-200"
      >
        {children}
      </button>

      {visible && (
        <div
          className={`absolute left-1/2 -translate-x-1/2 bottom-full -translate-y-1/4 mb-2
                     whitespace-nowrap rounded bg-background-mint px-3 py-1
                     text-xl text-dark shadow-lg z-10
                     ${
                       open
                         ? "animate-[fadeIn_0.1s_ease-out_forwards]"
                         : "animate-[fadeOut_0.1s_ease-out_forwards]"
                     }`}
        >
          {/* Tooltip arrow */}
          <div className="absolute left-1/2 -bottom-1.5 w-3 h-3 bg-background-mint rotate-45 shadow-lg -translate-x-1/2"></div>
          {tooltip}
        </div>
      )}
    </div>
  );
};

export default TooltipButton;
