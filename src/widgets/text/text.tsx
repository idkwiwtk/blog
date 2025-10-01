import { cn } from "@/shared/lib";
import Text from "@/shared/ui/text/text";

const TextWidget = () => {
  return (
    <div className={cn("w-600", "border border-red-400", "mx-auto", "flex")}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </Text>
    </div>
  );
};

export default TextWidget;
