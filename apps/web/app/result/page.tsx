"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";
import { combineClasses } from "@utils/style";

interface PhotoData {
  id: string;
  author: string;
  url: string;
  download_url: string;
  height: number;
  width: number;
}

export default function ResultPage() {
  const [photoData, setPhotoData] = useState<PhotoData | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedData = sessionStorage.getItem("photoData");
    if (storedData) {
      setPhotoData(JSON.parse(storedData));
    }
  }, []);

  const imageAlt = photoData?.author
    ? `${photoData.author}의 사진`
    : "사진 없음";

  return (
    <div className={styles.page}>
      <div className={styles.photoContainer}>
        {photoData?.download_url ? (
          <Image
            src={photoData.download_url}
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
          value1={photoData?.id}
          key2="Author"
          value2={photoData?.author}
          isResponsive
        />

        <ResultSection
          key1="width"
          value1={photoData?.width}
          key2="height"
          value2={photoData?.height}
          isResponsive
        />

        <ResultSection
          key1="url"
          value1={photoData?.url}
          key2="download_url"
          value2={photoData?.download_url}
          valueClassName={styles.underlineText}
        />

        <Button type="button" onClick={() => router.back()} isResponsive>
          이전
        </Button>
      </div>
    </div>
  );
}

interface ResultSectionProps {
  key1: string;
  value1?: string | number;
  key2: string;
  value2?: string | number;
  isResponsive?: boolean;
  valueClassName?: string;
}

const ResultSection = ({
  key1,
  value1,
  key2,
  value2,
  isResponsive = false,
  valueClassName,
}: ResultSectionProps) => {
  const sectionClassName = combineClasses(
    styles.resultSection,
    isResponsive && styles.responsiveSection
  );

  const valueClassNameCombined = combineClasses(
    styles.opacityText,
    valueClassName
  );

  const formatValue = (value: string | number | undefined): string => {
    if (value === undefined) return "-";
    if (typeof value === "number") return value.toLocaleString();
    return value;
  };

  return (
    <div className={sectionClassName}>
      <div className={styles.resultSectionItem}>
        <p>{key1}</p>
        <p className={valueClassNameCombined}>{formatValue(value1)}</p>
      </div>
      <div className={styles.resultSectionItem}>
        <p>{key2}</p>
        <p className={valueClassNameCombined}>{formatValue(value2)}</p>
      </div>
    </div>
  );
};
