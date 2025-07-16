import { supabase } from "@/lib/supabase";

// [get] 상품 정보
export const apiGetProducts = async () => {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error("상품 데이터 불러오기 실패", error);
    throw new Error(error.message);
  }
  return data;
};
