"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="mb-5">
      <Carousel showThumbs={false} className="">
        <Image
          width={1100}
          height={100}
          alt=""
          src="https://www.shutterstock.com/image-vector/abstract-background-image-global-online-260nw-2322088941.jpg"
        />

        <Image
          width={200}
          height={200}
          alt=""
          src="https://www.shutterstock.com/image-vector/abstract-background-image-global-online-260nw-2322088941.jpg"
        />
      </Carousel>
    </div>
  );
};

export default Banner;
