/**
 *
 * scroll down : header hidden
 * scroll up : header display
 *
 */

import Link from "next/link";
import Logo from "@/entities/logo/ui/Logo";
import ContentBox from "@/shared/ui/content/ContentBox";
import ContentWrapper from "@/shared/ui/content/ContentWrapper";
import Menu from "@/entities/menu/ui/Menu";

const Header = () => {
  return (
    <header className="">
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
