"use client";

import { ReactNode } from "react";
import styles from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  /** 태블릿부터 작아지는 버튼 */
  isResponsive?: boolean;
}

// 클래스네임 조합 유틸리티 함수 (TODO: 공통으로 합칠 것)
const combineClasses = (...classes: (string | undefined | false)[]): string => {
  return classes.filter(Boolean).join(" ").trim();
};

export const Button = ({
  children,
  className,
  isResponsive = false,
  ...rest
}: ButtonProps) => {
  const buttonClassName = combineClasses(
    styles.button,
    isResponsive && styles.responsiveButton,
    className
  );

  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  );
};
