import { Button } from "@/components";
import React from "react";
import Image from "next/image";
import { items } from "@/constant";

const Category = ({ params }: { params: { category: string } }) => {
  let data;
  switch (params.category) {
    case "applications":
      data = items.applications;
      break;
    case "illustrations":
      data = items.illustrations;
      break;
    default:
      data = items.websites;
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#53c28b]">{params.category}</h1>
      {data.map((item) => (
        <div className="flex gap-[50px] mt-[50px] mb-[100px] even:flex-row-reverse" key={item.id}>
          <div className="flex-1 flex flex-col gap-5 justify-center">
            <h1 className="text-[50px] font-bold">{item.title}</h1>
            <p className="text-[20px]">{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className="flex-1 h-[500px] relative">
            <Image className="object-cover" fill src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
