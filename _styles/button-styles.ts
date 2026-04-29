import classNames from "classnames";

export const buttonStyles = (
  cssClasses?: string,
  disabled?: boolean,
  pending?: boolean,
  colorDarkBlue?: boolean,
  colorLightBlue?: boolean,
  colorBeige?: boolean,
) => {
  const active = !(disabled || pending);
  const isDefault = !colorDarkBlue && !colorLightBlue && !colorBeige;

  return classNames(
    "flex text-subheading text-center px-10 py-3.5 justify-center items-center gap-2 ease-in-out duration-300 rounded-md desktop:hover:cursor-pointer",
    cssClasses,
    {
      "opacity-50 cursor-not-allowed": pending || disabled,
      "bg-dark-blue text-white": colorDarkBlue,
      "bg-light-blue text-white": colorLightBlue,
      "bg-beige text-black": colorBeige,
      "bg-white text-black": isDefault,
      "desktop:hover:opacity-90":
        (colorDarkBlue || colorLightBlue || colorBeige || isDefault) && active,
    },
  );
};
