"use client";

import { ReactNode } from "react";
import styles from "./button.module.css";
import Loading from "./loading";

type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: ButtonSize;
  className?: string;
  isLoading?: boolean;
}

// 클래스네임 조합 유틸
const combineClasses = (...classes: (string | undefined | false)[]): string =>
  classes.filter(Boolean).join(" ").trim();

export const Button = ({
  children,
  className,
  size = "medium",
  isLoading = false,
  ...rest
}: ButtonProps) => {
  const buttonClassName = combineClasses(
    styles.button,
    styles[size],
    isLoading && styles.loading,
    className,
  );

  return (
    <button className={buttonClassName} {...rest}>
      {isLoading ? <Loading /> : children}
    </button>
  );
};
