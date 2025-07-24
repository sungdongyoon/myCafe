"use client";

import { useProducts } from "@/provider/ProductsProvider";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { comma } from "@/utils/functions";
import Payment from "@/components/Payment";

const ProductDetail = () => {
  const { productId } = useParams();

  // ------------ 데이터 ------------
  const productData = useProducts();
  const product = productData.find((el) => el.product_id === productId);

  // ------------ 상태 ------------
  const [itemCount, setItemCount] = useState(1);

  const postTossPaymentData = useMemo(() => {
    if (!product) return { itemName: "", price: 0, count: 1 };
    return {
      itemName: product.name_ko,
      price: product.price * itemCount,
      count: itemCount,
    };
  }, [product, itemCount]);

  console.log("data", postTossPaymentData);

  return (
    <div className="min-h-[100vh] py-[200px] flex flex-col items-center">
      <div className="w-full max-w-screen-xl">
        <div className="flex gap-[20px]">
          <div className="w-[50%]">
            <div className="w-[100%] aspect-square relative">
              <Image
                src={product.image_url ?? "/image/no-image.jpg"}
                alt={product.name_ko}
                fill
              />
            </div>
          </div>
          <div className="w-[50%]">
            <div className="flex flex-col gap-[10px] mb-[20px]">
              <h3 className="text-[30px] font-medium">{product.name_ko}</h3>
              <span className="text-[24px] font-semibold">
                {comma(product.price)}원
              </span>
              <span>{product.roasting_level}</span>
              <span>{product.country}</span>
              <span>{product.desc_ko}</span>
            </div>
            <div className="border border-gray-500 border-solid rounded-[10px] p-[20px] flex flex-col gap-[10px]">
              <h5 className="text-[20px] font-medium mb-[20px]">
                {product.name_ko}
              </h5>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <button
                    className="border border-solid border-gray-500 w-[30px] h-[30px] rounded-[5px] text-[18px]"
                    onClick={() =>
                      setItemCount((prev) => (prev > 1 ? prev - 1 : 1))
                    }
                  >
                    -
                  </button>
                  <div className="w-[50px] text-center">
                    <span className="text-[18px] ">{itemCount}</span>
                  </div>
                  <button
                    className="border border-solid border-gray-500 w-[30px] h-[30px] rounded-[5px] text-[18px]"
                    onClick={() => setItemCount((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
                <div>
                  <span className="text-[20px] font-semibold">
                    {comma(itemCount * product.price)}원
                  </span>
                </div>
              </div>
            </div>
            <Payment
              price={postTossPaymentData.price}
              itemName={postTossPaymentData.itemName}
              count={postTossPaymentData.count}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
