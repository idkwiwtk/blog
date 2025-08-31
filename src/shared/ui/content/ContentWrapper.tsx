import React from "react";

export interface ContentWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ContentWrapper = ({ children, className }: ContentWrapperProps) => {
  return <div className={`p-12 ${className}`}>{children}</div>;
};

export default ContentWrapper;
