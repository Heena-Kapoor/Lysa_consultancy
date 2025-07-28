import Link from "next/link";
import React, { useState } from "react";
import menu_data from "./menu-data";

const MobileMenus = () => {
  const [activeMenus, setActiveMenus] = useState({});

  const handleToggle = (title) => {
    setActiveMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // Recursive Menu Renderer
  const renderMenuItems = (menus, parentIndex = "") =>
    menus.map((menu, index) => {
      const key = `${parentIndex}${index}`;
      const hasSubmenu = menu.has_dropdown && menu.sub_menus;

      return (
        <li key={key} className={hasSubmenu ? "has-dropdown" : ""}>
          <Link href={menu.link}>{menu.title}</Link>

          {/* Dropdown Toggle Button */}
          {hasSubmenu && (
            <>
              <a
                onClick={() => handleToggle(menu.title + key)}
                className={`mean-expand ${
                  activeMenus[menu.title + key] ? "mean-clicked" : ""
                }`}
                style={{ fontSize: "18px", cursor: "pointer" }}
              >
                <i
                  className={`fal ${
                    activeMenus[menu.title + key] ? "fa-minus" : "fa-plus"
                  }`}
                ></i>
              </a>

              {/* Submenu */}
              <ul
                className="submenu"
                style={{
                  display: activeMenus[menu.title + key] ? "block" : "none",
                }}
              >
                {renderMenuItems(menu.sub_menus, key + "-")}
              </ul>
            </>
          )}
        </li>
      );
    });

  return (
    <nav className="mean-nav">
      <ul>{renderMenuItems(menu_data)}</ul>
    </nav>
  );
};

export default MobileMenus;
