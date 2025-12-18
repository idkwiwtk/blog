import Link from "next/link";

export interface MenuItemProps {
  name: string;
  href: string;
}

const MenuItem = ({ name, href }: MenuItemProps) => {
  return (
    <li>
      <Link href={href}>{name}</Link>
    </li>
  );
};

export default MenuItem;
