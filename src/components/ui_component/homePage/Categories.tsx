"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import { useAllCategory } from "@/hooks/category.hook";
import Link from "next/link";
const Categories = () => {
  const { data } = useAllCategory();

  return (
    <div className="my-5 px-1">
      <Swiper
        className=""
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          440: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          550: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          988: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
      >
        {data?.data?.map((option) => (
          <SwiperSlide key={option.categoryId}>
            <Link
              href={`/product?categoryId=${option.categoryId}`}
              className="w-full flex justify-center"
            >
              <div className="min-w-40 flex  items-center justify-center rounded-full bg-black h-16 text-white font-medium">
                {option.name}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
