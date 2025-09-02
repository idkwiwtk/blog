import Header from "@/widgets/header/ui/Header";
import React from "react";

export interface MainPageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: MainPageLayoutProps) => {
  return (
    <div className="relative">
      <Header />
      <main>{children}</main>;
    </div>
  );
};

export default PageLayout;
