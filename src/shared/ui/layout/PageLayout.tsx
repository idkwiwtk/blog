import Header from "@/widgets/header/ui/Header";
import React from "react";

export interface MainPageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: MainPageLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>;
    </>
  );
};

export default PageLayout;
