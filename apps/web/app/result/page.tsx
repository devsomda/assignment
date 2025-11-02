"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";
import ResultSection from "@components/ui/ResultSection";
import { useMediaQuery } from "@hooks/useMedieaQuery";
import { usePhotoStore } from "@hooks/usePhotoStore";

export default function ResultPage() {
  const router = useRouter();
  const { isMobile } = useMediaQuery();

  const { photo, hasHydrated } = usePhotoStore();

  // 사진 조회 이력 없으면 1초 뒤 리다이렉트
  useEffect(() => {
    if (hasHydrated && !photo) {
      const timer = setTimeout(() => router.push("/"), 1000);
      return () => clearTimeout(timer);
    }
  }, [photo, hasHydrated, router]);

  if (!hasHydrated) {
    return <p>로딩 중...</p>;
  }

  if (hasHydrated && !photo) {
    return <p>사진 조회 이력이 없습니다. 메인으로 이동합니다...</p>;
  }

  const imageAlt = photo?.author ? `${photo.author}의 사진` : "사진 없음";

  return (
    <div className={styles.page}>
      <div className={styles.photoContainer}>
        {photo?.download_url ? (
          <Image
            src={photo.download_url}
            alt={imageAlt}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <p>사진 없음</p>
        )}
      </div>

      <div className={styles.resultContainer}>
        <ResultSection
          key1="id"
          value1={photo?.id}
          key2="Author"
          value2={photo?.author}
          isResponsive
        />

        <ResultSection
          key1="width"
          value1={photo?.width}
          key2="height"
          value2={photo?.height}
          isResponsive
        />

        <ResultSection
          key1="url"
          value1={photo?.url}
          key2="download_url"
          value2={photo?.download_url}
          valueClassName={styles.underlineText}
        />

        <Button
          size={isMobile ? "medium" : "small"}
          type="button"
          onClick={() => router.back()}
        >
          이전
        </Button>
      </div>
    </div>
  );
}
