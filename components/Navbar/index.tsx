import { links } from "@/constant";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Link href="/">lamamia</Link>
      <div>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
