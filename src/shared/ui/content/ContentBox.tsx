import React from "react";

export interface ContentBoxProps {
  children: React.ReactNode;
}

const ContentBox = ({ children }: ContentBoxProps) => {
  return (
    <section className="max-w-content mx-auto w-content">{children}</section>
  );
};

export default ContentBox;
