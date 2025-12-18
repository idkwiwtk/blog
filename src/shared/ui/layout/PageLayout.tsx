import Header from "@/widgets/header/ui/Header";
import Footer from "@/widgets/footer/ui/Footer";
import React from "react";

export interface MainPageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: MainPageLayoutProps) => {
  return (
    <div className="relative">
      {/* fixed header */}
      <Header />
      <main className="mt-header">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
