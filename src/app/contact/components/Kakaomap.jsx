"use client";

import React from "react";
import { Map, useKakaoLoader } from "react-kakao-maps-sdk";

const API_KEY = process.env.NEXT_PUBLIC_KAKAOMAP_KEY;

const Kakaomap = () => {
  const [loading, error] = useKakaoLoader({
    appkey: API_KEY,
  });

  if (loading) return <div>Loading</div>;
  if (error) return <div>error</div>;

  return (
    <div>
      <Map
        level={3}
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "100%", height: "360px" }}
      ></Map>
    </div>
  );
};

export default Kakaomap;
