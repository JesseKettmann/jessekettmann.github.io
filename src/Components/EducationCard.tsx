import type { ReactNode } from "react";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  name: string;
  type: string;
  institution: string;
  period: string;
  children: ReactNode;
}

const EducationCard = ({
  name,
  type,
  institution,
  period,
  children,
  className,
  ...props
}: Props) => {
  return (
    <div
      {...props}
      className={`bg-bright-500 h-full shadow-lg flex flex-col p-8 ${
        className ?? ""
      }`}
    >
      <div className="flex justify-between text-xl font-medium">
        <h3>{name}</h3>
        <h3>{type}</h3>
      </div>
      <div className="flex justify-between text-xl font-light mb-8">
        <h3>{institution}</h3>
        <h3>{period}</h3>
      </div>
      {children}
    </div>
  );
};

export default EducationCard;
