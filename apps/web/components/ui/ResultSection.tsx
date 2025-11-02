import { combineClasses } from "@utils/style";
import styles from "./resultSection.module.css";

interface ResultSectionProps {
  key1: string;
  value1?: string | number;
  key2: string;
  value2?: string | number;
  isResponsive?: boolean;
  valueClassName?: string;
}

export default function ResultSection({
  key1,
  value1,
  key2,
  value2,
  isResponsive = false,
  valueClassName,
}: ResultSectionProps) {
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
}
