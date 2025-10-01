import { cn } from "@/shared/lib";
import React from "react";

const Text = ({ children }: { children: React.ReactNode }) => {
  return <span className={cn("w-full", "inline-block")}>{children}</span>;
};

export default Text;
