import React from "react";
import styles from "./Button.module.css";

const Button = ({
  variant = "primary", // 'primary', 'secondary', 'text', 'ghost'
  size = "md",         // 'sm', 'md', 'lg'
  disabled = false,
  onClick,
  children,
}) => {
  const classNames = `${styles.btn} ${styles[variant]} ${styles[size]}`;

  return (
    <button
      className={classNames}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
