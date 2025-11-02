"use client";

import { useQuery } from "@tanstack/react-query";

export const usePhotoQuery = () => {
  return useQuery({
    queryKey: ["photo"],
    queryFn: async () => {
      const res = await fetch("https://picsum.photos/id/0/info");
      if (!res.ok) throw new Error("API 요청에 실패했습니다.");
      return res.json();
    },
    enabled: false, // 쿼리 자동실행 X
    staleTime: 1000 * 60 * 5, // 5분 이내에는 동일한 쿼리를 다시 호출해도 네트워크 요청을 보내지 않음 (캐시 재사용)
  });
};
