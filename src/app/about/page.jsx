"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const About = () => {
  return (
    <div className="min-h-[100vh] py-[200px] px-[200px] flex flex-col gap-[100px]">
      <div className="flex items-center">
        <div className="w-[100%] max-w-[400px] aspect-[4/5] relative">
          <Image
            src="https://fkdjjlglhqooonngtein.supabase.co/storage/v1/object/public/test//test-representative.jpeg"
            alt="카페 대표 이미지"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="w-[100%] h-[100%] mx-[50px]">
          <h5 className="text-[26px] mb-[30px]">안녕하세요, MyCafe 입니다.</h5>
          <p className="leading-[1.4]">
            카페 소개글 섹션입니다. 카페 소개글 섹션입니다. 카페 소개글
            섹션입니다. 카페 소개글 섹션입니다. 카페 소개글 섹션입니다. 카페
            소개글 섹션입니다. 카페 소개글 섹션입니다. 카페 소개글 섹션입니다.
            카페 소개글 섹션입니다. 카페 소개글 섹션입니다. 카페 소개글
            섹션입니다. 카페 소개글 섹션입니다. 카페 소개글 섹션입니다. 카페
            소개글 섹션입니다. 카페 소개글 섹션입니다. 카페 소개글 섹션입니다.
            카페 소개글 섹션입니다. 카페 소개글 섹션입니다. 카페 소개글
            섹션입니다.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          slidesPerView={3}
          spaceBetween={30}
          navigation
          scrollbar={true}
          autoplay={{ delay: 3000 }}
          className="w-full h-[100%]"
        >
          <SwiperSlide className="w-[300px] aspect-[5/3] relative">
            <Image
              src="https://fkdjjlglhqooonngtein.supabase.co/storage/v1/object/public/test//test-representative.jpeg"
              fill
              alt="카페 대표 이미지"
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="w-[300px] aspect-[5/3] relative">
            <Image
              src="https://fkdjjlglhqooonngtein.supabase.co/storage/v1/object/public/test//test-representative.jpeg"
              fill
              alt="카페 대표 이미지"
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="w-[300px] aspect-[5/3] relative">
            <Image
              src="https://fkdjjlglhqooonngtein.supabase.co/storage/v1/object/public/test//test-representative.jpeg"
              fill
              alt="카페 대표 이미지"
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="w-[300px] aspect-[5/3] relative">
            <Image
              src="https://fkdjjlglhqooonngtein.supabase.co/storage/v1/object/public/test//test-representative.jpeg"
              fill
              alt="카페 대표 이미지"
              className="object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex items-center justify-center">
        <p className="w-[500px] text-center leading-[1.4]">
          소개글을 입력해주세요. 소개글을 입력해주세요. 소개글을 입력해주세요.
          소개글을 입력해주세요. 소개글을 입력해주세요. 소개글을 입력해주세요.
          소개글을 입력해주세요. 소개글을 입력해주세요. 소개글을 입력해주세요.
          소개글을 입력해주세요. 소개글을 입력해주세요. 소개글을 입력해주세요.
          소개글을 입력해주세요. 소개글을 입력해주세요. 소개글을 입력해주세요.
          소개글을 입력해주세요. 소개글을 입력해주세요. 소개글을 입력해주세요.
          소개글을 입력해주세요.
        </p>
      </div>
    </div>
  );
};

export default About;
