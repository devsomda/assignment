"use client";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import { combineClasses } from "@utils/style";
import { usePhotoStore } from "@hooks/usePhotoStore";

export default function Header() {
  const pathname = usePathname();
  const { clearPhoto } = usePhotoStore();

  const headerClassName = combineClasses(
    styles.header,
    pathname === "/result" && styles.whiteHeader
  );

  return (
    <header className={headerClassName}>
      박다솜
      <button type="button" onClick={() => clearPhoto()}>
        <abbr title="Zustand 저장소를 비웁니다.">초기화</abbr>
      </button>
    </header>
  );
}
