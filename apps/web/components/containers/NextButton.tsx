"use client";
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@hooks/useMedieaQuery";

export default function NextButton() {
  const router = useRouter();
  const { isDesktop } = useMediaQuery();

  const handleClick = async () => {
    console.log("NextButton clicked");
    const response = await fetch("https://picsum.photos/id/0/info");
    const data = await response.json();
    sessionStorage.setItem("photoData", JSON.stringify(data));
    router.push("/result");
  };

  return (
    <Button
      size={isDesktop ? "large" : "medium"}
      type="button"
      onClick={handleClick}
    >
      다음
    </Button>
  );
}
