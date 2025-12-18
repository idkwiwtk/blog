import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib";

const contentWrapperVaritants = cva("px-16 py-12 md:px-20 md:py-16", {
  variants: {
    variant: {
      header: "flex justify-between items-center",
    },
  },
});

export interface ContentWrapperProps
  extends VariantProps<typeof contentWrapperVaritants> {
  children: React.ReactNode;
  className?: string;
}

const ContentWrapper = ({
  children,
  variant,
  className,
}: ContentWrapperProps) => {
  return (
    <div className={cn(contentWrapperVaritants({ variant }), className)}>
      {children}
    </div>
  );
};

export default ContentWrapper;
