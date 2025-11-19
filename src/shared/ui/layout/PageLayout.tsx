import Header from "@/widgets/header/ui/Header";
import React from "react";

export interface MainPageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: MainPageLayoutProps) => {
  return (
    <div className="relative">
      <Header />
      <main className="mt-60">{children}</main>
    </div>
  );
};

export default PageLayout;
