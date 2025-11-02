"use client";

import { ReactNode } from "react";
import styles from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${className || ""}`}>
      {children}
    </button>
  );
};
