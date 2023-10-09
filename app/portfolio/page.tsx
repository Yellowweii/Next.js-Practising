import { portfolioLinks } from "@/constant";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Choose a gallery</h1>
      <div className="flex gap-[50px]">
        {portfolioLinks.map((link) => (
          <Link key={link.id} className={`border-[5px] border-[#bbb] rounded-[5px] w-[300px] h-[400px] relative ${link.bg_img} bg-cover hover:text-[#53c28b]`} href={link.url}>
            <span className="absolute right-[10px] bottom-[10px] text-[40px] font-bold">{link.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
