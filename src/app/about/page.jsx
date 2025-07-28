"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Container from "@/components/Container";

const About = () => {
  return (
    <Container>
      <div className="w-full max-w-screen-xl flex flex-col gap-40">
        <div className="flex items-center flex-col md:flex-row gap-y-10">
          <div className="w-[100%] max-w-[400px] aspect-[4/5] relative">
            <Image
              src="https://fkdjjlglhqooonngtein.supabase.co/storage/v1/object/public/test//test-representative.jpeg"
              alt="카페 대표 이미지"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="w-[100%] h-[100%] mx-[50px]">
            <h5 className="text-[26px] mb-[30px]">
              안녕하세요, MyCafe 입니다.
            </h5>
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
        <div className="flex items-center justify-between w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            navigation
            scrollbar={true}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {[...Array(5)].map((_, idx) => (
              <SwiperSlide
                key={idx}
                className="aspect-[5/3] relative rounded-lg overflow-hidden"
              >
                <Image
                  src="https://fkdjjlglhqooonngtein.supabase.co/storage/v1/object/public/test//test-representative.jpeg"
                  fill
                  alt={`카페 대표 이미지 ${idx + 1}`}
                  className="object-cover"
                />
              </SwiperSlide>
            ))}
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
    </Container>
  );
};

export default About;
