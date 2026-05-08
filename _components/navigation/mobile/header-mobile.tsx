"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import navData from "@/_data/nav-data.json";
import { X } from "lucide-react";

interface MobileHeaderProps {
  cssClasses?: string;
}

export function HeaderMobile({ cssClasses }: MobileHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className={classNames(cssClasses)}>
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="flex gap-[6px] items-center">
          <Image
            src="/logo/bay-sauna-logo.png"
            alt="Bay Sauna logo"
            width={40}
            height={40}
            className="rounded-none"
          />
          <h1 className="flex flex-col gap-[2px] text-[16px] text-dark-blue font-semibold tracking-[1.92px]">
            Bay Sauna
            <span className="text-[9.5px] text-light-blue font-medium tracking-[0.38px]">
              Sweat Swim Repeat
            </span>
          </h1>
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="ease-in-out duration-300 -m-3 p-3"
          aria-label="Open menu"
        >
          <Image
            src="/icons/header/drag_handle.svg"
            alt="Open menu"
            width={23}
            height={11.5}
            className="w-[23px] h-auto rounded-none"
          />
        </button>
      </div>

      <div
        className={classNames(
          "fixed inset-0 z-50 transform bg-dark-blue/98 transition-transform duration-300 ease-in-out",
          {
            "translate-x-full": !isOpen,
          },
        )}
      >
        <div className="flex w-full py-6 items-center px-5 justify-end">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="p-2 -m-2 translate-x-1"
          >
            <X size={28} color="#FFFFFF" />
          </button>
        </div>
        <nav className="px-5">
          <ul className="grid gap-4">
            {navData.map(({ title, url }, id) => {
              return (
                <li key={id}>
                  <Link
                    href={url}
                    onClick={() => setIsOpen(false)}
                    className="text-paragraph text-white font-light p-3 -m-3"
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
            <li className="border-t border-white/25 pt-4">
              <Link
                href="/disclaimer"
                onClick={() => setIsOpen(false)}
                className="text-paragraph text-white font-light p-3 -m-3"
              >
                Health &amp; Liability Disclaimer
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
