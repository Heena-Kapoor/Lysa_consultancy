import Link from "next/link";
import React, { useState } from "react";
import menu_data5 from "./menu_data5";

const renderSubMenus = (menus, depth) => {
  return (
    <ul className={`submenu depth-${depth}`}>
      {menus.map((menu, index) => (
        <SubMenuItem key={index} menu={menu} depth={depth} />
      ))}
    </ul>
  );
};

const SubMenuItem = ({ menu, depth }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="menu-item"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link href={menu.link} style={{color:"#000", textDecoration:"none !important"}}>{menu.title}</Link>
      {menu.has_dropdown &&
        menu.sub_menus &&
        isOpen &&
        renderSubMenus(menu.sub_menus, depth + 1)}
    </li>
  );
};

const NavMenu = () => {
  return (
    <ul className="main-menu">
      {menu_data5.map((menu_item, i) => (
        <SubMenuItem key={i} menu={menu_item} depth={0} />
      ))}
    </ul>
  );
};

export default NavMenu;
