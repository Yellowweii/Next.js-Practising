import { links } from "@/constant";
import Link from "next/link";
import React from "react";
import DarkModeToggle from "../DarkModeToggle";

const Navbar = () => {
  return (
    <div className="flex h-[100px] justify-between items-center">
      <Link className="font-bold text-[22px]" href="/">
        lamamia
      </Link>
      <div className="flex items-center gap-5">
        <DarkModeToggle />
        {links.map((link) => (
          <Link className="hover:text-gray-400" key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <button className="p-[5px] border-0 bg-lime-500 text-white cursor-pointer rounded-[3px]">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
