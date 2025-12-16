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
import useScrollDirection from "@/shared/hook/useScollDirection";
import { ScrollDirection } from "@/shared/hook/useScollDirection";

const Header = () => {
  const direction: ScrollDirection = useScrollDirection();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background transition-transform duration-300 ease-in-out ${
        direction === "down" ? "-translate-y-full" : "translate-y-0"
      } border-b border-black`}
    >
      <ContentBox>
        <ContentWrapper variant={"header"}>
          <Logo />
          <Menu />
        </ContentWrapper>
      </ContentBox>
    </header>
  );
};

export default Header;
