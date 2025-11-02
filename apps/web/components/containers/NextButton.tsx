"use client";
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@hooks/useMedieaQuery";
import { usePhotoQuery } from "@hooks/usePhotoQuery";
import { usePhotoStore } from "@hooks/usePhotoStore";

export default function NextButton() {
  const router = useRouter();
  const { isDesktop } = useMediaQuery();

  const { refetch, isFetching } = usePhotoQuery();
  const { setPhoto } = usePhotoStore();

  const handleClick = async () => {
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
    >
      {isFetching ? "로딩중..." : "다음"}
    </Button>
  );
}
