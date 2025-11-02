"use client";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import { combineClasses } from "@utils/style";

export default function Header() {
  const pathname = usePathname();

  const headerClassName = combineClasses(
    styles.header,
    pathname === "/result" && styles.whiteHeader
  );

  return <header className={headerClassName}>박다솜</header>;
}
