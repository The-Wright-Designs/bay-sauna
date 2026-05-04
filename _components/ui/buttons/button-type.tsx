"use client";

import { useFormStatus } from "react-dom";
import { ButtonProps } from "@/_types/button-types";
import { buttonStyles } from "@/_styles/button-styles";
import { ArrowUpFromDot } from "lucide-react";

const ButtonType = ({
  children,
  onClick,
  cssClasses,
  type = "submit",
  disabled = false,
  colorDarkBlue = false,
  colorLightBlue = false,
  colorBeige = false,
  ariaLabel,
  title,
}: ButtonProps) => {
  const { pending } = useFormStatus();
  const iconColor = colorDarkBlue || colorLightBlue ? "#ffffff" : "#2D2C33";

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={buttonStyles(
        cssClasses,
        disabled,
        pending,
        colorDarkBlue,
        colorLightBlue,
        colorBeige,
      )}
      disabled={disabled || pending}
      title={title}
    >
      {pending && type === "submit" ? (
        <div className="flex items-center py-0.5 justify-center min-w-[99px]">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          {children}
          <ArrowUpFromDot size={20} color={iconColor} className="rotate-90" />
        </>
      )}
    </button>
  );
};

export default ButtonType;
