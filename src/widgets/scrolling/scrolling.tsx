import { cn } from "@/shared/lib";
import Scrolling from "@/shared/ui/animation/scrolling/scrolling";

const ScrollingWidget = () => {
  return (
    <div className={cn("border border-red-400", "p-5", "w-full")}>
      <Scrolling>
        <Scrolling.Item>START</Scrolling.Item>
        <Scrolling.Item>
          test 1 12312312312312312312312312312312111231lasdfhaoiufhewlkj
        </Scrolling.Item>
      </Scrolling>
    </div>
  );
};

export default ScrollingWidget;
