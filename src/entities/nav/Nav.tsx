import React from "react";
import Logo from "../logo/ui/Logo";
import Menu from "../menu/ui/Menu";

import { cn } from "@/shared/lib/cn";

const NavContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav
      className={cn("w-full", "bg-gray-200", "flex", "items-center", "p-16")}
    >
      {children}
    </nav>
  );
};

const Nav = () => {
  return (
    <NavContainer>
      <Logo />
      <Menu />
    </NavContainer>
  );
};

export default Nav;
