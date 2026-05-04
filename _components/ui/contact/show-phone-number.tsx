"use client";

import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { fetchPhone } from "@/_actions/contact-actions";
import { ShowPhoneNumberProps } from "@/_types/general-types";

const ShowPhoneNumber = ({
  buttonClasses,
  linkClasses,
  blackText = false,
}: ShowPhoneNumberProps) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [showPhone, setShowPhone] = useState("Show phone number");
  const [showSpinnerPhone, setShowSpinnerPhone] = useState(false);

  const handleShowPhoneNumber = async () => {
    setShowSpinnerPhone(true);
    try {
      let recaptchaToken: string | undefined;
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha("fetch_phone");
      }
      const phoneNumber =
        (await fetchPhone(recaptchaToken)) || "Phone number not found";
      setShowPhone(phoneNumber);
    } catch (error) {
      console.error("Error fetching phone:", error);
      setShowPhone("Phone not available");
    }
    setShowSpinnerPhone(false);
  };

  if (showPhone === "Show phone number") {
    return (
      <button
        onClick={handleShowPhoneNumber}
        className={classNames(
          "text-paragraph text-left italic self-start desktop:hover:cursor-pointer desktop:hover:opacity-90",
          blackText ? "text-black" : "text-beige",
          buttonClasses,
        )}
        aria-label="Show phone number"
      >
        {showSpinnerPhone ? (
          <div>
            <div className={blackText ? "spinner-blue" : "spinner"}></div>
          </div>
        ) : (
          showPhone
        )}
      </button>
    );
  }

  return (
    <Link
      href={`tel:${showPhone}`}
      className={classNames(
        "text-paragraph self-start tablet:hover:opacity-90",
        blackText ? "text-black" : "text-beige",
        linkClasses,
      )}
    >
      {showPhone}
    </Link>
  );
};

export default ShowPhoneNumber;
