import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <h1>404</h1>
      <p>페이지를 찾을 수 없습니다.</p>
      <Link href="/">홈으로 돌아가기</Link>
    </div>
  );
}
