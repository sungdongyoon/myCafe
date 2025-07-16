import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductSection = ({ data, category, title }) => {
  return (
    <section className="w-full flex justify-center bg-background">
      <div className="w-full max-w-screen-xl py-[100px] px-[50px] flex flex-col items-center gap-10">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-[30px] font-semibold">{title}</h3>
          <Link
            href={`/shop?category=${category}`}
            className="text-[12px] font-bold"
          >
            더보기
          </Link>
        </div>
        <div className="grid grid-cols-2 w-full gap-3">
          {data
            .filter((el) => el.category === category)
            .slice(0, 4)
            .map((item) => (
              <div
                className="flex items-center bg-white p-[20px] rounded-[10px]"
                key={item.id}
              >
                <div className="w-[30%] flex justify-center">
                  <Image
                    src={item.image_url ?? "/image/no-image.jpg"}
                    width={100}
                    height={100}
                    alt="원두"
                  />
                </div>
                <div className="w-[70%] py-[10px] flex flex-col gap-[7px]">
                  <p className="text-[18px] text-gray-700 font-semibold">
                    {item.name_ko}
                  </p>
                  <p className="text-[14px]">{item.price}원</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
