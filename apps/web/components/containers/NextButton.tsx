"use client";
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@hooks/useMedieaQuery";
import { usePhotoQuery } from "@hooks/usePhotoQuery";
import { usePhotoStore } from "@hooks/usePhotoStore";
import { useEffect } from "react";

export default function NextButton() {
  const router = useRouter();
  const { isDesktop } = useMediaQuery();

  const { refetch, isFetching } = usePhotoQuery();
  const { photo, setPhoto } = usePhotoStore();

  // 조회 이력이 있으면 자동으로 이동
  useEffect(() => {
    if (photo) router.push("/result");
  }, [photo, router]);

  const handleClick = async () => {
    // memo. debounce 대신 중복 클릭 방지를 위해 추가
    if (isFetching) return;
    const result = await refetch();
    if (result.data) {
      setPhoto(result.data);
      router.push("/result");
    }
  };

  return (
    <Button
      size={isDesktop ? "large" : "medium"}
      type="button"
      onClick={handleClick}
      isLoading={isFetching}
    >
      다음
    </Button>
  );
}
