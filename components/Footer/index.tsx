import React from "react";
import Image from "next/image";
import { icons } from "@/constant";

const Footer = () => {
  return (
    <div className="flex text-sm justify-between items-center h-[50px]">
      <p>&copy;2023 Lamamia. All rights reserved.</p>
      <div className="flex items-center gap-[10px]">
        {icons.map((icon) => (
          <Image className="opacity-60 cursor-pointer" key={icon.id} src={icon.url} alt={icon.alt} width={15} height={15} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
