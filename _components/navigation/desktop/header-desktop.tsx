import Link from "next/link";
import Image from "next/image";
import navData from "@/_data/nav-data.json";
import classNames from "classnames";

interface DesktopHeaderProps {
  cssClasses?: string;
}

const HeaderDesktop = ({ cssClasses }: DesktopHeaderProps) => {
  return (
    <div className={classNames(cssClasses)}>
      <div className="flex items-end justify-between">
        <Link href="/" className="flex gap-[6px] items-center hover:opacity-90">
          <Image
            src="/logo/bay-sauna-logo.png"
            alt="Bay Sauna logo"
            width={52}
            height={52}
            priority
          />
          <h1 className="flex flex-col gap-[2px] text-[20px] text-dark-blue font-semibold tracking-[2.4px]">
            Bay Sauna
            <span className="text-[11.85px] text-light-blue font-medium tracking-[0.474px]">
              Sweat Swim Repeat
            </span>
          </h1>
        </Link>
        <nav className="flex gap-3 items-center -mb-2">
          {navData.map((item) => (
            <Link
              key={item.title}
              className={classNames(
                item.title === "Book Your Session"
                  ? "border-light-blue border-2 bg-light-blue font-normal text-white rounded-md py-1 px-2.5 tablet:hover:text-black tablet:hover:bg-beige"
                  : "text-black font-light tablet:hover:text-light-blue",
              )}
              href={item.url}
              target={item.title === "Book Your Session" ? "_blank" : "_self"}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default HeaderDesktop;
