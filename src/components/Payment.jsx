"use client";

import { ANONYMOUS, loadTossPayments } from "@tosspayments/tosspayments-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const clinetKey = process.env.NEXT_PUBLIC_TOSS_KEY;

const Payment = ({ price, itemName, count, orderId }) => {
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    async function fetchPayment() {
      try {
        const tossPayments = await loadTossPayments(clinetKey);

        const payment = tossPayments.payment({ customerKey: ANONYMOUS });

        setPayment(payment);
      } catch (error) {
        console.error("Error fetching payment: ", error);
      }
    }

    fetchPayment();
  }, [clinetKey]);

  async function requestPayment() {
    await payment.requestPayment({
      method: "CARD", // 카드 및 간편결제
      amount: {
        currency: "KRW",
        value: price,
      },
      orderId: "JguORgPvJCUal0Nbgfdhy", // 고유 주문번호
      orderName: `${itemName} x ${count}`,
      successUrl: window.location.origin + "/shop/success", // 결제 요청이 성공하면 리다이렉트되는 URL
      failUrl: window.location.origin + "/shop/fail", // 결제 요청이 실패하면 리다이렉트되는 URL
      customerEmail: "ehdtjd0906@naver.com",
      customerName: "윤동동성",
      customerMobilePhone: "01063125903",
      // 카드 결제에 필요한 정보
      card: {
        useEscrow: false,
        flowMode: "DEFAULT", // 통합결제창 여는 옵션
        useCardPoint: false,
        useAppCardOnly: false,
      },
    });
  }

  return (
    <Button
      className="bg-main text-white py-2 px-5 rounded-[20px]"
      onClick={() => requestPayment()}
    >
      구매하기
    </Button>
  );
};

export default Payment;
