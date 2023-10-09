import { portfolioLinks } from "@/constant";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold my-5">Choose a gallery</h1>
      <div className="flex gap-[50px] mb-[60px]">
        {portfolioLinks.map((link) => (
          <Link key={link.id} className={`border-[5px] border-[#bbb] rounded-[5px] w-[300px] h-[400px] relative hover:text-[#53c28b]`} href={link.url}>
            <Image className="object-cover" src={link.imgurl} alt={link.text} fill />
            <span className="absolute right-[10px] bottom-[10px] text-[40px] font-bold">{link.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
