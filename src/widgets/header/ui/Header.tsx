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

const stickyHeader = (direction: ScrollDirection) => {
  return direction == "up" && "sticky top-0";
};

const Header = () => {
  const direction: ScrollDirection = useScrollDirection();

  return (
    <header className={`${stickyHeader(direction)}`}>
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
