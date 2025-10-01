"use client";

import { cn } from "@/shared/lib";
import React, { forwardRef, Ref } from "react";

const Text = forwardRef(
  ({ children }: { children: React.ReactNode }, ref: Ref<HTMLSpanElement>) => {
    return (
      <span className={cn("w-full", "inline-block", "text-[10px]")} ref={ref}>
        {children}
      </span>
    );
  }
);

export default Text;
