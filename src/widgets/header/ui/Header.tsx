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

const Header = () => {
  return (
    <header className="">
      <ContentBox>
        <ContentWrapper className="flex justify-between">
          <Logo />
          <nav className="max-w-1/2 flex-1">
            <ul className="flex justify-around">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/"}>About</Link>
              </li>
              <li>
                <Link href={"/"}>Posts</Link>
              </li>
              <li>
                <Link href={"/"}>Contat</Link>
              </li>
            </ul>
          </nav>
        </ContentWrapper>
      </ContentBox>
    </header>
  );
};

export default Header;
