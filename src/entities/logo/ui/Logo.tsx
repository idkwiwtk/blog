import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={"/next.svg"} width={120} height={60} alt="Logo Image" />
    </Link>
  );
};

export default Logo;
