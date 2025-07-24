export function comma(value) {
  const num = typeof value === "string" ? Number(value) : value;

  if (isNaN(num)) return "0";

  return num.toLocaleString("ko-KR");
}
