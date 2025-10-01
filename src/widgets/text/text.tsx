import { cn } from "@/shared/lib";
import Text from "@/shared/ui/text/text";
import { useEffect, useRef } from "react";

const TextWidget = () => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.offsetWidth);
    }
  }, [ref]);

  return (
    <div
      className={cn(
        "border border-red-400",
        "mx-auto",
        "flex",
        "flex-col",
        "gap-4",
        "w-600",
        "overflow-hidden",
        "whitespace-nowrap"
      )}
    >
      <h1>text width</h1>
      <Text ref={ref}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </Text>
    </div>
  );
};

export default TextWidget;
