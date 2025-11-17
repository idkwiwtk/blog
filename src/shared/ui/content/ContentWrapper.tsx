import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const contentWrapperVaritants = cva("p-12", {
  variants: {
    variant: {
      header: "px-12 py-4 flex justify-between",
    },
  },
});

export interface ContentWrapperProps
  extends VariantProps<typeof contentWrapperVaritants> {
  children: React.ReactNode;
}

const ContentWrapper = ({ children, variant }: ContentWrapperProps) => {
  return <div className={contentWrapperVaritants({ variant })}>{children}</div>;
};

export default ContentWrapper;
