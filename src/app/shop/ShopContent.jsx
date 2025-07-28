"use client";

import React, { useEffect, useState } from "react";
import { useProducts } from "@/provider/ProductsProvider";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { comma } from "@/utils/functions";
import clsx from "clsx";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/Container";

const ShopContent = () => {
  const params = useSearchParams();
  const categoryParams = params.get("category");
  const router = useRouter();

  // ------------ 데이터 ------------
  const productData = useProducts(); // 모든 상품
  const coffeeData = productData.filter((el) => el.category === "coffee"); // 커피
  const goodsData = productData.filter((el) => el.category === "goods"); // 굿즈
  const dessertData = productData.filter((el) => el.category === "dessert"); // 디저트

  console.log("product", productData);
  // console.log("coffee", coffeeData);
  // console.log("goods", goodsData);
  // console.log("desset", dessertData);

  // ------------ 상태 ------------
  const [viewItem, setViewItem] = useState(coffeeData); // 실제로 보여지는 아이템

  // ------------ 이펙트 ------------
  // viewItem 상태 변경
  useEffect(() => {
    if (categoryParams === "coffee") {
      setViewItem(coffeeData);
    } else if (categoryParams === "goods") {
      setViewItem(goodsData);
    } else if (categoryParams === "dessert") {
      setViewItem(dessertData);
    } else {
      setViewItem(coffeeData);
    }
  }, [categoryParams]);

  return (
    <Container>
      <div className="w-full max-w-screen-xl flex flex-col items-center gap-10">
        <h3 className="text-[30px] font-semibold">Shop</h3>
        <div className="flex gap-3 mb-[30px]">
          {[
            { label: "Coffee", value: "coffee" },
            { label: "Goods", value: "goods" },
            { label: "Dessert", value: "dessert" },
          ].map((item) => (
            <Link
              key={item.value}
              href={`/shop?category=${item.value}`}
              className={clsx(
                "text-[18px] rounded-[5px] w-[80px] h-[30px] inline-flex justify-center items-center shadow-md transition",
                categoryParams === item.value
                  ? "bg-main text-white"
                  : "border border-solid text-sub border-sub"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {viewItem.map((item) => (
            <div
              key={item.id}
              className="flex flex-col cursor-pointer"
              onClick={() => {
                router.push(`/shop/${item.product_id}`);
              }}
            >
              <div className="border border-solid border-gray-200 rounded-lg flex justify-center items-center p-4 aspect-square relative overflow-hidden">
                <Image
                  src={item.image_url ?? "/image/no-image.jpg"}
                  fill
                  alt={item.name_ko}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 justify-center items-center py-4">
                <p className="text-[15px] font-medium">{item.name_ko}</p>
                {item.roasting_level && (
                  <Badge className="bg-point">{item.roasting_level}</Badge>
                )}
                <p>
                  <span className="text-lg font-medium">
                    {comma(item.price)}
                  </span>
                  <span className="text-xs">원</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ShopContent;
