import { buttonStyles } from "@/_styles/button-styles";
import { ButtonProps } from "@/_types/button-types";
import Link from "next/link";
import { ArrowUpFromDot } from "lucide-react";

const ButtonLink = ({
  children,
  onClick,
  cssClasses,
  href = "#",
  disabled,
  ariaLabel,
  colorDarkBlue = false,
  colorLightBlue = false,
  colorBeige = false,
  target = "_self",
}: ButtonProps) => {
  const iconColor = colorDarkBlue || colorLightBlue ? "#ffffff" : "#2D2C33";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={buttonStyles(
        cssClasses,
        disabled,
        false,
        colorDarkBlue,
        colorLightBlue,
        colorBeige,
      )}
      aria-label={ariaLabel}
      target={target}
    >
      {children}
      <ArrowUpFromDot size={20} color={iconColor} className="rotate-90" />
    </Link>
  );
};

export default ButtonLink;
