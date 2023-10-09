import React from "react";
import Image from "next/image";
import { Button } from "@/components";

const About = () => {
  return (
    <div>
      <div className="w-full h-[300px] relative">
        <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className="object-cover" />
        <div>
          <h1>Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div>
        <div>
          <h1>Who Are We?</h1>
          <p>
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
        <div>
          <h1>What We Do?</h1>
          <p>
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
