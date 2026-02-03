import type { ReactNode } from "react";
import type { HTMLAttributes } from "react";
import Badge from "./Badge";
import { useMediaQuery } from "../useMediaQuery";

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
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <div
      {...props}
      className={`h-full w-full flex flex-col xl:flex-row ${className ?? ""}`}
    >
      <img
        src={`/${image + (isDesktop ? ".png" : "-wide.png")}`}
        alt=""
        className="h-full w-auto max-h-154 object-contain"
      />
      <div className="p-6 xl:pr-23 flex flex-col gap-6">
        <div className="text-xl text-justify">
          <div className="flex gap-8 text-3xl text-left font-light mb-2">
            <h2>{title}</h2>
            <h2 className="text-dull">{year}</h2>
          </div>
          {children}
        </div>
        <div className="flex flex-wrap gap-2 mb-8 xl:mb-0">
          {tags.map((tag) => (
            <Badge className="bg-dull text-bright-500">{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
