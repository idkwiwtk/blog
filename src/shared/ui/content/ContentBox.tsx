import React from "react";

export interface ContentBoxProps {
  children: React.ReactNode;
}

const ContentBox = ({ children }: ContentBoxProps) => {
  return <section className="max-w-1280 mx-auto">{children}</section>;
};

export default ContentBox;
