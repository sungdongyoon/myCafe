import React from "react";
import Kakaomap from "./components/Kakaomap";

const Contact = () => {
  return (
    <div className="min-h-[100vh] py-[100px] px-[200px]">
      <div className="mb-[50px] flex flex-col gap-[7px] justify-center">
        <h3 className="text-[30px] mb-[20px] font-semibold">문의</h3>
        <p>Email : ehdtjd0906@naver.com</p>
        <p>Tel : 010-6312-5903</p>
      </div>
      <div className="mb-[50px] flex flex-col gap-[7px] justify-center">
        <h3 className="text-[30px] mb-[20px] font-semibold">Location</h3>
        <address>서울특별시 광진구 아차산로 65길 91 1층</address>
        <p>평일 10:00 ~ 18:00</p>
        <p>주말 10:00 ~ 19:000</p>
        <p>매주 월, 화 휴무</p>
      </div>
      <div className="bg-gray-900 text-white w-[100%] aspect-[2/1] flex justify-center items-center">
        지도
      </div>
      <Kakaomap />
    </div>
  );
};

export default Contact;
