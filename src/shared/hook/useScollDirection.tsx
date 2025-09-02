"use client";
import React, { useEffect, useState } from "react";

export type ScrollDirection = "up" | "down";

const useScrollDirection = () => {
  const [direction, setDirection] = useState<ScrollDirection>();

  const onWheel = (event: WheelEvent) => {
    if (event.deltaY > 0) {
      setDirection("down");
    } else {
      setDirection("up");
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", onWheel);

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return direction;
};

export default useScrollDirection;
