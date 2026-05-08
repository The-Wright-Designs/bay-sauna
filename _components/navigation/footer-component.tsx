import Link from "next/link";
import Image from "next/image";
import navData from "@/_data/nav-data.json";
import classNames from "classnames";

const FooterComponent = () => {
  return (
    <footer className="bg-beige w-full desktop:px-15">
      <div className="px-5 pt-10 pb-5 flex flex-col gap-7 desktop:max-w-[1280px] desktop:mx-auto desktop:border-t desktop:border-black/25 desktop:mt-15 desktop:px-0">
        <div className="flex flex-col gap-10 items-center desktop:flex-row desktop:justify-between desktop:items-start desktop:gap-0">
          <ul className="hidden desktop:block">
            {navData.map(({ title, url }, index) => (
              <li
                key={index}
                className={classNames({
                  "-mt-1": index !== 0,
                })}
              >
                <Link
                  href={url}
                  className="text-[14px] text-black hover:text-light-blue"
                >
                  {title}
                </Link>
              </li>
            ))}
            <li className="-mt-1">
              <Link
                href="/disclaimer"
                className="text-[14px] text-black hover:text-light-blue"
              >
                Health &amp; Liability Disclaimer
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-7 items-center desktop:items-end desktop:gap-5">
            <Link href="/" className="flex flex-col gap-3 items-center">
              <Image
                src="/logo/bay-sauna-logo.png"
                alt="Bay Sauna logo"
                width={84}
                height={84}
              />
              <h1 className="flex flex-col gap-[2px] text-[16px] text-dark-blue font-semibold tracking-[1.92px]">
                Bay Sauna
                <span className="text-[9.5px] text-light-blue font-medium tracking-[0.38px]">
                  Sweat Swim Repeat
                </span>
              </h1>
            </Link>
            <p className="flex flex-col gap-1 text-[14px] text-center desktop:text-right">
              Designed &amp; developed by
              <Link
                href="https://thewrightdesigns.co.za"
                className="transition-opacity duration-300 desktop:hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Wright Designs
              </Link>
            </p>
          </div>
        </div>
        <p className="text-[14px] justify-center flex flex-col phone:flex-row gap-1 text-center w-full">
          <span className="text-[14px]">
            © Bay Sauna {new Date().getFullYear()}
          </span>{" "}
          <span className="hidden phone:block text-[14px]">|</span>{" "}
          <Link href="/" aria-label="Bay Sauna">
            www.baysauna.co.za
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
