import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex flex-col font-extrabold leading-3.5">
        <span>Code</span>
        <span>Stack</span>
      </div>
    </Link>
  );
};

export default Logo;
