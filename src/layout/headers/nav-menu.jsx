import Link from "next/link";
import React from "react";
import menu_data5 from "./menu_data5";
import './NavMenu.css';

// Recursive function to render nested menus
const renderSubMenus = (menus) => {
  return (
    <ul className="submenu">
      {menus.map((menu, index) => (
        <li key={index}>
          <Link href={menu.link}>{menu.title}</Link>
          {menu.has_dropdown && menu.sub_menus && renderSubMenus(menu.sub_menus)}
        </li>
      ))}
    </ul>
  );
};

const NavMenu = () => {
  return (
    <ul className="main-menu">
      {menu_data5.map((menu_item, i) => (
        <li key={i}>
          <Link href={menu_item.link}>{menu_item.title}</Link>
          {menu_item.has_dropdown && menu_item.sub_menus && renderSubMenus(menu_item.sub_menus)}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
