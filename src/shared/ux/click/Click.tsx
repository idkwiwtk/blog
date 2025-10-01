"use client";

import React, { ReactElement } from "react";

export interface ClickProps {
  children: ReactElement<any>;
  // onClick: (e: React.MouseEvent<HTMLElement>) => {};
  // onClick: () => void;
}

const Click = ({ children }: ClickProps) => {
  console.log("click children", children);
  return (
    <div className="bg-blue-100 cursor-pointer">
      {React.cloneElement(children, {
        onClick: () => {
          console.log("test");
        },
      })}
    </div>
  );
};

export default Click;
