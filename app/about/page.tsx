import React from "react";
import Image from "next/image";
import { Button } from "@/components";

const About = () => {
  return (
    <div>
      <div className="w-full h-[300px] relative">
        <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className="object-cover grayscale" />
        <div className="absolute left-5 bottom-5 bg-[#53c28b] p-5 text-white">
          <h1 className="text-4xl font-bold">Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className="flex gap-[100px] flex-1">
        <div className="mt-[50px] flex flex-col gap-[30px]">
          <h1 className="text-4xl font-bold">Who Are We?</h1>
          <p className="text-[18px] font-light text-justify">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae. A suscipit eos. Animi quibusdam cum omnis officiis
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam
            cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam
            cum omnis officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="mt-[50px] flex flex-col gap-[30px]">
          <h1 className="text-4xl font-bold">What We Do?</h1>
          <p className="text-[18px] font-light text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. - Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button text="Contact" url="/contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
