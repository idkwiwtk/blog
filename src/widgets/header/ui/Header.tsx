/**
 *
 * scroll down : header hidden
 * scroll up : header display
 *
 */
"use client";

import Link from "next/link";
import Logo from "@/entities/logo/ui/Logo";
import ContentBox from "@/shared/ui/content/ContentBox";
import ContentWrapper from "@/shared/ui/content/ContentWrapper";
import Menu from "@/entities/menu/ui/Menu";
import useScrollDirection from "@/shared/hook/useScollDirection";

const Header = () => {
  const direction = useScrollDirection();

  return (
    <header className={`${direction == "up" && "sticky top-0"}`}>
      <ContentBox>
        <ContentWrapper className="flex justify-between">
          <Logo />
          <Menu />
        </ContentWrapper>
      </ContentBox>
    </header>
  );
};

export default Header;
