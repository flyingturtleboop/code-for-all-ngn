import { ReactNode } from "react";

interface CodeHeadingProps {
  prefix?: string;
  children: ReactNode;
  className?: string;
}

export const CodeHeading = ({ prefix = "//", children, className = "" }: CodeHeadingProps) => {
  return (
    <h2 className={`font-mono text-3xl md:text-4xl lg:text-5xl font-bold ${className}`}>
      <span className="text-primary mr-3">{prefix}</span>
      {children}
    </h2>
  );
};
