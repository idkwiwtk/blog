import React from "react";

export interface MainPageLayoutProps {
  children: React.ReactNode;
}

const MainPageLayout = ({ children }: MainPageLayoutProps) => {
  return <section>{children}</section>;
};

export default MainPageLayout;
