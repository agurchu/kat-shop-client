import React from "react";
import { navItems } from "../../static/data";
import { Link } from "react-router-dom";

export default function Navbar({ active }) {
  return (
    <div className="800px:flex block">
      {navItems &&
        navItems.map((item, index) => (
          <div className="flex" key={index}>
            <Link
              to={item.url}
              className={`${
                active === index + 1
                  ? "text-orange-600"
                  : "text-black 800px:text-[#fff]"
              } pb-[30px] 800px:pb-0 font-[500] px-6  cursor-pointer`}
            >
              {item.title}
            </Link>
          </div>
        ))}
    </div>
  );
}
