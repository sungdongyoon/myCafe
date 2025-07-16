"use client";

import { useProducts } from "@/provider/ProductsProvider";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import ProductSection from "./home/ProductSection";

export default function Home() {
  const productData = useProducts();
  console.log("test", productData);

  return (
    <div className="flex flex-col items-center min-h-[100vh]">
      <section className="w-full h-[100vh]">
        <div className="w-full h-full relative bg-red-200">
          <Image
            src="https://fkdjjlglhqooonngtein.supabase.co/storage/v1/object/public/test//test-representative.jpeg"
            fill
            alt="메인 이미지"
            className="object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <motion.h3
              className="text-[60px] mb-[20px] text-sub"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* 커피와 공간, 그 이상의 행복을 전합니다. */}
              공간이 주는 설렘, 커피가 주는 여운
            </motion.h3>
            <motion.h3
              className="text-[20px] text-sub"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              당신의 소중한 시간을 더욱 특별하게 만드는 카페, myCafe 입니다.
            </motion.h3>
          </div>
        </div>
      </section>
      {/* <section className="w-full h-[500px] relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          navigation
          scrollbar={true}
          autoplay={{ delay: 3000 }}
          className="w-full h-[100%]"
        >
          <SwiperSlide>
            <Image
              src="https://fkdjjlglhqooonngtein.supabase.co/storage/v1/object/public/test//test-banner.jpg"
              fill
              alt="이벤트 배너"
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://fkdjjlglhqooonngtein.supabase.co/storage/v1/object/public/test//test-banner2.jpg"
              fill
              alt="이벤트 배너"
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://fkdjjlglhqooonngtein.supabase.co/storage/v1/object/public/test//test-banner3.jpg"
              fill
              alt="이벤트 배너"
              className="object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </section> */}
      <ProductSection data={productData} category="coffee" title="인기 원두" />
      <ProductSection data={productData} category="goods" title="인기 굿즈" />
      <section className="w-full flex justify-center items-center">
        <div className="flex gap-[30px] my-[100px]">
          <Link href="#" className="text-[30px]">
            <FaInstagram />
          </Link>
          <Link href="#" className="text-[30px]">
            <FaYoutube />
          </Link>
          <Link href="#" className="text-[30px]">
            <FaTwitter />
          </Link>
        </div>
      </section>
    </div>
  );
}
