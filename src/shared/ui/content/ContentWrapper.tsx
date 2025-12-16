import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib";

const contentWrapperVaritants = cva("p-12", {
  variants: {
    variant: {
      header: "px-12 py-20 flex justify-between",
    },
  },
});

export interface ContentWrapperProps
  extends VariantProps<typeof contentWrapperVaritants> {
  children: React.ReactNode;
  className?: string;
}

const ContentWrapper = ({ children, variant, className }: ContentWrapperProps) => {
  return <div className={cn(contentWrapperVaritants({ variant }), className)}>{children}</div>;
};

export default ContentWrapper;
