import type { ReactNode } from "react";
import type { HTMLAttributes } from "react";
import Badge from "./Badge";

interface Props extends HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  year: string;
  tags: string[];
  children: ReactNode;
}

const ProjectPage = ({
  image,
  title,
  year,
  tags,
  children,
  className,
  ...props
}: Props) => {
  return (
    <div
      {...props}
      className={`bg-bright-400 h-full w-full flex ${className ?? ""}`}
    >
      <img
        src={`/src/assets/${image}`}
        alt=""
        className="h-full w-auto object-contain"
      />
      <div className="p-6 pr-23 flex flex-col gap-6">
        <div className="text-xl text-justify">
          <div className="flex gap-8 text-3xl font-light mb-2">
            <h2>{title}</h2>
            <h2 className="text-dull">{year}</h2>
          </div>
          {children}
        </div>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <Badge className="bg-dull text-bright-500">{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
