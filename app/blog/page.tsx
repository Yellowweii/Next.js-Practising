import { Button } from "@/components";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Blog = () => {
  return (
    <div>
      <Link href="/testId">
        <div className="flex-1 h-[500px] relative">
          <Image className="object-cover" fill src="" alt="" />
        </div>
        <div className="flex-1 flex flex-col gap-5 justify-center">
          <h1 className="text-[50px] font-bold"></h1>
          <p className="text-[20px]"></p>
          <Button text="See More" url="#" />
        </div>
      </Link>
    </div>
  );
};

export default Blog;
