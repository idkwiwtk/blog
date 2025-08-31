import Link from "next/link";

const Menu = () => {
  return (
    <nav className="max-w-1/2 flex-1">
      <ul className="flex justify-around">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>About</Link>
        </li>
        <li>
          <Link href={"/"}>Posts</Link>
        </li>
        <li>
          <Link href={"/"}>Contat</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
