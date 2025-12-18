/**
 *
 * scroll down : header hidden
 * scroll up : header display
 *
 */
"use client";

import Logo from "@/entities/logo/ui/Logo";
import ContentBox from "@/shared/ui/content/ContentBox";
import ContentWrapper from "@/shared/ui/content/ContentWrapper";
import Menu from "@/entities/menu/ui/Menu";

const Header = () => {
  return (
    <header className="flex items-center fixed top-0 left-0 right-0 z-50 bg-background transition-transform duration-300 ease-in-out border-b border-black h-header">
      <ContentBox>
        <ContentWrapper
          variant={"header"}
          className="px-16 py-12 md:px-20 md:py-16 w-full"
        >
          <Logo />
          <Menu />
        </ContentWrapper>
      </ContentBox>
    </header>
  );
};

export default Header;
