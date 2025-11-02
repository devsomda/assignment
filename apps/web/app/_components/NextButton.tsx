"use client";
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";

export default function NextButton() {
  const router = useRouter();

  const handleClick = async () => {
    console.log("NextButton clicked");
    const response = await fetch("https://picsum.photos/id/0/info");
    const data = await response.json();
    sessionStorage.setItem("photoData", JSON.stringify(data));
    router.push("/result");
  };

  return (
    <Button type="button" onClick={handleClick}>
      다음
    </Button>
  );
}
