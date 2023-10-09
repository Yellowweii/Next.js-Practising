import Link from "next/link";
import React from "react";

interface ButtonProps {
    text: string;
    url: string;
}

const Button = ({text, url}: ButtonProps) => {
  return (
    <Link href={url}>
      <button className="p-5 cursor-pointer bg-[#53c28b] border-0 rounded-[5px] max-w-fit text-white font-semibold">{text}</button>
    </Link>
  );
};

export default Button;
