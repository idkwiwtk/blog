import MenuItem from "./MenuItem";
import { menuItems } from "../const/menuItem";

const Menu = () => {
  return (
    <nav className="max-w-1/2 flex-1 flex items-center">
      <ul className="flex-1 flex justify-around">
        {menuItems.map((item) => (
          <MenuItem key={item.name} name={item.name} href={item.href} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
